export class DashBoard {
    inputValue: string = ''
    displayResult: string = ''
    inputField:HTMLInputElement = <HTMLInputElement> document.querySelector('input');

    captureClickedElement(elem:HTMLElement){
        this.inputValue = elem.innerText;
        this.inputField.value += this.inputValue
    }
}