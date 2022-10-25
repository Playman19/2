// header
var h1 = document.getElementsByTagName('H1')[0]
function rep(i, k ) {
    h1.classList.replace('header' + i, 'header' + k)
}
function set() {
    setTimeout(rep,500,1,2);
    setTimeout(rep,1000,2,3);
    setTimeout(rep,1500,3,4)
    setTimeout(rep,2000,4,5);
    setTimeout(rep,2500,5,6);
    setTimeout(rep,3000,6,7);
    setTimeout(rep,3500,7,8);
    setTimeout(rep,4000,8,9);
    setTimeout(rep,4500,9,10);
    setTimeout(rep,5000,10,1);
}
set()
setInterval(set, 5000);

var sec = document.getElementsByTagName('section')[0];
var sotka = document.getElementsByClassName('sotka')[0];
var proc = document.querySelector('.sotka p');
var span = document.getElementsByTagName('SPAN')[0]
// Конструктор клонов
function GetClone (n) {
    this.n = n
    var clone = sotka.cloneNode(true);
    switch (n) {
        case 1:
            clone.children[0].textContent = '20%';
            clone.classList.remove('none');
            clone.children[0].classList.add('dv')
            break;
        case 2:
            clone.children[0].textContent = '50%';
            clone.classList.remove('none');
            clone.children[0].classList.add('paltos')
            break;
        case 3:
            clone.children[0].textContent = '100%';
            clone.classList.remove('none');
            clone.children[0].classList.add('sto')
            break;
        default:
            break;
    } 
    return clone;
}
// Создание клонов
var one = new GetClone(1);
var two = new GetClone(2);
var three = new GetClone(3);
// Определение дверей
var door1 = document.getElementsByClassName('door1')[0];
var door2 = document.getElementsByClassName('door2')[0];
var door3 = document.getElementsByClassName('door3')[0];
// 2-3 Действие
function go(x,y) {
        sec.children[x].addEventListener('click', function() {
        sec.children[x].appendChild(two);
        sec.children[y].addEventListener('click', function() {
        sec.children[y].appendChild(three);
        if(door1.childElementCount == 1 &&door2.childElementCount == 1 && door3.childElementCount == 1) {
            span.classList.replace('none', 'span');
            function setSdjebr(q,w,t) {
                setTimeout(function() {
                    span.classList.replace(q, w)
                },t)
            }
            setSdjebr('span', 'sdjebr', 1000)
            setSdjebr('sdjebr', 'sdjebr2', 2000)
           }
        })
    })
    
}
// 2 действие
function ael(x,y) {
    sec.addEventListener('click', function(ev) {
        if(ev.target.tagName === 'BUTTON') {
            var cl = x+1
            var cl2 = y+1
            switch (ev.target.className) {
                case 'door'+ cl :
                    go(x,y)
                    break;
                case 'door' + cl2:
                    go(y,x)
                    break;
                default:
                    break;
            }
        }
    })
}
// 1 Действие -> переадресация
sec.addEventListener('click', function(ev){
    if(ev.target.tagName === 'BUTTON') {
        if(ev.target.className == 'door1' && door3.childElementCount == 0) {
            if(door2.childElementCount == 0) {
            ev.target.appendChild(one)
                ael(1,2);
            }
        }
        if(ev.target.className == 'door2') {
            if(door1.childElementCount == 0 && door3.childElementCount == 0) {
            ev.target.appendChild(one)
                ael(0,2);
            }
        }
        else if(ev.target.className == 'door3') {
            if(door2.childElementCount == 0 && door1.childElementCount == 0) {
            ev.target.appendChild(one)
                ael(0,1);
            }
        }
    }
})