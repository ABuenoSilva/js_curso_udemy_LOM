function Calculadora() {

        const display = document.querySelector('.display');

        this.inicia = () => {
            clickBtn();
            pressionaEnter();
        };

        //Se usar arrow function não é necessário utilizar o bind pq o this continua sendo o objeto principal
        const clickBtn = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    delDigit();
                }
                if (el.classList.contains('btn-eq')) {
                    calcTotal();
                }

            });
        };

        const pressionaEnter = () => {
            display.addEventListener('keyup', (e) => {
                if(e.keyCode===13) {
                    calcTotal();
                }
            });
        };

        const btnToDisplay = (valor) => {
            display.value += valor;
        };

        const clearDisplay = () => {
            display.value = '';
        };

        const delDigit = () => {
            display.value = display.value.slice(0,-1);
        }; 

        const calcTotal = () => {
            let conta = display.value;
            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                display.value = String(conta);
            } catch (e) {

            }
             
        }
}

const calculadora = new Calculadora();
calculadora.inicia();