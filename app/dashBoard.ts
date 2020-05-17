export class DashBoard {
    total: number = 0;
    totalInputValues: string[] = []
    inputField: HTMLInputElement = <HTMLInputElement>document.querySelector('input');
    displayField: HTMLElement = <HTMLElement>document.querySelector('.display')


    captureNumber(elem: HTMLElement) {
        if (["*", "/", "+", "-", "="].includes(this.inputField.value)) {
            this.inputField.value = "";
        }
        this.inputField.value += elem.innerText;
    }

    captureSign(elem: HTMLElement) {

        this.displayField.innerText = this.inputField.value

        if (["*", "/", "+", "-", "="].includes(elem.innerText)) {
            this.totalInputValues.push(this.inputField.value)
            this.totalInputValues.push(elem.innerText)
            this.inputField.value = elem.innerText
        }

        if (elem.innerText === "=") {

            this.total = this.calculateTotal(this.totalInputValues);
            this.inputField.value = ''
            this.displayField.innerText = String(this.total);
            // this.totalInputValues = {
            //     [this.total + 'obj']: String(this.total);
            // }
            this.totalInputValues = []
            return
        }

        this.inputField.value = elem.innerText;
    }

    calculateTotal(values: string[]): number {
        let arr: string[] = values;
        const equalSign = arr.splice((arr.length-1), 1)
        console.log(arr)
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