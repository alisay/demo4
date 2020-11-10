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

var texts = ["fruits ripen slowly", "<3", "...", "hahaha"]

const shuffle= (event)=>{
    event.preventDefault()
    console.log("shuffles")
    console.log(document.getElementById('theWord').value)
    //get the random result
    // var imageResult = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
    // var textResult = texts[Math.floor(Math.random() * texts.length)]
    }

const button = document.querySelector("#shuffle")
button.addEventListener("click", shuffle)


    // step 1: set up arrays of oppurtunities 
    // step 2: target existing html
    // step 3: create a function for our <button>
    // get the random result
    // style result
    // input text

    // compileImages("dogs")
