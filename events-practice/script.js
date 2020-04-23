const input = document.querySelector("input");
const clearButton = document.querySelector("button");

const divFirst = document.querySelector("#result-one");
const divSecond = document.querySelector("#result-two");

function setText(text) {
    divFirst.innerHTML = text;
    divSecond.innerHTML = text.length > 0 ? text[text.length - 1] : "";
}

function clear() {
    input.value = "";
    setText("");
}

input.addEventListener("input", event => setText(event.target.value));

clearButton.addEventListener("click", () => clear());