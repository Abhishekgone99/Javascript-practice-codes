// const p1Button = document.querySelector('#p1Button')
// const p2Button = document.querySelector('#p2Button')
// const p1Display = document.querySelector('#p1Display')
// const p2Display = document.querySelector('#p2Display')
// const reset = document.querySelector('#reset')
// const winningSelect = document.querySelector('#playTo')


// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = false;

// p1Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('winner')
//             p2Display.classList.add('losser')
//             p1Button.disabled = true
//             p2Button.disabled = true
//         }
//         p1Display.innerText = p1Score;
//     }

// })

// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('losser')
//             p2Display.classList.add('winner')
//             p1Button.disabled = true
//             p2Button.disabled = true
//         }
//         p2Display.innerText = p2Score;
//     }

// })



// winningSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     resetFn();
// })


// reset.addEventListener('click', resetFn)
// function resetFn() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.innerText = p1Score;
//     p2Display.innerText = p2Score;
//     p1Display.classList.remove('winner', 'losser')
//     p2Display.classList.remove('winner', 'losser')
//     p1Button.disabled = false
//     p2Button.disabled = false

// }



// refactoring the code :-



let p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

let p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}



const reset = document.querySelector('#reset')
const winningSelect = document.querySelector('#playTo')
let winningScore = 3;
let isGameOver = false;

function scoreUpdater(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner')
            opponent.display.classList.add('losser')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score;
    }

}

p1.button.addEventListener('click', function () {
    scoreUpdater(p1, p2)
})

p2.button.addEventListener('click', function () {
    scoreUpdater(p2, p1)

})



winningSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetFn();
})


reset.addEventListener('click', resetFn)
function resetFn() {
    isGameOver = false;

    for (p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('winner', 'losser')
        p.button.disabled = false
    }


    // p1.score = 0;
    // p2.score = 0;
    // p1.display.innerText = p1.score;
    // p2.display.innerText = p2.score;
    // p1.display.classList.remove('winner', 'losser')
    // p2.display.classList.remove('winner', 'losser')
    // p1.button.disabled = false
    // p2.button.disabled = false

}