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
            pokeImage("./src/img/sad-pikachu.gif",0,"")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeData = {
                img: data.sprites.front_default,
                type: data.types[0].type.name,
                type1: "",
                name: data.name,
                height: data.height,
                weight: data.weight,
                id: data.id,
                ability1: data.abilities[0].ability.name,
                ability2: data.abilities[1].ability.name,
            }
            if(data.types[1] === undefined){
                console.log("Type 1 is undefines\d");
            }
            else{
                pokeData.type1 = data.types[1].type.name;
            }
            console.log(pokeData)
            pokeImage("",1,pokeData)
        }
    });
}

let pokeImage = (url,found,pokeData) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokeMessage = document.getElementById("pokemessage");
    const pokeType = document.getElementById("pokeType");
    const pokeType1 = document.getElementById("pokeType1");
    const pokeName = document.getElementById("pokeName");
    const pokeHeight = document.getElementById("pokeHeight");
    const pokeWeight = document.getElementById("pokeWeight");
    const pokeId = document.getElementById("pokeID");
    const pokeAbi1 = document.getElementById("pokeAbi1");
    const pokeAbi2 = document.getElementById("pokeAbi2");

    if(found === 0){
        pokeMessage.innerHTML = "El pokemon no pudo ser encontrado!";
        pokeType.classList.add("hidden");
        pokeType1.classList.add("hidden");
        pokeHeight.classList.add("hidden");
        pokeWeight.classList.add("hidden");
        pokeId.classList.add("hidden");
        pokeAbi1.classList.add("hidden");
        pokeAbi2.classList.add("hidden");
        pokePhoto.src = url;
        pokeName.innerHTML = "";
    }
    else{
        pokeHeight.classList.remove("hidden");
        pokeWeight.classList.remove("hidden");
        pokeId.classList.remove("hidden");
        pokeAbi1.classList.remove("hidden");
        pokeAbi2.classList.remove("hidden");

        let height = pokeData.height*0.1;
        let weight = pokeData.weight*0.1;
        height = height.toFixed(2);
        weight = weight.toFixed(2);

        pokeMessage.innerHTML = "El pokemon fue encontrado!";
        pokeData.name = capitalizeFirstLetter(pokeData.name)
        pokeName.innerHTML = pokeData.name;
        pokePhoto.src = pokeData.img;
        pokeId.innerHTML = pokeData.id;
        pokeHeight.innerHTML = height.toString()+" m";
        pokeWeight.innerHTML = weight.toString()+" kg";
        pokeAbi1.innerHTML = pokeData.ability1;
        pokeAbi2.innerHTML = pokeData.ability2;



        if(pokeData.type === "fairy"||pokeData.type === "steel"){
            pokeType.classList.remove("hidden");
            pokeType.src = "./src/img/types/"+pokeData.type+".svg";
            if(pokeData.type1 !== ""){
                pokeType1.classList.remove("hidden");
                pokeType1.src = "./src/img/types/"+pokeData.type1+".svg";
                
            }
            else{
                pokeType1.classList.add("hidden");
            }
        }
        else{
            pokeType.classList.remove("hidden");
            pokeType.src = "./src/img/types/"+pokeData.type+".png";
            if(pokeData.type1 !== ""){
                pokeType1.classList.remove("hidden");
                pokeType1.src = "./src/img/types/"+pokeData.type1+".png";
            }
            else{
                pokeType1.classList.add("hidden");
            }
        }
    }
    

}