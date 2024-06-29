const sounds = ['10', '11', '12', '13', '14', '15', '16', '17', '18']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').
    appendChild(btn)
})