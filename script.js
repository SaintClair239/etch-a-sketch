const parentDiv = document.querySelector('.container');
const eraserButton = document.querySelector('.white');
const blackButton = document.querySelector('.black');
const randomButton = document.querySelector('.rainbow');
const resetBoard = document.getElementById('reset');
const buttons = [eraserButton, blackButton, randomButton];
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
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].removeAttribute('id')
    }
    eraserButton.setAttribute('id', 'white')
});

blackButton.addEventListener('click', () => {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'black';
        });
    };
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].removeAttribute('id')
    }
    blackButton.setAttribute('id', 'black')
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
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].removeAttribute('id')
    }
    randomButton.setAttribute('id', 'rainbow')
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
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].removeAttribute('id');
    }
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'white';
            
        });
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
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].removeAttribute('id');
    }
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'white';
            
        });
    };
});

sizeValue.addEventListener('mousemove', (e)=>{label.innerText = e.target.value + "x" + e.target.value});

let test = document.querySelectorAll('.grid');