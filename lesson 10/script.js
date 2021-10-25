const body = document.body;
const container = document.createElement('div');
container.classList.add('container');
container.style.height = '250px';
container.style.width = '250px';
container.style.margin = 'auto';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

function generateBlocks() {
    body.appendChild(container);

    for (let i = 0; i < 25; i++) {
        container.insertAdjacentHTML('afterBegin', '<div class="cell"></div>')
    }

    let cell = document.querySelectorAll('.cell');
    let cellR = [...cell];
    cellR.forEach(cell => cell.style.width = '50px');
    cellR.forEach(cell => cell.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8))

}
// generateBlocks();

function generateBlocksInterval() {
    generateBlocks()
    setInterval(() => {
        location.reload()
    }, 1000);
}
generateBlocksInterval();
