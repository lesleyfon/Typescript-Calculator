import {DashBoard} from "./dashBoard"

let dashBoard = new DashBoard();


const numbers: HTMLElement  = <HTMLElement>document.getElementById("numbers");

const sign: HTMLElement  = <HTMLElement>document.getElementById('signs');


numbers.addEventListener("click", event =>{
    dashBoard.captureClickedElement(<HTMLElement>event.target)
})
sign.addEventListener("click", event =>{
    dashBoard.captureClickedElement(<HTMLElement>event.target)
})
