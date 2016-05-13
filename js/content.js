var wordCount = document.body.innerText.split(' ').length;
var readingSpeed = 275; //Words per minute
var timeToRead = Math.ceil(wordCount / readingSpeed);

chrome.runtime.sendMessage({newBadge: timeToRead}, 
  function(response){
      //Respond to badge successfully changing?
  }
);