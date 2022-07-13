let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
const grid = document.querySelector('.grid');
const pic = document.querySelector('.pic');
const numbers = [
    {
        one: 0,
        two: 1,
        three: 2
    },
    {
        one: 3,
        two: 4,
        three: 5
    },
    {
        one: 6,
        two: 7,
        three: 8
    },
    {
        one: 0,
        two: 3,
        three: 6
    },
    {
        one: 1,
        two: 4,
        three: 7
    },
    {
        one: 2,
        two: 5,
        three: 8
    },
    {
        one: 0,
        two: 4,
        three: 8
    },
    {
        one: 2,
        two: 4,
        three: 6
    }
];
document.addEventListener("DOMContentLoaded", function drawGameBoard() {
    // массив gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const divElem = document.createElement('div');
            divElem.classList.add('elem');
            divElem.innerText = '';
            grid.appendChild(divElem);
        }
    }
    let arrCell = document.querySelectorAll('.elem');
    function examination() {
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            // крестики
            if (arrCell[`${element.one}`].textContent == 'X' && arrCell[`${element.two}`].textContent == 'X' && arrCell[`${element.three}`].textContent == 'X') {
                text.innerText = 'Ура!..Победили крестики!!!'
                arrCell[`${element.one}`].style.backgroundColor = 'orangered';
                arrCell[`${element.two}`].style.backgroundColor = 'orangered';
                arrCell[`${element.three}`].style.backgroundColor = 'orangered';
                text.style.color = 'orangered';
            };

            // нолики
            if (arrCell[`${element.one}`].textContent == 'O' && arrCell[`${element.two}`].textContent == 'O' && arrCell[`${element.three}`].textContent == 'O') {
                text.innerText = 'Ура!..Победили нолики!!!'
                arrCell[`${element.one}`].style.backgroundColor = 'orangered';
                arrCell[`${element.two}`].style.backgroundColor = 'orangered';
                arrCell[`${element.three}`].style.backgroundColor = 'orangered';
                text.style.color = 'orangered';
            };

        }
        for (let i = 0; i < arrCell.length; i++) {
            if (arrCell[0].style.backgroundColor == 'yellow'
                && arrCell[1].style.backgroundColor == 'yellow'
                && arrCell[2].style.backgroundColor == 'yellow'
                && arrCell[3].style.backgroundColor == 'yellow'
                && arrCell[4].style.backgroundColor == 'yellow'
                && arrCell[5].style.backgroundColor == 'yellow'
                && arrCell[6].style.backgroundColor == 'yellow'
                && arrCell[7].style.backgroundColor == 'yellow'
                && arrCell[8].style.backgroundColor == 'yellow'
                && text.innerText !== 'Ура!..Победили крестики!!!'
                && text.innerText !== 'Ура!..Победили нолики!!!') {
                text.style.left = '70px'
                text.innerText = 'Победителя нет';
                arrCell[0].style.backgroundColor = 'red'
                arrCell[1].style.backgroundColor = 'red'
                arrCell[2].style.backgroundColor = 'red'
                arrCell[3].style.backgroundColor = 'red'
                arrCell[4].style.backgroundColor = 'red'
                arrCell[5].style.backgroundColor = 'red'
                arrCell[6].style.backgroundColor = 'red'
                arrCell[7].style.backgroundColor = 'red'
                arrCell[8].style.backgroundColor = 'red'
            }
        }
    }
    document.addEventListener('click', (event) => {
        if (event.target.classList == 'elem' && hod_1.innerText == '' || hod_2.innerText == 'Нолики') {
            let targetCell = event.target;
            targetCell.style.backgroundColor = 'yellow';
            targetCell.style.border = '5px solid black';
            text.innerText = 'Ходят крестики';
            // то крестики
            document.addEventListener('keydown', (evt) => {
                if (evt.code == 'KeyX') {
                    if (text.innerText == 'Ходят крестики' && targetCell.style.border == '5px solid black' && text.innerText !== 'Ходят нолики' && hod_1.innerText !== 'Крестики' && hod_2.innerText !== '')
                        player_1.style.border = '15px solid orange';
                    player_2.style.border = '7px solid orange';
                    hod_1.innerText = 'Крестики';
                    hod_2.innerText = '';
                    targetCell.textContent = 'X';
                    text.innerText = 'Выберите клетку';
                    targetCell.style.border = '3px solid black';
                    examination()
                }
                if (evt.code == 'KeyO') {
                    return false
                }
            })
        }
        if (event.target.classList == 'elem' && hod_1.innerText == 'Крестики' && text.innerText == 'Выберите клетку') {
            let targetCellNew = event.target;
            targetCellNew.style.backgroundColor = 'yellow';
            targetCellNew.style.border = '5px solid black';
            text.innerText = 'Ходят нолики';

            document.addEventListener('keydown', (evt) => {
                if (evt.code == 'KeyO') {
                    if (targetCellNew.style.border == '5px solid black' && hod_1.innerText == 'Крестики' && text.innerText == 'Ходят нолики')
                        player_2.style.border = '15px solid orange';
                    player_1.style.border = '7px solid orange';
                    hod_2.innerText = 'Нолики';
                    hod_1.innerText = '';
                    targetCellNew.textContent = 'O';
                    targetCellNew.style.border = '3px solid black';
                    text.innerText = 'Выберите клетку';
                    examination()
                }
                if (evt.code == 'KeyX') {
                    return false
                }
            })
        }
        console.log(event)
    })
})

// 2 игрока
const player_1 = document.createElement('div');
player_1.classList.add('pl_1');

const player_2 = document.createElement('div');
player_2.classList.add('pl_2');

pic.appendChild(player_1);
pic.appendChild(player_2);

const hod_1 = document.createElement('div');
hod_1.classList.add('hod_1');
hod_1.innerText = '';

const hod_2 = document.createElement('div');
hod_2.classList.add('hod_2');
hod_2.innerText = '';

pic.appendChild(hod_1);
pic.appendChild(hod_2);

const textDiv = document.querySelector('.text_1');
let text = document.createElement('div');
text.classList.add('text');
text.innerText = 'Выберите клетку';
textDiv.appendChild(text);

document.querySelector('button').addEventListener('click', () => {
    window.location.reload();
})

