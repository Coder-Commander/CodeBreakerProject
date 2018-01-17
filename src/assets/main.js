let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer == '' && attempt == ''){
      setHiddenFields();
    }
    let result = validateInput(input.value);
    if(result === false)
      return false;
    else if(result === true) {
       attempt.value += 1;
    }
}
//implement new functions here

function setHiddenFields() {

  answer.value = Math.floor(Math.random() * 10000);
  attempt.value = 0;

  while(answer.value.length < 4)
    {
      answer.value = '0' + answer.value.toString();
    }
}

function setMessage(text) {
  let message = document.getElementById('message');
  message.innerHTML = text;
}

function validateInput(input) {
  if(input.length ===4)
    return true;
  else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
