const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contatos', ContatoSchema);

class Contato {

  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
  }

  async register() {
    this.valid();
    if(this.errors.length > 0) return; 

    this.contato = await ContatoModel.create(this.body);

  }

  valid() {
    this.cleanUp();
    //validação
    //Nome obrigatório
    if(!this.body.nome) this.errors.push('O nome do contato é obrigatório');
    
    if(!this.body.email && !this.body.telefone) this.errors.push('É necessário informar o e-mail ou o telefone');

    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

  }

  cleanUp() {
    for(const chave in this.body) {
      if(typeof this.body[chave] !== 'string') this.body[chave] = '';
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone
    }
  }

  async buscaPorId(id) {
    if(typeof id !== 'string') return;
    return await ContatoModel.findById(id);
  }

  async edit(id) {
    if(typeof id !== 'string') return;
    this.valid();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
  }

  static async buscaContatos() {
    return await ContatoModel.find().sort( {criadoEm: -1 } );
  }

  static async delete(id) {
    if(typeof id !== 'string') return;
    return await ContatoModel.findByIdAndDelete({ _id: id});
  }

}

module.exports = Contato;
