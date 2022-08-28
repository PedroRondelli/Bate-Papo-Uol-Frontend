function perguntarNome() {
    nomeUsuario = prompt("Nome inválido.Digite outro nome")
    objeto = { name : nomeUsuario }
    promessaPost = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", objeto)
    promessaPost.then(sucessoNomeUsuario)
    promessaPost.catch(erroNomeUsuario)
    
}

function erroNomeUsuario() {
    console.log("Esse nome não é válido")
    perguntarNome()
}
function sucessoNomeUsuario() {
    console.log("Esse nome é válido")
    entrouChat()

}
function entrouChat() {
    const promessaGetMensagens = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessaGetMensagens.then(renderizarMensagem)
    promessaGetMensagens.catch(entrouChat)
}

function renderizarMensagem(resposta) {
    const arrayMensagens = resposta.data
    for(let i=0 ; i < arrayMensagens.length ; i++){
        const chat  = document.querySelector(".chat")
        let tipo = arrayMensagens[i].type
        verificar(tipo,arrayMensagens[i],chat)
    }
    arrayComparacao.push(arrayMensagens)
    setInterval(chamada, 5000)
    setInterval(atualizarChat, 3000)

    
}
function verificar(modeloMsg,objetoUsuario,sala) {
    if(modeloMsg ==='status'){
        sala.innerHTML = sala.innerHTML + `<div class=" statusbox boxChat"><span class="timer">(${objetoUsuario.time})</span> <span class="negrito">${objetoUsuario.from}</span> <span class="texto">${objetoUsuario.text}</span></div>`
    }else if(modeloMsg ==='private_message'){
         
    }else if(modeloMsg === 'message'){
         
    }
}
function chamada() {
    const promessaChamada = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",objeto)
    promessaChamada.then(estouConectado)
    promessaChamada.catch()
}
function estouConectado() {
    console.log(" Estou conectado!!! ")
}
function atualizarChat() {
    const promessaAtualizar = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessaAtualizar.then(comparaArrays)
    promessaAtualizar.catch()
    

}
function comparaArrays(resposta){
   let arrayNovo  = resposta.data
   for(i = 99;i < 0; i-1){
    if(arrayNovo[i]!= ultimaMsg){
        
    }
       
   }
   
}
let arrayComparacao;
alert("Olá, que bom ter você por aqui !")
let nomeUsuario = prompt(" Qual é o seu nome de usuário ?" )
let objeto = { name : nomeUsuario }
let promessaPost = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", objeto) 
promessaPost.then(sucessoNomeUsuario)
promessaPost.catch(erroNomeUsuario)

