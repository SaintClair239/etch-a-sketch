const parentDiv = document.querySelector('.container');
let askSize = prompt ('how many');
let size = 800/askSize;
let amount = askSize*askSize;
const eraserButton = document.getElementById('white');
const blackButton = document.getElementById('black');
const randomButton = document.getElementById('rainbow');
let colorSelection;

for (let grids = 0; grids < amount; grids++) {
    eachGrids = document.createElement('div');
    eachGrids.className = 'grid';
    parentDiv.append(eachGrids);
    eachGrids.style.width=`${size}px`;
    eachGrids.style.height=`${size}px`;
};

const test = document.querySelectorAll('.grid');


eraserButton.addEventListener('click', () => {
    colorSelection = 'white'
    console.log (colorSelection);
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'white';
            
        });
    };
});

blackButton.addEventListener('click', () => {
    colorSelection = 'black'
    console.log (colorSelection);
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('mouseover', () => {
            test[i].style.backgroundColor = 'black';
            console.log (colorSelection);
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
            colorSelection = color.toString();
        };
        test[i].style.backgroundColor = colorSelection;
    })
}
       
});
//check I value if mao ba ang sayop