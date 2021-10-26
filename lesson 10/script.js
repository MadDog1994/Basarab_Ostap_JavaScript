const body = document.body;
const container = document.createElement('div');
container.classList.add('container');
container.style.height = '250px';
container.style.width = '250px';
container.style.margin = 'auto';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

// Method 1 

// function generateBlocks(quantity) {
//     body.appendChild(container);

//     for (let i = 0; i < 25; i++) {

//         container.insertAdjacentHTML('afterBegin', '<div class="cell"></div>')

//     }
//     let cell = document.querySelectorAll('.cell');
//     let cellR = [...cell];
//     cellR.forEach(cell => cell.style.width = '50px');
//     cellR.forEach(cell => cell.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8))
// }

// function interactiveColor() {
//     const cell = document.querySelectorAll('.cell');

//     for(let cells of cell){
//         cells.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
//     }
// }

// generateBlocks();

// function generateBlocksInterval() {
//     setInterval(() => {
//         interactiveColor()
//     }, 1000);
// }
// generateBlocksInterval();

// Method 2

function generateBlocks(amount = 25) {
    body.appendChild(container);

    for(let i = 1; i <= amount; i++){
        div = document.createElement('div'), div.classList = 'box';
        container.appendChild(div);
    }

    let box = document.querySelectorAll('.box');
    let boxArr = [...box];
    boxArr.forEach(box => box.style.width = '50px',background = '#' + parseInt(Math.random() * 0xffffff).toString(16));
};

function interactiveColor() {
    const allBox = document.querySelectorAll('.box');

    for(let box of allBox){
        box.style.background = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    };
};

function generateBlocksInterval() {
    setInterval(() => {
        interactiveColor()
    }, 1000);
};

generateBlocks();
generateBlocksInterval();