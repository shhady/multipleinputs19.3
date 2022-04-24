// var elts = document.getElementsByClassName("test");
// Array.from(elts).forEach(function (elt) {
//   elt.addEventListener("keyup", function (event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13 || elt.value.length == 1) {
//       // Focus on the next sibling
//       elt.nextElementSibling.focus();
//     }
//   });
// });
const list = document.querySelectorAll("input[type=text]");
function myFunc(id) {
  if (list[id - 1].value) {
    list[id].focus();
  }
}
list.forEach((el, i) => {
  el.addEventListener("paste", (event) => {
    let paste = (event.clipboardData || window.ClipboardData).getData("text");
    const nums = paste.split("");
    for (let i = 0; i < nums.length; i++) {
      list[i].value = nums[i];
    }
    event.preventDefault();
  });
});
const inputs = document.querySelectorAll("input");
console.log(inputs[0].value);
