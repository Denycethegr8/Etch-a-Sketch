const container = document.getElementById('container');
container.style.width = "720px"
container.style.height = "720px"

// 그리드 만드는 함수
function createDiv(n){
    for (let i = 0; i < n; i++){
       const row = document.createElement('div');
       row.className = "row"
       row.id  = "row"+i
       for (let j = 0; j < n; j++) {
        const column = document.createElement('div');
        row.appendChild(column)
        column.className = "column"
        column.id = "column"+j
        column.style.width = `${720/n}px`;
       }container.appendChild(row);
    }     
}


// 그리드 몇개 만들지 묻는 함수
function howMany(){
    return prompt("How many squares per side?")
}

// 버튼 div만들기
const body = document.querySelector('body');
const bttnDiv = document.createElement('div');
bttnDiv.className = 'bttnDiv';
body.insertBefore(bttnDiv, body.firstElementChild);

// 버튼 만들기
const howManyBttn = document.createElement('button');
bttnDiv.appendChild(howManyBttn);
howManyBttn.textContent = "CLICK"

const randomBttn = document.createElement('button');
bttnDiv.appendChild(randomBttn);
randomBttn.textContent = "RANDOM"

const pinkBttn = document.createElement('button');
bttnDiv.appendChild(pinkBttn);
pinkBttn.textContent = "PINK"

const BAndW = document.createElement('button');
bttnDiv.appendChild(BAndW);
BAndW.textContent = "B & W"


// 버튼에 이벤트리스너 넣기
howManyBttn.addEventListener('click', () => {
    createDiv(howMany());
});

randomBttn.addEventListener('click', random);

pinkBttn.addEventListener('click', pink);

BAndW.addEventListener('click', BandW);

// 그리드에 마우스 엔터 따라 색상 넣기

// 1. randomColor 만들기
const r1 = Math.floor(Math.random()*256);
const r2 = Math.floor(Math.random()*256);
const r3 = Math.floor(Math.random()*256);
const r4 = Math.floor(Math.random() * 11);
const randomRGBA = `rgba(${r1}, ${r2}, ${r3}, ${r4})`

function random(){
    const column = document.querySelectorAll('.column')

    function hover(){
        let random = Math.floor(Math.random()*256)
        for (let i = 0; i < column.length; i++){
            column[i].addEventListener('mouseenter', () => column[i].style.backgroundColor = randomRGBA
            )
            }
        }
    hover();
}


// 2. 무지개 선택하기
function pink(){

    const column = document.querySelectorAll('.column')

    function hover(){
        let random = Math.floor(Math.random()*256)
        for (let i = 0; i < column.length; i++){
            column[i].addEventListener('mouseenter', () => column[i].style.backgroundColor = `rgba(255, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.8)`)
            }
        }
    hover();
}

// 3. black 10 step 만들기
function BandW() {
    const column = document.querySelectorAll('.column')

    function hover(){
        for (let i = 0; i < column.length; i++){
            for (let j = 0; j < 10; j++) {
                function increase(a){
                    a = a + 0.1;
                    return a;
                }
            column[i].addEventListener('mouseenter', () => column[i].style.backgroundColor = `rgba(0,0,0,${increase(j*0.1)})`)
            }
        }
        }
    hover();
}



// reset 버튼 만들고 이벤트 리스너 함수 넣기
function reset(){
    const column = document.querySelectorAll('.column')
    const row = document.querySelectorAll('.row')
    for (let i = 0; i < row.length; i++){
        row[i].remove();
        column[i].remove();
    }
}

const resetBtn = document.createElement('button');
resetBtn.className = 'reset';
resetBtn.id = 'resetBtn';
bttnDiv.appendChild(resetBtn);
resetBtn.textContent = 'RESET';

resetBtn.addEventListener('click', reset);