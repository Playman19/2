var btn = document.getElementsByClassName('btn')[0];
var rost = document.getElementsByClassName('rost')[0];
var ves = document.getElementsByClassName('ves')[0];
var span = document.getElementsByTagName('SPAN')[0];
var res = document.getElementsByClassName('res')[0];
btn.addEventListener('click', function() {
    span.textContent = raschet();
    if(raschet() >= 19 && raschet() <= 25) {
        clear('0')
    }
    else if (raschet() > 25 && raschet() < 30) {
        clear('1')
    }
    else if (raschet() >=30 && raschet() < 35) {
        clear('2')
    }
    else if (raschet() >16 && raschet() < 19) {
        clear('-1')
    }
    else if (raschet() >= 35 && raschet() < 40) {
        clear('3')
    }
    else if (raschet() >= 40) {
        clear('4')
    }
    else if (raschet() <=16 ) {
        clear('-2')
    }
    else {
        clear('-fail')
    }
})

function raschet() {
    if (rost.value > 130 && rost.value < 215) {
        if(ves.value > 39 && ves.value < 175) {
            var index = Math.floor(ves.value/(Math.pow((rost.value/100),2)));
        }
    }
    return index;
}
function clear(n) {
    if(n !='-fail') {
        document.getElementsByClassName('textRes')[0].classList.replace('none', 'block')
    }
    res.innerHTML = ''
    rost.value = ''
    ves.value = ''
    var img = document.createElement('img');
    img.src = 'img/' + n + '.jpg';
    var clone = document.getElementsByClassName('q'+ n)[0].cloneNode(true);
    clone.classList.replace('none', 'block');
    res.appendChild(clone);
    res.appendChild(img)
    
}