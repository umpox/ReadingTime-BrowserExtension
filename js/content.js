var wordCount = document.body.innerText.split(' ').length;
var readingSpeed = 275;
var iconColor = "#000000";
var timeToRead;
var message = {};

//Check localStorage for saved values
if (localStorage.readingSpeed !== undefined) {
  readingSpeed = localStorage.timeToRead;
}
if (localStorage.iconColor !== undefined) {
  iconColor = localStorage.iconColor;
}

timeToRead = Math.ceil(wordCount / readingSpeed);
message.timeToRead = timeToRead;
message.iconColor = iconColor;

chrome.runtime.sendMessage({newBadge: message});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

});