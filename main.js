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
    row.appendChild(createCell());
  }
  return row;
}

const createCell = () => {
  const cell = document.createElement('div');
  cell.className = 'inner-div';
  cell.style.width = '56px';
  cell.style.height = '56px';
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

document.getElementById('main').appendChild(createGrid(10));