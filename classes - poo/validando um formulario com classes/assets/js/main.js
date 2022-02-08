class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const fieldsValid = this.checkFields();
        const pwdValid = this.checkPasswords();

        if(fieldsValid && pwdValid) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    checkFields() {
        let valid = true;

        //Limpa erros
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        //Checagem de preenchimento
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            if(!campo.value){
                this.createError(campo, `Campo "${campo.previousElementSibling.innerHTML}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) {
                    valid = false;
                }
            }

        }

        return valid;
    }

    validaCPF(campo) {
        let cpfValido = new ValidaCpf(campo.value);
        if(!cpfValido.verifica()) {
            this.createError(campo, `CPF inválido`);
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        let valid = true; 
        let usuario = campo.value;
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, `Usuário precisa ter entre 3 e 12 caracteres`);
            valid = false;
        }
        if(!usuario.match(/^['a-zA-Z0-9']+$/g)) {
            this.createError(campo, `Usuário somente pode conter letras ou números`);
            valid = false;
        }
        return valid;
    }

    checkPasswords() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.createError(senha, `As senhas informadas devem ser iguais.`);
            this.createError(repetirSenha, `As senhas informadas devem ser iguais.`);
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.createError(senha, `Senha precisa ter entre 6 e 12 caracteres`);
            valid = false;
        }

        return valid;
    }

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }
}

const valida = new ValidaFormulario();