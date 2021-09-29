/* Define main global variables and set their default values */
let size = 16;
let coloringMode = 'fixed';
let color = 'rgb(0,0,0)';

/* Assign constant global variable to each html object */
const colorInput = document.getElementById('colorInput');
const fixedButton = document.getElementById('fixedButton');
const randomButton = document.getElementById('randomButton');
const incrementButton = document.getElementById('incrementButton');
const sizePanel = document.getElementById('sizePanel');
const sizeInput = document.getElementById('sizeInput');
const clearButton = document.getElementById('clearButton');
const container = document.querySelector('.container');

/* Set how each html object respond to change */
colorInput.onchange = (e) => (color = `${e.target.value}`);
fixedButton.onclick = () => (coloringMode = 'fixed');
randomButton.onclick = () => (coloringMode = 'random');
incrementButton.onclick = () => (coloringMode = 'increment');
sizeInput.onchange = (e) => {
  size = e.target.value;
  sizePanel.textContent = `${size}x${size}`;
  clearGrid();
};
clearButton.onclick = () => clearGrid();

/* Initial grid */
createGrid(16);

/* Create a square grid and assign to each cell a white background
and an event listener */
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;

  for (i = 0; i < size * size; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'rgb(255,255,255)';
    cell.addEventListener('mouseover', (e) => changeColor(e));
    container.appendChild(cell);
  }
}

/* Remove all cells and then create new ones according to size */
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(size);
}

/* Change cell color according to coloring mode */
function changeColor(e) {
  if (coloringMode == 'fixed') {
    e.target.style.backgroundColor = color;
  } else if (coloringMode == 'random') {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else if (coloringMode == 'increment') {
    let color = e.target.style.backgroundColor.match(/\d+/g);
    color = [
      parseInt(color[0], 10) - 25,
      parseInt(color[1], 10) - 25,
      parseInt(color[2], 10) - 25,
    ];
    e.target.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }
}
