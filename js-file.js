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
            square.style.width = `${(750/numCols)}px`;
            square.style.height = `${(750/numCols)}px`;
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

function Remove(oldGrid, oldRow, oldCol, child)
{
    for(let i = 0 ; i < oldRow ; i++)
        for(let j = 0 ; j < oldCol ; j++)
        {
            let target = oldGrid[i][j];
            target.classList.remove('squarecolor');
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


