document.addEventListener('DOMContentLoaded', () => {

    //Card Options
    const cardArray = [
        {
            name: 'blue',
            img: 'assets/images-colors/blue.jpg'
        },
        {
            name: 'blue',
            img: 'assets/images-colors/blue.jpg'
        },
        {
            name: 'green',
            img: 'assets/images-colors/green.jpg'
        },
        {
            name: 'green',
            img: 'assets/images-colors/green.jpg'
        },
        {
            name: 'red',
            img: 'assets/images-colors/red.jpg'
        },
        {
            name: 'red',
            img: 'assets/images-colors/red.jpg'
        },
        {
            name: 'brown',
            img: 'assets/images-colors/brown.jpg'
        },
        {
            name: 'brown',
            img: 'assets/images-colors/brown.jpg'
        },
        {
            name: 'orange',
            img: 'assets/images-colors/orange.jpg'
        },
        {
            name: 'orange',
            img: 'assets/images-colors/orange.jpg'
        },
        {
            name: 'purple',
            img: 'assets/images-colors/purple.jpg'
        },
        {
            name: 'purple',
            img: 'assets/images-colors/purple.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score-points')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //Create Board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images-colors/grey.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/images-colors/white.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images-colors/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'assets/images-colors/grey.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/images-colors/grey.jpg')
            //alert('Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        scoreDisplay.textContent = cardsWon.length
        var winningMessage = document.createElement('h2')
        winningMessage.textContent = 'Congratulations! You found them all!'
        if (cardsWon.length === cardArray.length/2)
        grid.appendChild(winningMessage)
        //grid.appendChild(winningMessage)
    }

    //Flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 450)
        }
    }

    createBoard()
})