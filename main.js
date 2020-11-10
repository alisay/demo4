var images; 

const parseImages=(obj)=>{
    return obj.primaryImage;
}

const compileImages= async (idsArr)=>{
    let imagePromises=[]
    idsArr.map(id=>imagePromises.push(getImages(id)))
    let allImages = await Promise.all(imagePromises)
    return allImages
}

const getImages=(objectID)=>{
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then((response) => response.json())
    .then(parseImages)
}

const search=(searchTerm)=>{
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchTerm}`)
    .then(response=>response.json())
    .then(data=>data.objectIDs)
    .then(data=>data.slice(0,5))
    .then(data=>compileImages(data))
}

const texts =()=>{
    return fetch(`https://api.kanye.rest/`)
    .then((response)=>response.json())
    .then(data=>data.quote)
}

const pics= async (event)=>{
    event.preventDefault()
    const word = document.getElementById('theWord').value;
    images = await search(word)
    console.log(`got pics ${images}`)
    //get the random result
    
    }

const shuffle = async ()=>{
    console.log("shuffling")
    var imageResult = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
    var textResult = await texts()
    document.getElementById("container").style.backgroundImage = imageResult
    console.log(textResult)
    document.getElementById("text").innerHTML= textResult
}



const shuffleButton = document.querySelector("#shuffle")
const picButton = document.querySelector("#get-pics")
shuffleButton.addEventListener("click", shuffle)
picButton.addEventListener("click", pics)



    // step 1: set up arrays of oppurtunities 
    // step 2: target existing html
    // step 3: create a function for our <button>
    // get the random result
    // style result
    // input text

    // compileImages("dogs")

