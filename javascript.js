const grid = document.querySelector('#Grid');

generateGrid();

function generateGrid() {
    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            let gridNode = document.createElement('div');
            gridNode.classList.add('GridNode');
            grid.appendChild(gridNode);
        }
    }
}