const container = document.querySelector('.container');

createGrid(16);

function createGrid(numberColumns) {
  container.style.gridTemplateColumns = `repeat(${numberColumns}, auto)`;

  for (i = 0; i < numberColumns * numberColumns; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell);
  }
}

function changeColor() {
  this.style.backgroundColor = 'black';
}

function getGridSize() {
  let answer = prompt(
    'Please enter the number of rows/columns (min=1, max=100)',
    16
  );

  numberColumns = Number(answer);

  while (
    isNaN(numberColumns) ||
    numberColumns < 1 ||
    numberColumns > 100
  ) {
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
