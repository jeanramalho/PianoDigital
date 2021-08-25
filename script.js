//pegar todas as teclas
const keys = document.querySelectorAll(".key")

function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  //tipo da tecla pressionada
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  //se a tecla existe
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingCLass(key)
  playAudio(audioKeyCode)
}

function addPlayingCLass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audiokeyCode) {
  const audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  //clique com mouse
  keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })
  //tipo do teclado
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)