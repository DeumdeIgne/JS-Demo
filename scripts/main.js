const myHeading = document.querySelector('h1');
myHeading.textContent = 'World of Maps JS';
let mapZone = 'Oceania';
if (mapZone == 'Oceania') {
    alert('You are here');
} else {
    alert ('You are in Oceania');
}
function multiply (num1,num2) {
    let result = num1 * num2;
    return result;
}
alert (multiply(5,6));

document.querySelector('h1').onclick = function() {
    alert ("Maps of the World");
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/map.jpeg') {
        myImage.setAttribute ('src', 'images/Oceania.png');
    } else {
        myImage.setAttribute ('src', 'images/map.jpeg');
    }
}