var wordCount = document.body.innerText.split(' ').length;
var readingSpeed = 275; //Words per minute
var timeToRead = (wordCount / readingSpeed).toFixed(2);

chrome.runtime.sendMessage({newBadgeText: timeToRead}, 
  function(response){
      //Respond to badge successfully changing?
  }
);