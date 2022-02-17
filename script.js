const parentDiv = document.querySelector('.container');
const eraserButton = document.getElementById('white');
const blackButton = document.getElementById('black');
const randomButton = document.getElementById('rainbow');
const resetBoard = document.getElementById('reset');
let colorPicker = document.getElementById('color-picker');
let sizeValue = document.getElementById('value-slider')
let label = document.getElementById('range-number');
let askSize = 16; //deault value
let size = 600/askSize;
let amount = askSize*askSize;

createGrids();

eraserButton.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'white';
            
        });
    };
});

blackButton.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'black';
        });
    };
})

randomButton.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var j = 0; j < 6; j++) {
              color += letters[Math.floor(Math.random() * 16)];
            test[i].style.backgroundColor = color.toString();
        };
    })
}
       
});

colorPicker.addEventListener('change', (e) => {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = e.target.value;
        });
    };
   
});

resetBoard.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].style.backgroundColor = 'white';
    };
});

function removeGrids (){
    parentDiv.innerHTML ='';
}

function createGrids (){
    for (grids = 0; grids < amount; grids++) {
        eachGrids = document.createElement('div');
        eachGrids.className = 'grid';
        parentDiv.appendChild(eachGrids);
        eachGrids.style.width=`${size}px`;
        eachGrids.style.height=`${size}px`;
    };
}

sizeValue.addEventListener('change', (e)=>{
    askSize = e.target.value;
    amount = askSize*askSize;
    size = 600/askSize;
    removeGrids();
    createGrids();
    test = document.querySelectorAll('.grid');
});

sizeValue.addEventListener('mousemove', (e)=>{label.innerText = e.target.value + "x" + e.target.value});

let test = document.querySelectorAll('.grid');