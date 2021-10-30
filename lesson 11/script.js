const box = document.querySelectorAll('.box');
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];

function playNote(box) {
    const sound = document.getElementById(box.dataset.key);
    sound.currentTime = 0;
    sound.play();
    box.classList.add('active');
}

function removeActive(box) {
    box.classList.remove('active');
}

box.forEach(note => {
    note.addEventListener('mousedown', () => playNote(note));
    note.addEventListener('mouseup', () => removeActive(note));
});

document.addEventListener('keydown', e => {
    const key = e.key;
    const keyIndex = keys.indexOf(key);
    if (keyIndex > -1) {
        playNote(box[keyIndex])
    }
})
document.addEventListener('keyup', e => {
    const key = e.key;
    const keyIndex = keys.indexOf(key);
    if (keyIndex > -1) {
        removeActive(box[keyIndex]);
    }
})






