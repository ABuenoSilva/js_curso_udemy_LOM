function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.clickBtn();
            this.pressionaEnter();
        },
        //Perdendo o "this" para o document
        /*
        clickBtn() {
            document.addEventListener('click', function(e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
            }.bind(this)); 
        },
        */
        //Se usar arrow function não é necessário utilizar o bind pq o this continua sendo o objeto principal
        clickBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delDigit();
                }
                if (el.classList.contains('btn-eq')) {
                    this.calcTotal();
                }

            });
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode===13) {
                    this.calcTotal();
                }
            });
        },
        btnToDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        delDigit() {
            this.display.value = this.display.value.slice(0,-1);
        },
        calcTotal() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {

            }
             
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();