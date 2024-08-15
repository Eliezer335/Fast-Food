let prato = "";
let precoPrato = "";
let bebida = "";
let precoBebida = "";
let sobremesa = "";
let precoSobremesa = "";

const escolhePedido = (informacao)=>{
    const prato1 = document.querySelectorAll(".prato");
    console.log(prato1)

    prato1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const pratoDom = document.getElementById(informacao.id);
    pratoDom.classList.add("check");

   prato = informacao.nome;
   precoPrato = informacao.preco;

}
const escolheBebida = (informacao)=>{
    const bebida1 = document.querySelectorAll(".prato_1");
    // console.log(bebida1)

    bebida1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const prato = document.getElementById(informacao.id);
    prato.classList.add("check");

   bebida = informacao.nome;
   precoBebida = informacao.preco;

}

const escolheSobremesa = (informacao)=>{
    const sobremesa1 = document.querySelectorAll(".prato_2");
    // console.log(bebida1)

    sobremesa1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const sobremesaDom = document.getElementById(informacao.id);
    sobremesaDom.classList.add("check");

   sobremesa = informacao.nome;
   precoSobremesa = informacao.preco;
   console.log("Sobremesa ----",sobremesa)


}

const finalizarPedido = (pedido)=>{
    const elementoParaAbertura =  document.querySelector(pedido)
    elementoParaAbertura.style.display="flex";
    const precoTotal = parseFloat(precoPrato + precoBebida + precoSobremesa).toFixed(2);


    const popUp = document.getElementById("idpopUp");

    popUp.innerHTML = `
        <div class="ConfirmarPedidos">
            <h2>Confirme o seu Pedido</h2>
            <div class="pedido">
                <p>Prato: ${prato}</p>
                <p>Valor: ${precoPrato}</p>
            </div>
            <div class="pedido">
                <p>Prato: ${bebida}</p>
                <p>Valor: ${precoBebida}</p>
            </div>         
            <div class="pedido">
                <p>Prato: ${sobremesa}</p>
                <p>Valor: ${precoSobremesa}</p>
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
}

const cancelaPedido = (pedido) => {
    const elementoParaCancelar = document.querySelector(pedido)
    elementoParaCancelar.style.display="none";
}

function sendWhatsAppMessage(phoneNumber, message) {
    const precoTotal = parseFloat(precoPrato + precoBebida + precoSobremesa).toFixed(2);

    const texto = `o seu pedido é: <br> ${prato}, ${precoPrato},${bebida},
    ${precoBebida},${sobremesa},${precoSobremesa},Total: ${precoTotal} `
    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(texto);

    // Cria a URL com o número de telefone e a mensagem codificada
    const url = `https://api.whatsapp.com/send?phone=${+5549991105517}&text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova janela/aba
    window.open(url, '_blank');
}

// Exemplo de uso
sendWhatsAppMessage('5581999999999', 'Olá, isso é uma mensagem automática!');
