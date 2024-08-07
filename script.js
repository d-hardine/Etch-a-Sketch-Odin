const container = document.querySelector('.container');

function makeGrid () {
    for (let i=0; i < 16; i++) {
        for (let j=0; j < 16; j++) {
            row = document.createElement('div');
            container.appendChild(row);
            row.classList.add('draw');
            /*row.textContent = `${i},${j}`*/
        }
    }
}

makeGrid();

draw = document.querySelectorAll('.draw');
console.log(draw);
for (let i =0; i < 256; i++) {
    draw[i].addEventListener('mouseover', function(e) {
        console.log('draw clicked');
        draw[i].style.backgroundColor = 'black';
    })
}