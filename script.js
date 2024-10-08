let drawingSize = 850;
const container = document.querySelector('.container');
container.style.width =container.style.height = drawingSize + 'px';
console.log(container);

function makeGrid (grid) {
    for (let i=0; i < (grid*grid); i++) {
        let pixel = document.createElement('div');
        pixel.style.width = ((drawingSize/grid) -2) + 'px';
        pixel.style.height = ((drawingSize/grid) -2) + 'px';
        container.appendChild(pixel);
        pixel.classList.add('draw');
    }
    draw = document.querySelectorAll('.draw');
    return draw;
    }

function destroyGrid() {
    for (let i = 0; i < (initialGrid * initialGrid); i++) {
        container.removeChild(draw[i]);
    }
}

function redraw() {
    for (let i =0; i < (initialGrid * initialGrid); i++) {
        draw[i].addEventListener('mouseover', function() {
            draw[i].style.backgroundColor = 'black';
        })
    }
}

let initialGrid = 16;
makeGrid(initialGrid);
redraw();

const gridButton = document.querySelector('.grid-button');
gridButton.addEventListener('click', function() {
    let newGrid = prompt('insert the size of the grid: (<=100)' );
    if (newGrid > 100) {
        alert('the size must less than 101!');
    }
    else if (newGrid <= 100 && newGrid != null && newGrid != '') {
        console.log(newGrid);
        destroyGrid();
        makeGrid(newGrid);
        initialGrid = newGrid;
        redraw();
        return initialGrid;
    }
    else if(newGrid == null) {;
        alert("Resize cancelled");
        return;
    }
    else {
        console.log(newGrid);
        alert("invalid prompt, please try again.");
    }
}
)
