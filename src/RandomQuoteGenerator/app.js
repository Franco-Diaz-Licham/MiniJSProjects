
(function (app) {
    'use-strict'
    quotes = ['age', 'alone', 'amazing', 'art', 'attitude', 'business', 'computers', 'dating', 'god',
        'happiness', 'health', 'intelligence', 'learning', 'money', 'marriage', 'life', 'knowledge'];

    app.execute = async function () {
        wireButton();
    };

    function wireButton(){
        const button = document.getElementById('quote-generator');
        button.onclick = updateQuote;
    }

    async function updateQuote() {
        const quoteEl = document.getElementById('quote');
        const authorEl = document.getElementById('author');
        const categoryEl = document.getElementById('category');

        const m = await getQuote();
        quoteEl.innerText = m[0].quote;
        authorEl.innerText = m[0].author;
        categoryEl.innerText = `On ${m[0].category}`;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    async function getQuote() {
        var i = getRandomInt(quotes.length);
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const cat = `?category=${quotes[i - 1]}`;
        const ep = url + cat

        var result = fetch(ep, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'fIIa3lv9mz9bL1avXCfaYw==HUXy7nizNeFgqlWF'
            }
        });

        var data = (await result).json();
        return data;
    }

})(window.app = window.app || {})