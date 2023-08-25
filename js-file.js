// Creation of the grid
function CreateGrid(numRows, numCols, selector)
{
    const grid = [];
    for(let i = 0 ; i < numRows ; i++)
    {
        const row = [];
        let rowDiv = document.createElement('div');
        selector.appendChild(rowDiv);
        rowDiv.classList.add('row');
        rowDiv.id = i;
        for(let j = 0 ; j < numCols ; j++)
        {
            let square = document.createElement('div');
            row.push(square);
            square.dataset.row = i;
            square.dataset.col = j;
            square.classList.add('square');
            rowDiv.appendChild(square);
        }
        grid.push(row);
    }
    return grid
}

let squareGrid = document.querySelector('#grid');
let row = 16;
let col = 16;
const grid = CreateGrid(row, col, squareGrid);