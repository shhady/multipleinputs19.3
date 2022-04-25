const inputs = [...document.querySelectorAll('input')];
const button = document.querySelector('button');
const form = document.querySelector('form');
let userInput = Array(6);
inputs.forEach((input, index) => {
  input.addEventListener('keyup', (event) => {
    userInput[index] = event.target.value;
    index < 5 && inputs[index + 1].focus();

    if (userInput.join('').length === 6) submit();
  });
});

const submit = () => {
  if (userInput.join('') === '123456') {
    form.submit();
    alert('Submited');
  }
};

inputs[0].addEventListener('paste', (event) => {
  const pastedText = event.clipboardData.getData('text');
  console.log(pastedText);
  inputs.forEach((input, index) => {
    input.value = pastedText[index];
    userInput[index] = pastedText[index];
  });
  //   setTimeout(() => {
  //     submit();
  //   }, 500);
});
