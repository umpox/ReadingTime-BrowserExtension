chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request) {
    chrome.browserAction.setBadgeText({text: request.newBadgeText});
  }
});