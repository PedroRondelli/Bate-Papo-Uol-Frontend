function perguntarNome() {
    nomeDigitado  = prompt("Qual o seu nome?")
    nomeChecado = {name:nomeDigitado}
    promessaChecagemNome = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomeChecado)
    promessaChecagemNome.then(mantemConectadoeRendenizaMsg)
    promessaChecagemNome.catch(perguntarNovamente)
}    

 function mantemConectadoeRendenizaMsg() {
    setInterval(bateponto, 5000)
    RequisicaoArraydeMsgs()
 }
 function perguntarNovamente() {
    perguntarNome()
 }
 function bateponto() {
    const promessaConectado = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nomeChecado )
    promessaConectado.then(estouaqui)
    promessaConectado.catch(desconectei)
 }
 function estouaqui() {
    console.log('...')
 }
 function desconectei() {
    console.log('Cai!!')
 }

let nomeDigitado  = prompt("Qual o seu nome?")
let nomeChecado = {name:nomeDigitado}
let promessaChecagemNome = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomeChecado)
promessaChecagemNome.then(mantemConectadoeRendenizaMsg)
promessaChecagemNome.catch(perguntarNovamente)
let chat = document.querySelector(".chat")
let ultimamsg;
let arrayComparador;
let indexdoultimo;




function RequisicaoArraydeMsgs() {
    let promessaCarregarmsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessaCarregarmsg.then(PrimeirasMsgs)
    promessaCarregarmsg.catch(RequisicaoArraydeMsgs)

}
function PrimeirasMsgs(resposta) {
    ultimamsg = resposta.data[99]
    arrayComparador = resposta.data
    resposta.data.forEach(verificacaoTipo)
    setInterval(RequisicaoChat, 3000)
}
function verificacaoTipo(elemento) {

    let tipo = elemento.type
    if(tipo === "status"){
        chat.innerHTML = chat.innerHTML +`<div class="boxChat statusbox escopoStatus "><span class="timer">(${elemento.time})</span> <span class="negrito">${elemento.from}</span> ${elemento.text}</div>`
        let esseDeveSerVisto = document.querySelector(".escopoStatus")
        esseDeveSerVisto.scrollIntoView()
        console.log(esseDeveSerVisto.classList)
        esseDeveSerVisto.classList.remove("escopoStatus")
    }
    else if(tipo === "message"){
        chat.innerHTML = chat.innerHTML +`<div class="boxChat messagebox escopoMessage"><span class="timer">(${elemento.time})</span> <span class="negrito">${elemento.from}</span> para <span class="negrito">${elemento.to}</span>: ${elemento.text}</div>`
        let esseDeveSerVisto = document.querySelector(".escopoMessage")
        esseDeveSerVisto.scrollIntoView()
        console.log(esseDeveSerVisto.classList)
        esseDeveSerVisto.classList.remove("escopoMessage")
        
    }
    else if(tipo === "private_message"){
        chat.innerHTML = chat.innerHTML + `<div class="boxChat privatebox escopoPrivate"><span class="timer">(${elemento.time})</span> <span class="negrito">${elemento.from}</span> reservadamente para <span class="negrito">${elemento.to}</span>: ${elemento.text}  `
        let esseDeveSerVisto = document.querySelector(".escopoPrivate")
        esseDeveSerVisto.scrollIntoView()
        console.log(esseDeveSerVisto.classList)
        esseDeveSerVisto.classList.remove("escopoPrivate")
        
    }
}
function RequisicaoChat() {
    let promessaAtualizarmsgs = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessaAtualizarmsgs.then(atualizaChat)
    promessaAtualizarmsgs.catch()
}
function atualizaChat(resposta) {
    let arrayNovo = resposta.data
    arrayNovo.forEach(objetoNovo => {
        if(JSON.stringify(objetoNovo) === JSON.stringify(ultimamsg)){
            indexdoultimo = arrayNovo.indexOf(objetoNovo)
            for(let e=indexdoultimo + 1;e < 100;e++){
            verificacaoTipo(arrayNovo[e])
            }
        }
        
    });
    arrayComparador = arrayNovo
    indexdoultimo = 0
    ultimamsg = arrayNovo[99]

    
}

let teste1=[{name:"tevos"},{name:"hermat"},{name:"pimba"},{name:"chachac"}]
// let teste2=[{name:"pimba"},{name:"chachac"},{name:"mao"},{name:"vacilao"}]
// ultimamsg= teste1[3]

// let indexMarcador;
// teste2.forEach(checaseevelho)

// for(let e=indexMarcador + 1;e < 4;e++){
//     console.log(teste2[e])
    // verificacaoTipo(teste2[e])
// }

// function checaseevelho(elemento) {
//     if(JSON.stringify(ultimamsg) === JSON.stringify(elemento) ){
//        let indexdoultimo = teste2.indexOf(elemento)
//        indexMarcador = indexdoultimo
//     }
// }