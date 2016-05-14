var saveBtn = document.getElementById('userSettings-list_save');
var resetBtn = document.getElementById('userSettings-list_reset');
var wpmValue = document.getElementById('userSettings-list_value_wpm');
var colorValue = document.getElementById('userSettings-list_value_color');
var notifyMsg = document.getElementById('userSettings-list_notify');
var defaultWpm = 275, defaultColor = "#000000";

//Adding event listener to buttons as Chrome does not allow HTML onclick events
saveBtn.addEventListener('click', function() {
  validateInput(wpmValue.value, colorValue.value); 
});

resetBtn.addEventListener('click', function() {
  wpmValue.value = defaultWpm;
  colorValue.value = defaultColor;
  
  chrome.storage.local.set({'readingSpeed': defaultWpm});
  chrome.storage.local.set({'iconColor': defaultColor});
  
  notifyMsg.innerHTML = "Success! Your values have been reset to default and saved.";
  notifyMsg.style.color = "green";
});

//Check storage for current color and reading speed values
chrome.storage.local.get(null, function (result) {    
  if (result.readingSpeed !== undefined) {
    wpmValue.value = result.readingSpeed;
  }
  else {
    wpmValue.value = defaultWpm;
  }
  if (result.iconColor !== undefined) {
    colorValue.value = result.iconColor;
  }
  else {
    colorValue.value = defaultColor;
  }
});

function validateInput(wpm, color) {
  var colorRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
  var numRegex = /^\d+$/;
  
  if (wpm === '' || color === '') {
    notifyMsg.innerHTML = 'Error: Please ensure all fields have a value.';
    notifyMsg.style.color = "green";
    return;
  }
  
  if ( numRegex.test(wpm) && colorRegex.test(color) ) {
    chrome.storage.local.set({'readingSpeed': wpm});
    chrome.storage.local.set({'iconColor': color});
    notifyMsg.innerHTML = "Success! Your new values have been saved.";
    notifyMsg.style.color = "green";
  }
  else {
    notifyMsg.innerHTML = 'Error: Incorrect format, please check your values.';
    notifyMsg.style.color = "red";
  }
  
}