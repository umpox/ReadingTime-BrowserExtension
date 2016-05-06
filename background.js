var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var newBadge;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request) {
    canvas.width = 19;
    canvas.height = 19;
    
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "18px Arial";
    context.fillText(request.newBadge, 8, 8);
    context.fillStyle = "#FFFFFF";
    
    newBadge = context.getImageData(0, 0, 19, 19);
    
    chrome.browserAction.setIcon({
      imageData: newBadge
    });
  }
});