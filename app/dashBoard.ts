export class DashBoard {
    inputValue: string = ''
    displayResult: string = ''
    inputField:HTMLInputElement = <HTMLInputElement> document.querySelector('input');

    captureNumber(elem:HTMLElement){
        this.inputValue = elem.innerText;
        this.inputField.value += this.inputValue
    }

    captureSign(elem:HTMLElement) {
        let firstEntry: string = this.inputField.value;
        console.log(firstEntry)
        this.inputField.value = elem.innerText;
       

    }
}