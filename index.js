console.log('Funguju')

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', (event) => played(event))
})

const played = (event) => {
    let heading = document.querySelector('h1')
    heading.innerHTML = event.target.innerHTML
    let sound = new Audio(`tony/${event.target.innerHTML}.mp3`)
    sound.play()
}

buttons.forEach((button) => {
    button.addEventListener('animationend', (event) => {
        event.target.classList.remove('zatres')
    })
})

document.addEventListener('keydown', (event) => {
    if (event.code.startsWith('Digit') || event.code.startsWith('Numpad')) {
        let keyIndex = (Number(event.code.slice(-1)) - 1)
        if (keyIndex >= 0 && keyIndex < buttons.length) {
            let button = buttons[keyIndex]
            button.click()
            button.classList.add('zatres')
        }
    }
})



