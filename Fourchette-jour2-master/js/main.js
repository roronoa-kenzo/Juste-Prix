let game = {
     attempts: 0,
     searchedNumber: 0,
     enteredNumber: 0,
     score: []
}


// Le nombre max
var max = 20; 

// le nombre min
var min = 10;

// Le nombre cherché
function randomNumber(){
game.searchedNumber = Math.round(Math.random() * (max - min) + min);

// Le nombre saisi
game.enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
game.attempts = 1;
}

randomNumber();

function play(){
    generateNumber()
// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (game.enteredNumber !== game.searchedNumber) {
    // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
    if(!game.enteredNumber){
        break;
    }
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (game.enteredNumber < game.searchedNumber) {
        game.enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        game.enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    game.attempts += 1;
}

// on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
// soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
if(game.enteredNumber){
    // on affiche un message de victoire
    if (windows.confirm('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attempts +" " +"Voulez vous rejouez ?")){
        game.score.push(game.attempts);
        console.dir(game.score, {'maxArrayLengh':null});
        game.attempts = 1;
        play();
    }
} else {
    // on affiche un message d'abandon
    alert('Vous abandonnez ? Dommage...');
}


}

play();