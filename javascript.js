const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";

    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    })
    container.appendChild(cell)
    };
  };
;


let size = prompt("Enter Desired Size (1-100)");

if (size <= 100 && size > 0){
    makeGrid(size, size);
}else{
    alert("Size can only be 1-100. Please refresh the page and try again.")
    const errorMessage = document.createElement('h4');
    errorMessage.textContent = "Please refresh the page."
    container.appendChild(errorMessage);
};

