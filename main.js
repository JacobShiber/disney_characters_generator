async function getDisneyApi() {
    try {
        return await fetch("https://api.disneyapi.dev/characters")
            .then(res => res.json());

    } catch (error) {
        return error;
    }
}


searchBtn.onclick = () => {
    let result ;
    getDisneyApi()
        .then((res) => {
            for(let character of res.data){
                character.name.toLowerCase() == searchInput.value.toLowerCase() ? result = character : null; 
            }
            // result ? console.log(result.name) : console.log("No one is found");
           result? display.innerHTML = `<img class = "resultPic" src = "${result.imageUrl}">` : alert ("no one found")
        });
        
}




