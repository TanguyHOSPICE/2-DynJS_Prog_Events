/*Vous allez devoir créer une page HTML comportant :
-un formulaire pour le premier participant avec les champs pseudo et message, ainsi qu'un bouton envoyer.
-un formulaire identique pour le second participant.
-une zone où les messages seront affichés.

Un script JavaScript permettant :
-d'afficher les messages dans l'ordre de la saisie dans la zone prévue à cet effet.
-de rafraîchir l'affichage de la zone de texte.
-de bloquer la possibilité à l'un des deux participants d'envoyer des messages.

Vous pouvez varier les types d'événements à utiliser. */

//déclare variable des participants
//Participant 1
const loginInput1 = document.querySelector('#nickname1');
const loginMess1 = document.querySelector('#message');
const btnSend1 = document.getElementById('btnSend1');

//Participant 2
const loginInput2 = document.querySelector('#nickname2');
const loginMess2 = document.querySelector('#message2');
const btnSend2 = document.getElementById('btnSend2');

//Affichage
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
const displayText = document.getElementById('display-text');

//Event on send btn
btnSend1.addEventListener('click', (e) => {
	displayMess1(e);
});
btnSend2.addEventListener('click', (e) => {
	displayMess2(e);
});

//Messages
const displayMess1 = () => {
	displayText.innerHTML += `<p class='message'>${loginInput1.value}
    dit : ${loginMess1.value}</p>`;
};
const displayMess2 = () => {
	displayText.innerHTML += `<p class='message'>${loginInput2.value}
    dit : ${loginMess2.value}</p>`;
};

//Déclare la fonction reset
const reset = () => {
	displayText.innerHTML = '';
};
//Reset btn
btnReset.addEventListener('click', reset);

//stop btn
btnStop.addEventListener('click', (e) => {
	btnSend1.setAttribute('disabled', 'disabled');
	btnSend1.style.background = 'red';
	btnSend1.innerText = 'Bloqué';
});
//====================Solution=============
/* 
// Participant 1
const btnsend1 = document.getElementById('btn-send1');
const login1 = document.querySelector('#login1');
const message1 = document.querySelector('#message1');
// Participant 2
const btnsend2 = document.getElementById('btn-send2');
const login2 = document.querySelector('#login2');
const message2 = document.querySelector('#message2');
// Zone d'affichage
const displayText = document.getElementById('display-text');
const currentMessage = document.getElementsByClassName('message');
// Boutons d'actions
const btnreset = document.getElementById('reset');
const stop = document.getElementById('stop');

btnsend1.addEventListener('click', () =>
	setTimeout(function (e) {
		displayMessage1(e);
	}, 2000)
);

btnsend2.addEventListener('click', () =>
	setTimeout(function (e) {
		displayMessage2(e);
	}, 2000)
);

function displayMessage1(e) {
	displayText.innerHTML += '<p class="message">' + login1.value + ' dit ' + message1.value + '</p>';
}
function displayMessage2(e) {
	displayText.innerHTML += '<p class="message">' + login2.value + ' dit ' + message2.value + '</p>';
}

btnreset.addEventListener('click', reset);
function reset() {
	displayText.innerHTML = '';
}

stop.addEventListener('click', stopMessage);
function stopMessage(e) {
	e.preventDefault();
	btnsend2.setAttribute('disabled', 'disabled');
	btnsend2.removeEventListener('click', displayMessage2);
}
 */
