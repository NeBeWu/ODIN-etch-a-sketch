let coloringMode = 'fixed';
let color = 'rgb(0,0,0)';

const colorInput = document.getElementById('colorInput');
const fixedButton = document.getElementById('fixedButton');
const randomButton = document.getElementById('randomButton');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const container = document.querySelector('.container');

colorInput.onchange = (e) => (color = `${e.target.value}`);
fixedButton.onclick = () => (coloringMode = 'fixed');
randomButton.onclick = () => (coloringMode = 'random');
incrementButton.onclick = () => (coloringMode = 'increment');
resetButton.onclick = () => resetGrid();

createGrid(16);

function createGrid(numberColumns) {
  container.style.gridTemplateColumns = `repeat(${numberColumns}, auto)`;

  for (i = 0; i < numberColumns * numberColumns; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = 'rgb(255,255,255)';
    cell.addEventListener('mouseover', (e) => changeColor(e));
    container.appendChild(cell);
  }
}

function getGridSize() {
  let answer = prompt(
    'Please enter the number of rows/columns (min=1, max=100)',
    16
  );

  numberColumns = Number(answer);

  while (isNaN(numberColumns) || numberColumns < 1 || numberColumns > 100) {
    answer = prompt('Please enter the number of rows/columns', 16);
    numberColumns = Number(answer);
  }

  return numberColumns;
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function resetGrid() {
  clearGrid();
  let numberColumns = getGridSize();
  createGrid(numberColumns);
}

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
