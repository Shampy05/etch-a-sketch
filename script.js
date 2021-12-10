const div = document.querySelector('#square-grid');


// A function to display a grid of divs. 
function makeRows (cell) { 
    div.style.setProperty('--grid-cell', cell);
    for (i=0; i<(cell*cell); i++) {
        let box = document.createElement('div'); 
        div.appendChild(box).className = 'grid-item';
    }
}

makeRows(16);
      
