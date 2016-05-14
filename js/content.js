var wordCount = document.body.innerText.split(' ').length;
var readingSpeed = 275; //Words per minute
var timeToRead = Math.ceil(wordCount / readingSpeed);
var iconColor = "#000000";
var message = {
  timeToRead: timeToRead,
  iconColor: iconColor
};

chrome.runtime.sendMessage({newBadge: message}, 
  function(response){
      //Respond to badge successfully changing?
  }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

});