const rowCount = document.querySelector('.rowCount');
const colCount = document.querySelector('.colCount');
const generateBtn = document.querySelector('.generate');
const container = document.querySelector('.container');

generateBtn.addEventListener('click', function matrixSpiral() {
    container.innerHTML = '';
    let rows = +rowCount.value;
    let cols = +colCount.value;
    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(""));
    let counter = 1,
        startCol = 0,
        endCol = cols - 1,
        startRow = 0,
        endRow = rows - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            matrix[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let j = endRow; j >= startRow; j--) {
            matrix[j][startCol] = counter;
            counter++
        }
        startCol++;
    }
    console.log(matrix);

    let table = document.createElement('table');

    matrix.forEach((el) => {
        let row = document.createElement('tr');
        el.forEach((elem) => {
            let cell = document.createElement('td');
            cell.innerHTML = elem;
            row.appendChild(cell);
        })
        table.appendChild(row);
    })
    container.appendChild(table);
});