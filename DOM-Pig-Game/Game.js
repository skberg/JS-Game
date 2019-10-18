//---------------------------------
//dato: 04.10.19
//athor: Svenn Kristoffer Berg 
//tutorila: Udemy jonas javascript
//----------------------------------


//DOM Access 

//the pigg game 


/*
- this game has 2 players, playing in rounds
- in each turn, a player rolls a dice as many times as he whishes. each result get added to his roundscroe
- but, if he rolls 1 he losses all hes score og he can hold his score and add on to his total score
- the fist player to 100 winns and the you will be able to start a new game. 
*/ 


var scores, roundScore, activePlayer, gameplaying; //declaring alle the diffrent ellements using a varibel 

init(); // calling the init fuction 



document.querySelector('.dice').style.display = 'none'; // hidding the dice 



//telling all the numbers to be 0

//score



// on button press roll and show dice button
document.querySelector('.btn-roll').addEventListener('click', function () {
    //do somthing

    if (gameplaying) { //cheking if the game is playing and granting acces
        // 1. Random number

        var dice = Math.floor(Math.random() * 6) + 1; // Dice rolling the random number


        //2. diplay the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; //displying the dice when button is click
        diceDOM.src = 'dice-' + dice + '.png'; //changsing the DOM img of what dice 

        //3. udate thr round score "if" the rolled number was not 1
        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //nexst player 
            nexsPlayer();


        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) { ///if game is ture NOT play
        //holde to the current score to global score
        scores[activePlayer] += roundScore;

        //udate the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // if player is or grater then 100 score he winns 
        // using a if to test and show the winner of the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = " Winner!";
            document.querySelector('.dice').style.display = "none"
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying = false;
        } else {
            //play on 
            nexsPlayer();
        }
    }



});

function nexsPlayer() {
    //nexst player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //next player start at 0
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');



    //hidding the dice when player changse
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0]; //the scores fore the plasyers 
    roundScore = 0; //roundScores 
    activePlayer = 0; //ho is the active player 
    gameplaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    //current
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';


    document.getElementById('name-0').textContent = " Player 1";
    document.getElementById('name-1').textContent = " Player 1";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}








/*------------------------------*/
// Referans 
//not the best way 
//this will remove the active class
//this will add the  active calss 
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');


//this will toggle the active class btween the diffrent player 
//document.querySelector('.player-0-panel').classList.toggle('active');
//document.querySelector('.player-1-panel').classList.toggle('active');

/*------------------------------*/


/*----------------------------*/
/*This is a one-line shorthand for an if-else statement*/
/* inside the else statment */

// === ( if it it's)
// ? ( then )
// : ( else )

/*----------------------------*/






//tesing to be used later


//dice = Math.floor(Math.random() * 6) + 1; // Random number generator for terningen 
//console.log(dice);  // logger det for å se resultat av terninkast 

//document.querySelector('#current-' + activePlayer).textContent = dice;   // legger det til et HTml element

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);





//-----------------//
//what i did today

//--07.10.19

//1. Jeg la til bilder på terning 
//2. Jeg la til informasjone i vær "current" utifra terningen 
//3. laget et if statment som bytter bå mellom spillere 
//4. byttet imellom hvem spiller som er active
//5. gjemte terninge når ny spiller blir valgt 


//--08.10.19   

//1. la til Hold funkjon 
//2. maniuplerte domen slik at winner blir kåret 
//3. laget en ny fukjon som holder det under
//4. if som ser om summen er nåd altså 100
//5. gjemmer terning igjen etter vinner kåret 



//--18.10.19

//1.
//2.
//3.
//4.   