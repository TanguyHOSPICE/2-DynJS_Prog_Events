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
const displayMess1 = (e) => {
	displayText.innerHTML += `<p class='message'>${loginInput1.value}
    dit ${loginMess1.value}</p>`;
};
const displayMess2 = (e) => {
	displayText.innerHTML += `<p class='message'>${loginInput2.value}
    dit ${loginMess2.value}</p>`;
};

//stop btn
btnStop.addEventListener('click', (e) => {
	e.preventDefault();
});
