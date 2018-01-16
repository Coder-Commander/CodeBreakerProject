let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer == '' && attempt == ''){
      setHiddenFields();
    }
}
//implement new functions here

function setHiddenFields() {

  answer.value = Math.floor(Math.random() * 10000);
  attempt.value = 0;

  while(answer.length < 4)
    {
      answer.value = '0' + answer.value.toString();
    }
}

function setMessage(text) {
  let message = document.getElementById('message');
  message.innerHTML = text;
}
