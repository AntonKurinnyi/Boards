const board = document.querySelector('#board')
const colors = ['#FF3399', '#A751EE', '#8091E9','#85E6E7 ', '#85E7BF', '#4FE947', '#E9C147', '#CA3C0F']
const SQUARES_Number = 600

for (let i = 0; i < SQUARES_Number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor ()
    //element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = ' #1d1d1d '
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}