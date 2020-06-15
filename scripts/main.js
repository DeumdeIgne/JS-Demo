const myHeading = document.querySelector('h1');
myHeading.textContent = 'World of Maps JS';

document.querySelector('h1').onclick = function() {
    alert ("Maps of the World");
}

let myImage = document.querySelector('img');

/*myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/world.jpeg') {
        myImage.setAttribute ('src', 'images/world.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/world.jpeg');
    }
}*/