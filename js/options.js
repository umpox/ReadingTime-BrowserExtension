var saveBtn = document.getElementById('userSettings-list_save');
var wpmValue = document.getElementById('userSettings-list_value_wpm');
var colorValue = document.getElementById('userSettings-list_value_color');
var errorMsg = document.getElementById('userSettings-list_error');

//Adding event listener as Chrome does not allow HTML onclick events
saveBtn.addEventListener('click', function() {
  validateInput(wpmValue.value, colorValue.value); 
});

function validateInput(wpm, color) {
  var colorRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
  var numRegex = /^\d+$/;
  var userInputs = {};
  
  if (wpm === '' || color === '') {
    errorMsg.innerHTML = 'Error: Please ensure all fields have a value.';
    return;
  }
  
  if ( numRegex.test(wpm) && colorRegex.test(color) ) {
    userInputs.wpm = wpm;
    userInputs.color = color;
    
    chrome.runtime.sendMessage({userInputs: userInputs}, 
      function(response){}
    );
  }
  else {
    errorMsg.innerHTML = 'Error: Incorrect format, please check your values.';
  }
  
}