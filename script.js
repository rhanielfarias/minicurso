const botao = document.querySelector ('button');
        traduzirvivo = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAleatorio = () => {
    return Math.floor (Math.random() * 671);
}
pegarPersonagem =(numero) =>{
    let numeroAleatorio = gerarValorAleatorio ();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
"Content-type": 'application/json'
}
}).then((response) => response.json()).then((data) =>{
    const imagem = document.querySelector (`#imagem${numero}`);
    const nomeDoPersonagem = document.querySelector (`#nome${numero}`);
    const especie = document.querySelector (`#especie${numero}`);
    const vivo = document.querySelector (`#vivo${numero}`);

    imagem.src=data.image;
    imagem.alt=data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    vivo.innerHTML =traduzirvivo(data);
});
}
pegarTresPersonagens =() =>{
    pegarPersonagem(1);
    pegarPersonagem(2);
    pegarPersonagem(3);
}
botao.onclick =pegarTresPersonagens;
