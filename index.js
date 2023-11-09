const buttomsContainer = document.querySelector('.container-buttoms');
const resultRating = document.querySelector('.result-number');
const containerCard = document.querySelector('.container-card-how');
const containerTankyou = document.querySelector('.container-tankyou')
const buttonRating = document.getElementById('button-rating');

buttomsContainer.addEventListener('click', (e) => {
    let number = e.target.innerText
    resultRating.innerText = number
    if (number >= 1 || number <= 5 ) {
        buttonRating.addEventListener('click', () => {
            containerCard.classList.add('hidden-how')
            containerTankyou.classList.add('show-tankyou')
        })
    }
})