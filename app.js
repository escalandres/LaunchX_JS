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
                stats: [data.stats[0].stat.name,data.stats[0].base_stat,
                    data.stats[1].stat.name,data.stats[1].base_stat,
                    data.stats[2].stat.name,data.stats[2].base_stat,
                    data.stats[3].stat.name,data.stats[3].base_stat,
                    data.stats[4].stat.name,data.stats[4].base_stat,
                    data.stats[5].stat.name,data.stats[5].base_stat],
                moves: [data.moves[0].move.name,data.moves[1].move.name,
                data.moves[2].move.name,data.moves[3].move.name]
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
    const pokeStat1 = document.getElementById("pokeStat1");
    const pokeStat2 = document.getElementById("pokeStat2");
    const pokeStat3 = document.getElementById("pokeStat3");
    const pokeStat4 = document.getElementById("pokeStat4");
    const pokeStat5 = document.getElementById("pokeStat5");
    const pokeStat6 = document.getElementById("pokeStat6");
    const pokeMove1 = document.getElementById("pokeMove1");
    const pokeMove2 = document.getElementById("pokeMove2");
    const pokeMove3 = document.getElementById("pokeMove3");
    const pokeMove4 = document.getElementById("pokeMove4");





    if(found === 0){
        pokeMessage.innerHTML = "El pokemon no pudo ser encontrado!";
        pokeType.classList.add("hidden");
        pokeType1.classList.add("hidden");
        pokeHeight.classList.add("hidden");
        pokeWeight.classList.add("hidden");
        pokeId.classList.add("hidden");
        pokeAbi1.classList.add("hidden");
        pokeAbi2.classList.add("hidden");
        pokeStat1.classList.add("hidden");
        pokeStat2.classList.add("hidden");
        pokeStat3.classList.add("hidden");
        pokeStat4.classList.add("hidden");
        pokeStat5.classList.add("hidden");
        pokeStat6.classList.add("hidden");
        pokeMove1.classList.add("hidden");
        pokeMove2.classList.add("hidden");
        pokeMove3.classList.add("hidden");
        pokeMove4.classList.add("hidden");
        pokePhoto.src = url;
        pokeName.innerHTML = "";
    }
    else{
        //Mostrar los textos
        pokeHeight.classList.remove("hidden");
        pokeWeight.classList.remove("hidden");
        pokeId.classList.remove("hidden");
        pokeAbi1.classList.remove("hidden");
        pokeAbi2.classList.remove("hidden");
        pokeStat1.classList.remove("hidden");
        pokeStat2.classList.remove("hidden");
        pokeStat3.classList.remove("hidden");
        pokeStat4.classList.remove("hidden");
        pokeStat5.classList.remove("hidden");
        pokeStat6.classList.remove("hidden");
        pokeMove1.classList.remove("hidden");
        pokeMove2.classList.remove("hidden");
        pokeMove3.classList.remove("hidden");
        pokeMove4.classList.remove("hidden");

        //Variables los textos
        let height = pokeData.height*0.1;
        let weight = pokeData.weight*0.1;
        height = height.toFixed(2);
        weight = weight.toFixed(2);

        //Imprimir los textos
        pokeMessage.innerHTML = "El pokemon fue encontrado!";
        pokeData.name = capitalizeFirstLetter(pokeData.name)
        pokeName.innerHTML = pokeData.name;
        pokePhoto.src = pokeData.img;
        pokeId.innerHTML = pokeData.id;
        pokeHeight.innerHTML = height.toString()+" m";
        pokeWeight.innerHTML = weight.toString()+" kg";
        pokeAbi1.innerHTML = pokeData.ability1;
        pokeAbi2.innerHTML = pokeData.ability2;
        pokeStat1.innerHTML = pokeData.stats[0].toString()+" "+pokeData.stats[1];
        pokeStat2.innerHTML = pokeData.stats[2].toString()+" "+pokeData.stats[3];
        pokeStat3.innerHTML = pokeData.stats[4].toString()+" "+pokeData.stats[5];
        pokeStat4.innerHTML = pokeData.stats[6].toString()+" "+pokeData.stats[7];
        pokeStat5.innerHTML = pokeData.stats[8].toString()+" "+pokeData.stats[9];
        pokeStat6.innerHTML = pokeData.stats[10].toString()+" "+pokeData.stats[11];
        pokeMove1.innerHTML = pokeData.moves[0];
        pokeMove2.innerHTML = pokeData.moves[1];
        pokeMove3.innerHTML = pokeData.moves[2];
        pokeMove4.innerHTML = pokeData.moves[3];

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