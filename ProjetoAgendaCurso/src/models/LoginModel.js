const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valid();
    if(this.errors.length > 0) return; 

    await this.userExists(true);
    if(this.errors.length > 0) return; 

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    this.user = await LoginModel.create(this.body);
  }

  async login() {
    this.valid();
    if(this.errors.length > 0) return; 

    await this.userExists(false);
    if(this.errors.length > 0) return; 



  }

  async userExists(create = true) {
    this.user = await LoginModel.findOne({ email: this.body.email });
    console.log(this.user);
    //Se for criação de usuário
    if(create) {
      if(this.user) {
        this.errors.push('Usuário já cadastrado');
      }
    } else {
      if(!this.user) { 
        this.errors.push('Usuário não cadastrado');
      }
      else if(!bcryptjs.compareSync(this.body.password, this.user.password)) { 
        this.errors.push('Senha inválida');
        this.user = null;
      }
    }
  }

  valid() {
    this.cleanUp();
    //validação
    //e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    //senha precisa ter entre 5 e 50 caracteres
    if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
  }

  cleanUp() {
    for(const chave in this.body) {
      if(typeof this.body[chave] !== 'string') this.body[chave] = '';
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }

  }

}

module.exports = Login;
