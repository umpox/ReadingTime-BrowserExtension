document.addEventListener('DOMContentLoaded', function() {
    var wordCount = document.body.innerText.split(' ').length;
    var readingSpeed = 275; //Words per minute
    var timeToRead = wordCount / readingSpeed;
    console.log('This will take' + timeToRead + 'to read');
});