
(function (app) {
    app.execute = function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', checkWord);
        form.addEventListener('reset', resetWord);
    };

    function resetWord(e){
        const result = document.getElementById('result');
        result.innerText = '';
    }

    function checkWord(e) {
        e.preventDefault();
        const word = document.getElementById('word');
        const result = document.getElementById('result');
        const wordArray = word.value.split('');

        let palindrome = 'It is a Palindrome';

        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] !== wordArray[wordArray.length - 1 - i]) {
                palindrome = 'It is not a Palindrome';
                break;
            }
        }
        result.innerText = palindrome;
    }
})(window.app = window.app || {})

