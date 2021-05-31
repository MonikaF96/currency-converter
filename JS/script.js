let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let scoreElement = document.querySelector(".js-score");

let rateEuro = 4.56;
let rateDolar = 3.77;
let rateFrank = 4.12;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let score;

    switch (currency) {
        case "EUR":
            score = amount / rateEuro;
            break;

        case "USD":
            score = amount / rateDolar;
            break;

        case "CHF":
            score = amount / rateFrank;
            break;
    }
    scoreElement.innerText = `${score.toFixed(2)} ${currency}`;
});