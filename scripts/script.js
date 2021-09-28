const CONTAINER = document.querySelector('.container');

let coloringMode = 'black';

blackButton.onclick = () => (coloringMode = 'black');
randomButton.onclick = () => (coloringMode = 'random');
resetButton.onclick = () => resetGrid();

createGrid(16);

function createGrid(numberColumns) {
  CONTAINER.style.gridTemplateColumns = `repeat(${numberColumns}, auto)`;

  for (i = 0; i < numberColumns * numberColumns; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', (e) => changeColor(e));
    CONTAINER.appendChild(cell);
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
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.lastChild);
  }
}

function resetGrid() {
  clearGrid();
  let numberColumns = getGridSize();
  createGrid(numberColumns);
}

function changeColor(e) {
  if (coloringMode == 'black') {
    e.target.style.backgroundColor = 'black';
  } else if (coloringMode == 'random') {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }
}
