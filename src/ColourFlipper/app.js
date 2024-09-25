
(function (app) {
    'use-strict'

    app.execute = function(){
        setButtonState();
    };

    function setButtonState(){
        const green = document.getElementById('green-button');
        const red = document.getElementById('red-button');
        const blue = document.getElementById('blue-button');
        const random = document.getElementById('random-button');

        green.onclick = changeBackground;
        red.onclick = changeBackground;
        blue.onclick = changeBackground;
        random.onclick = changeBackground;
    }
    
    function changeBackground(e){
        const back = document.querySelector('html');

        if(e.srcElement.id === 'green-button'){
            back.style.backgroundColor = 'green';
        }
        else if(e.srcElement.id === 'red-button'){
            back.style.backgroundColor = 'red';
        }
        else if(e.srcElement.id === 'blue-button'){
            back.style.backgroundColor = 'blue';
        }
        else if(e.srcElement.id === 'random-button'){
            back.style.backgroundColor = '#' + getRandomColour();
        }
    }

    function getRandomColour(){
        var randomColour = Math.floor(Math.random()*16777215).toString(16);
        return randomColour
    }
})(window.app = window.app || {})