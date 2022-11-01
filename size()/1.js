console.log(window.innerWidth + ' X ' + window.innerHeight)
var btn = document.getElementsByTagName('BUTTON')[0];
var knopka = document.getElementsByClassName('knopka')[0];
var infa = document.getElementsByClassName('infa')[0];
btn.addEventListener('click', function() {
    knopka.classList.add('none');
    var size = document.createElement('P');
    size.textContent = window.innerWidth + ' X ' + window.innerHeight
    infa.appendChild(size)
    infa.classList.remove('none');
})