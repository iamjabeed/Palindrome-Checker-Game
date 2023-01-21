const containerEl = document.querySelector(".container");
const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

buttonEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  var validInputValue = inputValue.replace(/[^A-Z0-9]/gi, "");
  //   REVERSE STRING
  const reverseInput = inputValue.split("").reverse().join("");
  resultEl.style = "visibility:visible";
  if (validInputValue === reverseInput) {
    resultEl.innerHTML = `yes,<span>'${validInputValue}'</span> is a Palindrome!`;
  }
  else{
    resultEl.innerHTML = `No,<span>'${validInputValue}'</span> is not a Palindrome!`;
  }
});
