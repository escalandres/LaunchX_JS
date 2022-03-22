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
                ability2: "",
                stats: [data.stats[0].base_stat, data.stats[1].base_stat ,data.stats[2].base_stat,
                    data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat],
                moves: [data.moves[0].move.name,data.moves[1].move.name,
                data.moves[2].move.name,data.moves[3].move.name]
            }
            if(data.types[1] === undefined){
                console.log("Type 1 is undefines\d");
            }
            else{
                pokeData.type1 = data.types[1].type.name;
            }
            if(data.abilities[1] === undefined){
                console.log("Ability 2 is undefines\d");
            }
            else{
                pokeData.ability2 = data.abilities[1].ability.name
            }
            console.log(pokeData)
            pokeImage("",1,pokeData)
        }
    });
}

let pokeImage = (url,found,pokeData) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokeName2 = document.getElementById("pokeName2");
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
        //Not found
        alert("El pokemon no pudo ser encontrado!");
        pokeType.classList.add("hidden");
        pokeType1.classList.add("hidden");
        pokePhoto.src = url;
        pokeName.innerHTML = "Unknown";
        pokeName2.innerHTML = "Unknown";
        pokeId.innerHTML = "# 0";
        pokeHeight.innerHTML = "# m";
        pokeWeight.innerHTML = "# kg";
        pokeAbi1.innerHTML = "Not found";
        pokeAbi2.innerHTML = "Not found";
        pokeStat1.innerHTML = "0";
        pokeStat2.innerHTML = "0";
        pokeStat3.innerHTML = "0";
        pokeStat4.innerHTML = "0";
        pokeStat5.innerHTML = "0";
        pokeStat6.innerHTML = "0";
        pokeMove1.innerHTML = "None";
        pokeMove2.innerHTML = "None";
        pokeMove3.innerHTML = "None";
        pokeMove4.innerHTML = "None";
    }
    else{
        //Mostrar los textos

        //Variables los textos
        let height = pokeData.height*0.1;
        let weight = pokeData.weight*0.1;
        height = height.toFixed(2);
        weight = weight.toFixed(2);

        //Imprimir los textos
        pokeData.name = capitalizeFirstLetter(pokeData.name)
        pokeName.innerHTML = pokeData.name;
        pokeName2.innerHTML = pokeData.name;
        pokePhoto.src = pokeData.img;
        pokeId.innerHTML = "# "+pokeData.id;
        pokeHeight.innerHTML = height.toString()+" m";
        pokeWeight.innerHTML = weight.toString()+" kg";
        pokeAbi1.innerHTML = capitalizeFirstLetter(pokeData.ability1);
        pokeAbi2.innerHTML = capitalizeFirstLetter(pokeData.ability2);
        pokeStat1.innerHTML = pokeData.stats[0];
        pokeStat2.innerHTML = pokeData.stats[1];
        pokeStat3.innerHTML = pokeData.stats[2];
        pokeStat4.innerHTML = pokeData.stats[3];
        pokeStat5.innerHTML = pokeData.stats[4];
        pokeStat6.innerHTML = pokeData.stats[5];
        pokeMove1.innerHTML = capitalizeFirstLetter(pokeData.moves[0]);
        pokeMove2.innerHTML = capitalizeFirstLetter(pokeData.moves[1]);
        pokeMove3.innerHTML = capitalizeFirstLetter(pokeData.moves[2]);
        pokeMove4.innerHTML = capitalizeFirstLetter(pokeData.moves[3]);
        
        pokeType.classList.remove("hidden");
        if(pokeData.type === "fairy"||pokeData.type === "steel"){
            pokeType.src = "./src/img/types/"+pokeData.type+".svg";
        }
        else{
            pokeType.src = "./src/img/types/"+pokeData.type+".png";
        }
        if(pokeData.type1 !== ""){
            pokeType1.classList.remove("hidden");
            if(pokeData.type1 === "fairy"||pokeData.type1 === "steel"){
                pokeType1.src = "./src/img/types/"+pokeData.type1+".svg";
            }
            else{
                pokeType1.src = "./src/img/types/"+pokeData.type1+".png";
            }
        }
        else{
            pokeType1.classList.add("hidden");
        }
    }
    
}

function changeColor(){
    const pokedex = document.getElementById("Pokedex");
    const pokedex_ball = document.getElementById("pokedex_ball");
    const pokedex_square = document.getElementById("pokedex_square");
    const pokedex_trapecio_left = document.getElementById("trapecio_left");
    const pokedex_trapecio_right = document.getElementById("trapecio_right");

    let color = 0;
    let first_pokedex_color = "rgb(118, 125, 141)";
    let second_pokedex_color = "rgb(208, 195, 212)";
    let first_pokeball_color = "rgb(194, 0, 26)";
    let second_pokeball_color = "rgb(226, 98, 121)";

    let pokedex_background = window.getComputedStyle( pokedex ,null).getPropertyValue('background-color'); 
    // alert(pokedex_background)
    // alert(first_pokeball_color)
    if(pokedex_background == first_pokedex_color){
        pokedex.style.backgroundColor = second_pokedex_color;
        pokedex_ball.style.backgroundColor = second_pokeball_color;
        pokedex_square.style.borderColor = second_pokeball_color;
        pokedex_square.style.backgroundColor = second_pokeball_color;
        pokedex_trapecio_left.style.borderBottomColor = second_pokeball_color;
        pokedex_trapecio_right.style.borderBottomColor = second_pokeball_color;
    }
    else if(pokedex_background == second_pokedex_color){
        pokedex.style.backgroundColor = first_pokedex_color;
        pokedex_ball.style.backgroundColor = first_pokeball_color;
        pokedex_square.style.borderColor = first_pokeball_color;
        pokedex_square.style.backgroundColor = first_pokeball_color;
        pokedex_trapecio_left.style.borderBottomColor = first_pokeball_color;
        pokedex_trapecio_right.style.borderBottomColor = first_pokeball_color;
    }
    
    // alert(typeof(pokedex_background))
}