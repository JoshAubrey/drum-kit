
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return //if no corresponding audio element then stop

    audio.currentTime = 0 //rewind sound to start

    audio.play()

    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))