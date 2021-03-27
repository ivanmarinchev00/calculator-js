
class Calculator{
    // currentOperand = ''
    // previousOperand = ''
    constructor(previousOperandTextElemnt, currentOperandTextElemnt){
        this. previousOperandTextElemnt = previousOperandTextElemnt;
        this.currentOperandTextElemnt = currentOperandTextElemnt;
        // this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number){
            if(number === '.' && this.currentOperand.includes('.'))return
            this.currentOperand=this.currentOperand.toString() + number.toString()
      }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElemnt.innerText = this.currentOperand
    }

}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElemnt = document.querySelector('[data-previous-operand]');
const currentOperandTextElemnt = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElemnt, currentOperandTextElemnt)

numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
})