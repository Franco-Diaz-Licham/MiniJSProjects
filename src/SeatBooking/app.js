
(function(app){
    options = document.getElementById('show-picker');
    seatSection = document.querySelector('.seat-section');
    seats = seatSection.querySelectorAll('.seat');
    totalSeats = document.getElementById('seats-total');
    totalPrice = document.getElementById('seats-price');

    seatCount = 0;
    showPrice = 0;
    shows = [['show 1', 12], ['show 2', 22], ['show 3', 40], ['show 4', 71]];

    app.execute = function(){
        wireUpSeats();
        wireUpDropdown();
    }

    function wireUpDropdown(){
        options.addEventListener('change', getSelectedShow)
        shows.forEach(e => {
            const opt = document.createElement('option');
            opt.innerText =`${e[0]} ($${e[1]})`;
            opt.value = e[1];
            options.appendChild(opt);
        });
    }

    function getSelectedShow(e){
        showPrice = e.target.value;
        updateShowInfo();
    }

    function wireUpSeats(){
        seats.forEach(e => {
            if(e.classList.contains('occupied-seat') === false){
                e.classList.add('na-seat');
                e.addEventListener('click', updateSeats);
            }
        });
    }

    function updateSeats(e){
        if(e.target.classList.contains('na-seat')){
            e.target.classList.remove('na-seat')
            e.target.classList.add('selected-seat');
            seatCount += 1;
        }
        else{
            e.target.classList.add('na-seat')
            e.target.classList.remove('selected-seat');
            seatCount -= 1;
        }
        updateShowInfo();
    }

    function calculatePrice(){
        return seatCount * showPrice;
    }

    function updateShowInfo(){
        totalSeats.innerText = seatCount;
        totalPrice.innerText = calculatePrice();
    }

})(window.app = window.app || {})