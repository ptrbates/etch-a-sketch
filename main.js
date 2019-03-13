const createGrid = n => {
  const grid = document.createElement('div');
  grid.id = 'container';
  for (let i = 0; i < n; i++) {
    grid.appendChild(createRow(n));
  }
  return grid;
}

const createRow = n => {
  const row = document.createElement('div');
  row.className = 'row-div';
  for (let i = 0; i < n; i++) {
    row.appendChild(createCell(n));
  }
  return row;
}

const createCell = n => {
  const cell = document.createElement('div');
  cell.className = 'inner-div';
  cell.style.width = String(560 / n) + 'px';
  cell.style.height = cell.style.width;
  cell.style.backgroundColor = 'rgba(0,0,0,0)';
  cell.addEventListener('mouseover', e => darkenBG(e));
  return cell;
}

const darkenBG = e => {
  let bgColor = e.target.style.backgroundColor.split(',');
  if (bgColor[3]) { // If the color is not already completely opaque
    let opacity = bgColor[3].slice(0, -1);
    opacity = Number(opacity) + 0.1;
    bgColor[3] = opacity + ')';
    e.target.style.backgroundColor = bgColor.join(',');
  }
}

const createSelector = () => {
  const selector = document.createElement('div');
  selector.className = 'selector';
  selector.appendChild(createClear());
  selector.addEventListener('mouseover', e => replaceClearWithInput(e));
  return selector;
}

const createClear = () => {
  const clear = document.createElement('p');
  clear.textContent = 'Clear';
  clear.style.fontSize = '13px';
  clear.style.color = 'rgba(0,0,0,0.2)';
  return clear;
}

const createInput = () => {
  const input = document.createElement('input');
  input.placeholder = 'squares per side?';
  input.style.color = 'rgba(0,0,0,0.4)';
  input.style.width = '150px';
  input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      if (e.target.value <= 100) {
        replaceGrid(e.target.value);
      } else {
        input.placeholder = 'Not so greedy please.';
        e.target.value = '';
      }
    }
  });
  return input;
}

const replaceClearWithInput = e => {
  const parent = e.target.parentElement;
  parent.replaceChild(createInput(), e.target);
}

const replaceGrid = n => {
  const current = document.getElementById('container');
  document.getElementById('main').replaceChild(createGrid(n), current);
}

document.getElementById('main').appendChild(createSelector());
document.getElementById('main').appendChild(createGrid(10));