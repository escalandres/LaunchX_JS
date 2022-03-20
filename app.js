function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName_input");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./src/img/sad-pikachu.gif",0)
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeType = data.types[0].type.name;
            let pokeName = data.name;
            let pokeType1 = ""
            if(data.types[1] === undefined){
                console.log("Type 1 is undefines\d");
            }
            else{
                pokeType1 = data.types[1].type.name;
                console.log(pokeType1);
            }
            pokeImage(pokeImg,1,pokeType,pokeName,pokeType1);
            console.log(pokeImg);
            
        }
    });
}

const pokeImage = (url,found,type,name,type1) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokeMessage = document.getElementById("pokemessage");
    const pokeType = document.getElementById("pokeType");
    const pokeType1 = document.getElementById("pokeType1");
    const pokeName = document.getElementById("pokeName")
    if(found === 0){
        pokeMessage.innerHTML = "El pokemon no pudo ser encontrado!";
    }
    else{
        pokeMessage.innerHTML = "El pokemon fue encontrado!";
        name = capitalizeFirstLetter(name)
        pokeName.innerHTML = name;
        pokePhoto.src = url;
        if(type === "fairy"||type === "steel"){
            pokeType.classList.remove("hidden");
            pokeType.src = "./src/img/types/"+type+".svg";
            if(type1 !== ""){
                pokeType1.classList.remove("hidden");
                pokeType1.src = "./src/img/types/"+type+".svg";
                
            }
            else{
                pokeType1.classList.add("hidden");
            }
        }
        else{
            pokeType.classList.remove("hidden");
            pokeType.src = "./src/img/types/"+type+".png";
            if(type1 !== ""){
                pokeType1.classList.remove("hidden");
                pokeType1.src = "./src/img/types/"+type+".png";
            }
            else{
                pokeType1.classList.add("hidden");
            }
        }
    }
    

}