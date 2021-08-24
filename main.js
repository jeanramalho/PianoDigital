// pegar todas as teclas
const keys = document.querySelectorAll(".key")

//tocar notas
function playNote(event) {
    //pegar o keycode
   let audioKeyCode = getKeyCode(event)

    //pegar tecla do teclado digital pressionada
    const key = document.querySelector(`[daa-key="${audioKeyCode}"]`)

    //verificar se existe no mapeamento de teclas

    //tocar o audio
}

function getKeyCode() {
    let keyCode

    const isKeyBoard = event.type === "keydown"
    if(isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

//clique com o mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote())
})


// eventos do teclado
window.addEventListener("keydown", playnote())