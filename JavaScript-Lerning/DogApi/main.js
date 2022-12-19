fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(json => console.log(json))