var body = document.getElementsByClassName('bg')[0];
var span = document.getElementsByTagName('SPAN')[0];
var btn = document.getElementsByTagName('BUTTON')[0];
document.addEventListener('DOMContentLoaded', function() {
    changeColor()
})
btn.addEventListener('click', function() {
    changeColor()
}
)
function changeColor() {
    var arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var num = Math.floor(Math.random() * 15);
    var newArr = []
    for(i = 1; i<=6; i++) {
        var num = Math.floor(Math.random() * 15);
        var res = arr[num];
        newArr.push(res)
        var result = newArr.join('')
    }
    span.textContent=result
    body.style.backgroundColor='#'+result
}