const grid = document.querySelector('#Grid');
const colorPalletGrid = document.querySelector('#Pallet');
var selectedColor = '#000000';
const colorPallet = ['#2e222f','#3e3546', '#625565', '#966c6c', '#ab947a', '#694f62', '#7f708a', '#9babb2', '#c7dcd0', '#ffffff', '#6e2727', '#b33831', '#ea4f36', '#f57d4a', '#ae2334', '#e83b3b', '#fb6b1d', '#f79617', '#f9c22b', '#7a3045', '#9e4539', '#cd683d', '#e6904e', '#fbb954', '#4c3e24', '#676633', '#a2a947', '#d5e04b', '#fbff86', '#165a4c', '#239063', '#1ebc73', '#91db69', '#cddf6c', '#313638', '#374e4a', '#547e64', '#92a984', '#b2ba90', '#0b5e65', '#0b8a8f', '#0eaf9b', '#30e1b9', '#8ff8e2', '#323353', '#484a77', '#4d65b4', '#4d9be6', '#8fd3ff', '#45293f', '#6b3e75', '#905ea9', '#a884f3', '#eaaded', '#753c54', '#a24b6f', '#cf657f', '#ed8099', '#831c5d', '#c32454', '#f04f78', '#f68181', '#fca790', '#fdcbb0' ];

generateGrid();
generateColorPallet();

function generateGrid() {
    for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 16; y++) {
            let gridNode = document.createElement('div');
            gridNode.classList.add('GridNode');
            grid.appendChild(gridNode);
            gridNode.onclick = () => gridNode.style.backgroundColor = selectedColor;;
        }
    }
}

function generateColorPallet() {
    colorPallet.forEach(element => {
        let gridNode = document.createElement('div');
        gridNode.classList.add('GridNode');
        colorPalletGrid.appendChild(gridNode);
        gridNode.style.backgroundColor = element;
        gridNode.onclick = () => selectedColor = element;
    });
}