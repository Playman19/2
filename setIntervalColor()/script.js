var body = document.getElementsByClassName('bg')[0];
var span = document.getElementsByTagName('SPAN')[0];

setInterval(changeColor,200)
function changeColor() {
    var arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var newArr = []
    for(i = 1; i<=6; i++) {
        var num = Math.floor(Math.random() * 16);
        var res = arr[num];
        newArr.push(res)
        var result = newArr.join('')
    }
    span.textContent=result
    body.style.backgroundColor='#'+result
}