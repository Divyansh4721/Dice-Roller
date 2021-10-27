let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6];
function Random() {
    return Math.floor(Math.random() * arr.length);
}
let interval;
let die = 3;
let image = document.querySelector('#img');
function buttonclicked() {
    interval = setInterval(function () {
        die = arr[Random()];
        image.src=die+'.png';
        console.log(image.src);
        document.querySelector('#num').innerHTML = die;
    }, 200);
    setTimeout(() => {
        clearInterval(interval);
    }, 2000);
}