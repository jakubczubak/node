console.log("dziala");

const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", function () {
  console.log(input.value);
});
