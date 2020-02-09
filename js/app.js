// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak


// define each array for each buttons

var textToSpeak1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var textToSpeak2 = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var textToSpeak3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var textToSpeak4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var textToSpeak5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// invoke the button elements from html
var speakButton1 = document.querySelector('.column1');
var speakButton2 = document.querySelector('.column2');
var speakButton3 = document.querySelector('.column3');
var speakButton4 = document.querySelector('.column4');
var speakButton5 = document.querySelector('.column5');

var speakButton = document.querySelector('.Surprised');

// create function element to call random items from the arrays
function randomValueFromArray(array){ 
	return array[Math.floor(Math.random() * array.length)];
}


// apply the function to each arrays
var aItem = randomValueFromArray(textToSpeak1);
var bItem = randomValueFromArray(textToSpeak2);
var cItem = randomValueFromArray(textToSpeak3);
var dItem = randomValueFromArray(textToSpeak4);
var eItem = randomValueFromArray(textToSpeak5);


var speakRandom = (aItem + ' ' + bItem + ' ' + cItem + ' ' + dItem + ' ' + eItem);

/* Functions
-------------------------------------------------- */

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

// apply function to each buttons 

speakButton1.addEventListener('click', () => {
	aItem = randomValueFromArray(textToSpeak1);
	speakNow(aItem);
});
speakButton2.addEventListener('click', ()=> {
	bItem = randomValueFromArray(textToSpeak2);
	speakNow(bItem);
});
speakButton3.addEventListener('click', ()=> {
	cItem = randomValueFromArray(textToSpeak3);
	speakNow(cItem);
});
speakButton4.addEventListener('click', ()=> {
	dItem = randomValueFromArray(textToSpeak4);
	speakNow(dItem);
});
speakButton5.addEventListener('click', ()=> {
	eItem = randomValueFromArray(textToSpeak5);
	speakNow(eItem);
});

speakButton.addEventListener('click', ()=> {
	
	speakRandom = (aItem + ' ' + bItem + ' ' + cItem + ' ' + dItem + ' ' + eItem);
	speakNow(speakRandom);
});


