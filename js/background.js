"use strict";
//Canvas is used to change the extension icon on the fly
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.newBadge) {
    canvas.width = 19;
    canvas.height = 19;
    
    //Alter text size depending on timeToRead value
    if (request.newBadge.timeToRead >= 100) {
      context.font = "11px Arial";     
    }
    else if (request.newBadge.timeToRead >= 10) {
      context.font = "15px Arial";
    }
    else {
      context.font = "18px Arial";
    }

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = request.newBadge.iconColor;
    context.fillText(request.newBadge.timeToRead, 10, 10);
    
    chrome.browserAction.setIcon({
      imageData: context.getImageData(0, 0, 19, 19)
    });
  }
});

//Execute script when a new tab is selected
chrome.tabs.onActivated.addListener(
  function() {
      executeContentScript();
  }
);

//Execute script on extension icon clicked
chrome.browserAction.onClicked.addListener(
  function(tab) { 
     executeContentScript();
  }
);

//Optional function can be added if encountering issues with AJAX sites. Warning: Can cause issues when browser is terminated whilst the script is running
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      executeContentScript();
    }
  }
);

function executeContentScript() {
  chrome.tabs.executeScript(null, {file: "js/content.js", runAt: "document_end"});          
}