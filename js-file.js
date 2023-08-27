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

function Draw(grid, row, col)
{
    let reset = document.querySelector('#clear');
    for(let i = 0 ; i < row ; i++)
        for(let j = 0 ; j < col ; j++)
        {
            let target = grid[i][j];
            target.addEventListener('mouseover', () => { // Color if hover
                target.classList.add('squarecolor');
            })
            reset.addEventListener('click', () => {
                target.classList.remove('squarecolor');
            })
        }
}

function Remove(grid, row, col, selector)
{
    for(let i = 0 ; i < row ; i++)
        for(let j = 0 ; j < col ; j++)
        {
            selector.classList.remove('squarecolor');
            selector.remove();
        }
}

function newGrid()
{
    let newGrid = document.querySelector('#new');
    newGrid.addEventListener('click', () => {
        newCols = prompt("Number of columns : ");
        newRows = prompt("=Number of rows : ")
    })
}

let squareGrid = document.querySelector('#grid');
let row = 15;
let col = 15;
const grid = CreateGrid(row, col, squareGrid);
Draw(grid, row, col);



