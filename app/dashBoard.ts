export class DashBoard {
    total: number = 0;
    totalInputValues: object = {}
    inputField: HTMLInputElement = <HTMLInputElement>document.querySelector('input');
    displayField: HTMLElement = <HTMLElement>document.querySelector('.display')


    captureNumber(elem: HTMLElement) {

        if (["*", "/", "+", "-"].includes(this.inputField.value)) {
            this.totalInputValues = {
                ...this.totalInputValues,
                [this.inputField.value + String(Object.keys(this.totalInputValues).length)]: this.inputField.value
            }
          
            this.inputField.value = ''
        }
        this.inputField.value += elem.innerText;
    }

    captureSign(elem: HTMLElement) {
        this.totalInputValues = {
            ...this.totalInputValues,
            [this.inputField.value + "obj" + String(Object.keys(this.totalInputValues).length)]: this.inputField.value
        }
        this.displayField.innerText = Object.values(this.totalInputValues)[Object.values(this.totalInputValues).length - 1];

        if (elem.innerText === "=") {
            this.total = this.calculateTotal(this.totalInputValues);
            this.inputField.value = ''

            this.displayField.innerText = String(this.total);
        }

        this.inputField.value = elem.innerText;
    }

    calculateTotal(operationObj: object): number {
        let arr: string[] = Object.values(operationObj);



        for (let i = 0; i < arr.length; i++) {

            if (["*", "/", "+", "-"].includes(arr[i])) {
                //is the current number is a sign we call the operation method that accept current number, the next number after the sign and the sign
                this.total = this.operation(this.total, parseFloat(arr[i + 1]), arr[i]);
                // after this operation remove the sign number at i + 1
                arr.splice(i + 1, 1);
            } else {
                this.total = parseFloat(arr[i])
            }
        }
        return this.total
    }

    operation(prev: number, curr: number, operator: string): number {
        switch (operator) {
            case "+":
                prev = prev + curr;
                return prev;
            case "-":
                prev = prev - curr;
                return prev;
            case "*":
                prev = prev * curr;
                return prev;
            case "/":
                prev = prev / curr;
                return prev;
            default:
                break;
        }
        return prev;

    }


}