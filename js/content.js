"use strict";
var wordCount = document.body.innerText.split(' ').length;
var timeToRead;
var message = {};

//Default settings
var readingSpeed = 275;
var iconColor = "#000000";

//Check localStorage for saved values
chrome.storage.local.get(null, function (result) {    
    if (result.readingSpeed !== undefined) {
      readingSpeed = result.readingSpeed;
    }
    if (result.iconColor !== undefined) {
      iconColor = result.iconColor;
    }
    
    timeToRead = Math.ceil(wordCount / readingSpeed);
    message.timeToRead = timeToRead;
    message.iconColor = iconColor;    
    chrome.runtime.sendMessage({newBadge: message});
});