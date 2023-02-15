//déclare variable des participants
//Participant 1
const loginInput1 = document.querySelector('#nickname1');
const loginMess1 = document.querySelector('#message');
const btnSend1 = document.getElementById('btnSend1');

//Participant 2
const loginInput2 = document.querySelector('#nickname2');
const loginMess2 = document.querySelector('#message2');
const btnSend2 = document.getElementById('btnSend1');

const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
const displayText = document.getElementById('display-text');

btnSend1.addEventListener('click', (e) => {
	mess1(e);
});

const mess1 = (e) => {
	displayText.innerHTML += `<p class='message'>${loginInput1.value}
    dit ${loginMess1.value}</p>`;
};
