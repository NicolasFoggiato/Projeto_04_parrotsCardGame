let numberCards;
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
let plays =0;
let firstCard
let secondCard
let itPlayed = 0

// function hitCounter(){
//     if (jogadas === qtdeCartas /2 ){
//        setTimeout(ganhou, 2000)
//         function ganhou(){alert (`Você ganhou em ${jogou /2} jogadas`)}
        
        
//     }]




// function hitCounter(){
//     if (plays === numberCards/2){
//         alert (`'você ganhou em ${itPlayed /2} jogadas'` );

//         const response = prompt('deseja jogar novamente? ')
//     }

// }
function upturnedCard(){
    firstCard.classList.remove("virar")
    secondCard.classList.remove("virar")
    firstCard = undefined;
    secondCard = undefined;
}

function turnCard(card){
    itPlayed++
    card.classList.add('virar')
    if(firstCard === undefined){
        firstCard = card
    }else if(secondCard === undefined){
        secondCard = card
    }
    if(firstCard.innerHTML === secondCard.innerHTML){
        plays++
       firstCard =undefined;
       secondCard = undefined;
        

        console.log(plays);
        console.log(numberCards);
        if (plays === numberCards /2){
            alert (`'você ganhou em ${itPlayed} jogadas'`);


        }

    }else{ setTimeout(upturnedCard, 1000)

    }

}

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