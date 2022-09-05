let color = 'rosybrown'
const board = document.querySelector('.board');

function fillBoard(size){
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    const amount = size**2
    for (i=0; i<amount; i++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square')
        board.appendChild(square);    
        square.style.backgroundColor='rosybrown';
        square.addEventListener('mouseover', etchSquare);
    }
}

function changeSize(input){
    warningMsg.remove();
    if (2<=input && input<=200)fillBoard(input)
    else warning(); 
}

const select = document.querySelector('.select')
const warningMsg = document.createElement('p');
warningMsg.textContent="Please input number from 2 to 200";

function warning(){
    warningMsg.remove();
    select.appendChild(warningMsg);
}

function etchSquare(){
    const currentBgColor = this.style.backgroundColor;
    const currentOpacity = this.style.opacity;
    if (color == 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    } else if (color == 'opacity') {
        if (currentOpacity == '1') this.style.opacity = 0;
        else this.style.opacity = Number(currentOpacity) + 0.1;
    } else {
        this.style.backgroundColor = color;
        this.style.opacity = 1;
    }
    console.log(color);
}

function changeColor(choice){
    color = choice;
}

function reset(){
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => {
        div.style.backgroundColor = 'rosybrown';
        div.style.opacity = 1;
    });
}