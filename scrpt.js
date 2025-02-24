function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "600px";
    container.style.height = "600px";
    
    const squareSize = 600 / size + "px";
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
}

function changeColor(event) {
    let opacity = parseFloat(event.target.dataset.opacity) || 0;
    opacity = Math.min(opacity + 0.1, 1);
    event.target.dataset.opacity = opacity;
    
    const vibrantColors = [
        "#FF5733", "#33FF57", "#3357FF", "#F4A261", "#E76F51", "#2A9D8F", "#E9C46A", "#F94144"
    ];
    const color = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
    event.target.style.backgroundColor = color;
    event.target.style.opacity = opacity;
}

function setGridSize() {
    let size = document.getElementById("gridSize").value;
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid size! Please enter a number between 1 and 100.");
    }
}

document.addEventListener("DOMContentLoaded", () => createGrid(16));