var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var newBadge;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request) {
    canvas.width = 19;
    canvas.height = 19;
    
    if (request.newBadge >= 100) {
      context.font = "11px Arial";     
    }
    else if (request.newBadge >= 10) {
      content.font = "15px Arial";
    }
    else {
      context.font = "18px Arial";
    }

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(request.newBadge, 10, 10);
    context.fillStyle = "#FFFFFF";
               
    newBadge = context.getImageData(0, 0, 19, 19);
    
    chrome.browserAction.setIcon({
      imageData: newBadge
    });
  }
});