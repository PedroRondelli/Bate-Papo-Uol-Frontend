let nomeUsuario;
function perguntarNome() {  
    let acesso ="não"
    while(acesso==="não"){  
        nomeUsuario = prompt("Qual é o seu lindo nome?")
        const objeto = {name : nomeUsuario}
        if( nomeUsuario!= null && nomeUsuario.length > 2){
            axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objeto )
            acesso="sim"  
        }
        else{
            alert("Nome inválido, digite outro")
            acesso="não"
        }
    }    
}   

perguntarNome()
