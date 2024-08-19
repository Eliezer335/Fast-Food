let prato = "";
let precoPrato = "";
let bebida = "";
let precoBebida = "";
let sobremesa = "";
let precoSobremesa = "";


const escolhePedido = (informacao)=>{
    const pratos = document.querySelectorAll(".prato");

    pratos.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const pratoDom = document.getElementById(informacao.id);
    pratoDom.classList.add("check");

   prato = informacao.nome;
   precoPrato = informacao.preco;
   
   const botaoFinalizarPedido = document.getElementById("botaoVerificaPedidos")
   if(prato !== "" && bebida !== "" && sobremesa !== ""){
    botaoFinalizarPedido.disabled= false

    }

}
const escolheBebida = (informacao)=>{
    const bebidas = document.querySelectorAll(".prato_1");
    console.log(bebidas)

    bebidas.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const bebidaDom = document.getElementById(informacao.id);
    bebidaDom.classList.add("check");

   bebida = informacao.nome;
   precoBebida = informacao.preco;

   const botaoFinalizarPedido = document.getElementById("botaoVerificaPedidos")
   if(prato !== "" && bebida !== "" && sobremesa !== ""){
    botaoFinalizarPedido.disabled= false

    }

}

const escolheSobremesa = (informacao)=>{
    const sobremesas = document.querySelectorAll(".prato_2");
    console.log(sobremesas)

    sobremesas.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const sobremesaDom = document.getElementById(informacao.id);
    sobremesaDom.classList.add("check");

   sobremesa = informacao.nome;
   precoSobremesa = informacao.preco;
//    console.log("Sobremesa ----",sobremesa)

   const botaoFinalizarPedido = document.getElementById("botaoVerificaPedidos")
   if(prato !== "" && bebida !== "" && sobremesa !== ""){
    botaoFinalizarPedido.disabled= false

    }


}
const botaoVerificaPedidos = ()=> {
    const botaoFinalizarPedido = document.getElementById("botaoVerificaPedidos")


    if(prato != "" & bebida != "" & sobremesa != ""){
        botaoFinalizarPedido.disabled = false

    }else{
        console.log("Funcionou Else")
        return false
    }
    
}

const finalizarPedido = (pedido)=>{
    const elementoParaAbertura =  document.querySelector(pedido)
    elementoParaAbertura.style.display="flex";
    const botaoFinalizarPedido = document.getElementById("botaoVerificaPedidos")
    // botaoFinalizarPedido.disabled= true;
    const precoTotal = parseFloat(precoPrato + precoBebida + precoSobremesa).toFixed(2);


    const popUp = document.getElementById("idpopUp");

    popUp.innerHTML = `
        <div class="ConfirmarPedidos">
            <h2>Confirme o seu Pedido</h2>
            <div class="pedido">
                <p>${prato}</p>
                <p>R$: ${precoPrato}</p>
            </div>
            <div class="pedido">
                <p> ${bebida}</p>
                <p>R$: ${precoBebida}</p>
            </div>         
            <div class="pedido">
                <p> ${sobremesa}</p>
                <p>R$: ${precoSobremesa}</p>
            </div>
            <div class="pedido">
                <p></p>
                <p>Total: ${precoTotal}</p>
                
            </div>
            <div class="botoesPopUp">
                <button class="btnConfirmarPedido" onclick="sendWhatsAppMessage()">Tudo certo, pode pedir</button>
                <div class="cancelar" onclick="cancelaPedido('.popUp')">Cancelar</div>
            </div>
        </div>
    `;

    


    if(prato !== "" && bebida !== "" && sobremesa !== ""){
        botaoFinalizarPedido.disabled= false

    }
}

const cancelaPedido = (pedido) => {
    const elementoParaCancelar = document.querySelector(pedido)
    elementoParaCancelar.style.display="none";
}

function sendWhatsAppMessage(phoneNumber, message) {
    const precoTotal = parseFloat(precoPrato + precoBebida + precoSobremesa).toFixed(2);

    const texto = `o seu pedido é: ${prato}, ${precoPrato},${bebida},
    ${precoBebida},${sobremesa},${precoSobremesa}, Total: ${precoTotal}`
    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(texto);

    // Cria a URL com o número de telefone e a mensagem codificada
    const url = `https://api.whatsapp.com/send?phone=${+5549991105517}&text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova janela/aba
    window.open(url, '_blank');
}

// Exemplo de uso
sendWhatsAppMessage('5581999999999', 'Olá, isso é uma mensagem automática!');
