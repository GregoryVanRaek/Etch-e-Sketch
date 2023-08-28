function CreateGrid(numRows, numCols, selector)
{
    const grid = [];
    let displayGrid = document.querySelector('#display');
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
            displayGrid.checked = true;
            square.style.width = `${(650/numCols)}px`;
            square.style.height = `${(650/numCols)}px`;
            rowDiv.appendChild(square);
        }
        grid.push(row);
    }
    return grid
}

function Draw(grid, row, col)
{
    let reset = document.querySelector('#clear');
    let color = document.querySelector('#color');
    let displayGrid = document.querySelector('#display');

    for(let i = 0 ; i < row ; i++)
        for(let j = 0 ; j < col ; j++)
        {
            let target = grid[i][j];
            target.addEventListener('mouseover', () => { 
                target.style.background = color.value;
            })
            reset.addEventListener('click', () => {
                target.style.background = '';
            })
            displayGrid.addEventListener('click', () => {
                target.classList.toggle('square');
            })
        }
}

function Remove(oldGrid, oldRow, oldCol, child)
{
    let color = document.querySelector('#color')
    for(let i = 0 ; i < oldRow ; i++)
        for(let j = 0 ; j < oldCol ; j++)
        {
            let target = oldGrid[i][j];
            target.classList.remove(color.value);
            target.remove();
        }
}

let squareGrid = document.querySelector('#grid');
let newButton = document.querySelector('#new');
let size = document.querySelector('#size')
let number = document.querySelector('#number');

let row = number.value;
let col = number.value;

number.addEventListener("input", () => {
    size.textContent = number.value + " x " + number.value;
})

let grid = CreateGrid(row, col, squareGrid);
Draw(grid, row, col);

newButton.addEventListener("click", function() {

    Remove(grid, row, col, squareGrid);

    row = number.value;
    col = number.value;
    grid = CreateGrid(row, col, squareGrid);

    Draw(grid, row, col);
});



