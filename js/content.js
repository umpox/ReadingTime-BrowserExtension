var wordCount = document.body.innerText.split(' ').length;
var readingSpeed;
var timeToRead;

//var readingSpeed = 275; //Words per minute
//var timeToRead = Math.ceil(wordCount / readingSpeed);
var iconColor;
var message = {};

chrome.storage.local.get(null, function(result){
  if (result.rSpeed === undefined) {
    readingSpeed = 275;
  }
  else {
    readingSpeed = result.rSpeed;
  }
  
  if (result.iColor === undefined) {
    iconColor = "#000000";
  }
  else {
    iconColor = result.iColor;
  }
  
});


  message.iconColor = iconColor;
  message.timeToRead = Math.ceil(wordCount / readingSpeed);
  /*chrome.storage.sync.set({'value': theValue}, function() {
    // Notify that we saved.
    message('Settings saved');
  });*/

chrome.runtime.sendMessage({newBadge: message}, 
  function(response){
      //Respond to badge successfully changing?
  }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

});