let numberCards=''
let characters = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif", 
    "tripletsparrot.gif",
    "unicornparrot.gif"
];
let cheap =[]

function pullLetter(){

    for(let i=0; i < numberCards; i++){
        document.querySelector('.container').innerHTML +=`
            <div class="memory-card" onclick="turnCard(this)" >
                <div class="front-face face" >
                    <img src="./imagens/backcarta.png">
                </div>
                <div class="back-face face">
                    <img src="./imagens/${cheap[i]}" alt="">
                </div>
            </div>
        `}
}

function comparador(){
    return Math.random() -0.5;
}

function renderLetter(){
    for(i=0; i< numberCards/2; i++){
       let cards = characters[i];
       cheap.push(cards);
       cheap.push(cards);
    }
    cheap.sort(comparador)
    pullLetter()
}

function cardDistribution(){
  numberCards =  Number (prompt('Olá, escolha uma quantidade de cartas entre 4 e 14 :)'));

    while (numberCards <4 || numberCards >14 || numberCards === NaN || numberCards %2 !== 0 )
    {alert ('insira um número válido');
    numberCards =  Number (prompt('Olá, escolha uma quantidade de cartas entre 4 e 14 :)'));}
    renderLetter()
}
cardDistribution()