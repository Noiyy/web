// Author: Benjamín Muľár

var quotes = ["You yourself have to change first, or nothing will change for you.",
 "Sometimes, it’s necessary to look back at the past in order to move on to the future.",
 "You will never control your future, if you let your present be controlled by your past.",
 "The day you plant the seed, is not the day you eat the fruit.",
 "If you have faith, your dreams will surely come true.",
 "If you run into a wall and pretend it doesn’t exist, you’ll never make progress. The wall will never change, so you’re the one who has to change.",
 "The night is in its darkest just before dawn. But keep your eyes open, no matter how dark the night ahead may be.",
 "The ticket to the future is always open.",
 "Life is not a game of luck. If you wanna win, work hard.",
 "Whatever you do, enjoy it to the fullest. That is the secret of life.",
 "People who can’t throw something important away, can never hope to change anything. Choose your sacrifice.",
 "The moment you think of giving up, think of the reason why you held on so long.",
 "If you keep running away, you’ll keep repeating the same mistakes.",
 "Remember the lesson, not the disappointment.",
 "It's never too late.",
 "Here, have a banana.",
 "A journey of thousand miles begins with single step."];
var quoteText = document.getElementById("quote");
var last = quotes.length - 1;

function getRandomInt(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Quote() {
    quoteText.innerHTML = quotes[getRandomInt(0,last)];
}