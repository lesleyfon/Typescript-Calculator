import {DashBoard} from "./dashBoard"

let dashBoard = new DashBoard();


const numbers: NodeList  = <NodeList>document.querySelectorAll("[data-number]");

const operand: NodeList  = <NodeList>document.querySelectorAll("[data-operand]");

numbers.forEach(number => {
    
    number.addEventListener("click", (e) => {
        dashBoard.captureNumber(<HTMLElement>e.target)
    });
})

operand.forEach(element => {

    element.addEventListener("click", event =>{
        dashBoard.captureSign(<HTMLElement>event.target)
    })
});