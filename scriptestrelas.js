const image1 = document.getElementById('personagem1')
const nomeDoPersonagem1 = document.getElementById('nome-personagem1')

const image2 = document.getElementById('personagem2')
const nomeDoPersonagem2 = document.getElementById('nome-personagem2')

const image3 = document.getElementById('personagem3')
const nomeDoPersonagem3 = document.getElementById('nome-personagem3')

const image4 = document.getElementById('personagem4')
const nomeDoPersonagem4 = document.getElementById('nome-personagem4')

const numeroMaximoDePersonagens = 671;
let nomeDoPersonagem;

numeroPersonagem = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

IDGeradoImage1 = () => {const id = numeroPersonagem();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',headers: {
    Accept: 'application/json',"Content-Type": 'application/json'
}
}).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        image1.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem1.innerHTML = data.name;
})
}

IDGeradoImage2 = () => {const id = numeroPersonagem();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',headers: {
    Accept: 'application/json',"Content-Type": 'application/json'
}
}).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        image2.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem2.innerHTML = data.name;
})
}

IDGeradoImage3 = () => {const id = numeroPersonagem();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',headers: {
    Accept: 'application/json',"Content-Type": 'application/json'
}
}).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        image3.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem3.innerHTML = data.name;
})
}

IDGeradoImage4 = () => {const id = numeroPersonagem();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',headers: {
    Accept: 'application/json',"Content-Type": 'application/json'
}
}).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        image4.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem4.innerHTML = data.name;
})
}

getRefresh = () =>{
    IDGeradoImage1()
    IDGeradoImage2()
    IDGeradoImage3()
    IDGeradoImage4()
}


document.onload = getRefresh()