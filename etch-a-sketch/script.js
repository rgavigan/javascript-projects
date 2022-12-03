const grid = document.querySelector(".container");
const userColourButton = document.querySelector(".color-choice");
const userColour = document.querySelector("#input-color");

createGrid = () => {
        for (let i = 0; i < 256; i++) {
                const div = document.createElement('div');
                div.classList.add('gridSquare');
                div.addEventListener('mouseover', function (e) {
                        e.target.style.backgroundColor = 'blue';
                })
                grid.appendChild(div);
        }
};

function removeChildNodes(parent) {
        while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
        }
}


const input = document.querySelector('#slider');
const displayValue = document.querySelector('.value');
input.addEventListener('input', function () {
        let val = document.getElementById('slider').value;
        displayValue.textContent = `${val} x ${val}`;
        removeChildNodes(grid);
        grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
        for (let i = 0; i < val*val; i++) {
                const div = document.createElement('div');
                div.classList.add('gridSquare');
                div.addEventListener('mouseover', function(e) {
                        e.target.style.backgroundColor = 'blue';
                })
                grid.appendChild(div);
        }
});

const reset = document.querySelector(".reset");
reset.addEventListener('click', function () {
        let gridSquare = grid.children
        let val = document.getElementById('slider').value
        for (let i = 0; i < val*val; i++) {
                gridSquare[i].style.backgroundColor = 'white';
        }
})

userColour.addEventListener('input', function () {
        let val = document.getElementById('slider').value;
        let newColor = document.getElementById('input-color').value;
        let gridSquare = grid.children;
        for (let i = 0; i < val*val; i++) {
                gridSquare[i].addEventListener('mouseover', function(e) {
                        e.target.style.backgroundColor = newColor;
                })
        }
});

createGrid();