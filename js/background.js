var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request) {
    canvas.width = 19;
    canvas.height = 19;
    
    if (request.newBadge >= 100) {
      context.font = "11px Arial";     
    }
    else if (request.newBadge >= 10) {
      context.font = "15px Arial";
    }
    else {
      context.font = "18px Arial";
    }

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#000000";
    context.fillText(request.newBadge, 10, 10);
    
    chrome.browserAction.setIcon({
      imageData: context.getImageData(0, 0, 19, 19)
    });
  }
});

chrome.tabs.onActivated.addListener( 
  function() {
    chrome.tabs.executeScript(null, {file: "js/content.js"});
  }
);

chrome.tabs.onUpdated.addListener(
  function() {
    chrome.tabs.executeScript(null, {file: "js/content.js"});
  }
);