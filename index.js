const diceButton = document.querySelector(".dice"),
    quote = document.querySelector(".quote"),
    quoteNumber = document.querySelector(".quote-number");

async function showQuote() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    quoteNumber.innerHTML = data.slip.id
    quote.innerHTML = data.slip.advice
};

diceButton.addEventListener("click", function () {
    showQuote();
});