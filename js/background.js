var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.newBadge) {
    canvas.width = 19;
    canvas.height = 19;
        
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

function executeContentScript() {
  chrome.tabs.executeScript(null, {file: "js/content.js"});
}

chrome.tabs.onActivated.addListener(
  function() {
    executeContentScript();
  }
);

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (tab.status === 'complete') {
      executeContentScript();
    }
  }
);

//ON BROWSER CLOSE
/*chrome.windows.onRemoved.addListener(function(windowId){

});*/