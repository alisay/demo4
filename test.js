
const texts =()=>{
    return fetch(`https://api.adviceslip.com/advice`)
    .then((response)=>response.json())
    .then(data=>data.slip)
    .then(data=>data.advice)
}

texts()