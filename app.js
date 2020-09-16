const form = document.querySelector('form');
const number = document.querySelector('#number');

var msgAlert = document.querySelector('.alert');
var click = 0;
var btn = document.querySelector('.btn');
var main = document.querySelector('.main');


main.addEventListener('mousedown', function (e) {
    if (e.target.className === 'btn play_again') {
        window.location.reload();
    }
})

btn.addEventListener('click', onClick);



function onClick(e) {


    var rand = parseInt(Math.floor(Math.random() * 10) + 1);
    rand = 9;
    //console.log(rand);
    guess = number.value;
    console.log(guess);


    if (isNaN(number.value) || number.value < 1 || number.value > 10) {
        document.querySelector('.alert').innerText = `Please enter a value between 1 to 10`;

    }



    if (number.value === rand) {

        gameOver(true);
        msgAlert.textContent = `${guess} is correct,You win`;
        msgAlert.style.color = 'lightgreen';

    }
    else {
        click++;
        if (click === 3) {
            gameOver(false);
            msgAlert.textContent = `Game over,You have lost. the correct number is ${rand}`;
            msgAlert.style.color = 'red';
        }
        else {
            number.style.border = '2px solid red';

            document.querySelector('.alert').innerText = `${number.value} is not correct, You have ${3 - click} chances left`;
            number.value = '';

        }
    }

    e.preventDefault();
}


function gameOver(win) {
    let color;
    win === true ? color = 'lightgreen' : color = 'red';

    number.disabled = true;
    number.style.border = '2px solid';

    number.style.borderColor = color;
    btn.className += ' play_again';
    btn.innerText = 'Play Again';



}



