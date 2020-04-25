export class DashBoard {
    displayResult: string = ''
    totalInputValues: object = {}
    inputField: HTMLInputElement = <HTMLInputElement>document.querySelector('input');

    captureNumber(elem: HTMLElement) {
        if (["*", "/", "+", "-"].includes(this.inputField.value)) {
            this.totalInputValues = {
                ...this.totalInputValues,
                [this.inputField.value]: this.inputField.value
            }
            this.inputField.value = ''
        }
        this.inputField.value += elem.innerText;
    }

    captureSign(elem: HTMLElement) {
        this.totalInputValues = {
            ...this.totalInputValues,
            [this.inputField.value]: this.inputField.value
        }
        console.log(this.totalInputValues)
        this.inputField.value = elem.innerText;
    }
}