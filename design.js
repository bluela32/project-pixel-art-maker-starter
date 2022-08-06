// Select color input
const colorPicker = document.querySelector('#colorPicker');
// Select size input
const sizePicker = document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const canvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    canvas.innerHTML = '';
    //table data to table row to canvas
    let tr, td;

    for (let r = 0; r < height.value; r++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let d = 0; d < width.value; d++) {
            td = document.createElement('td');
            tr.appendChild(td)
        }
    }
    //coloring
    canvas.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = colorPicker.value;
        }
    });
}
//submit
sizePicker.addEventListener('submit', function (e) {
    e.preventDefault();
    makeGrid();
});
