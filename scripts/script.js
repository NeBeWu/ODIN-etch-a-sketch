const container = document.querySelector('.container');

let numberColumns = 16;

container.style.gridTemplateColumns = `repeat(${numberColumns}, auto)`;

for (i = 0; i < numberColumns * numberColumns; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  container.appendChild(cell);
}
