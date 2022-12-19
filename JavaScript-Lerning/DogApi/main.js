console.log('hello');



function rndImgDog() {
    fetch("https://dog.ceo/api/breeds/image/random") 
    .then(Response => Response.json())
    .then(json => {
        document.getElementById('dog').src = json.message
    })
}

let reset = document.getElementById('reset');
reset.onclick = () => rndImgDog();

rndImgDog()
