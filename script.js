// JavaScript code to change the text content when the button is clicked
document.getElementById('logInBtn').addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'The text has changed! You clicked the button!';
  });

  document.getElementById('signUpBtn').addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'The text has changed 2! You clicked the button!';
  });