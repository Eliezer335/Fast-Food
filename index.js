let prato = "";
let precoPrato = "";
let bebida = "";
let sobremesa = "";

const escolheCaixa = (informacao) => {
    console.log(informacao)
    const caixa = document.getElementById(informacao.id);
    //const img = docume...
    
    caixa.classList.add("check");
    //Preciso retirar a seleção dos selecionados e colocar no que foi selecionado pela função;
    caixa.classList.remove("check");
};

const escolhePedido = (informacao)=>{
    const prato1 = document.querySelectorAll(".prato");
    console.log(prato1)

    prato1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const prato = document.getElementById(informacao.id);
    prato.classList.add("check");

   prato = informacao.nome;
   precoPrato = informacao.idade

   novaFuncao();

}
const novaFuncao = () => {
    console.log(prato, precoPrato)
};

const escolheBebida = (informacao)=>{
    const bebida1 = document.querySelectorAll(".prato_1");
    // console.log(bebida1)

    bebida1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const prato = document.getElementById(informacao.id);
    prato.classList.add("check");

   prato = informacao.nome;
   precoPrato = informacao.idade


}

const escolheSobremesa = (informacao)=>{
    const sobremesa1 = document.querySelectorAll(".prato_2");
    // console.log(bebida1)

    sobremesa1.forEach((prato) => {
        prato.classList.remove("check");
    }) //executa a mesma ação para todos os elementos

    const prato = document.getElementById(informacao.id);
    prato.classList.add("check");

   prato = informacao.nome;
   precoPrato = informacao.idade


}

const finalizarPedido = (pedido)=>{
    const elementoParaAbertura =  document.querySelector(pedido)
    elementoParaAbertura.style.display="flex";

    constpopUp = document.getElementById("idpopUp");

    popUp.innerHTML += `
        section class="popUp" id="idpopUp">
            <div class="ConfirmarPedidos">
                <h2>Confirme o seu Pedido</h2>
                <div class="pedido">pedido1</div>
                <div class="pedido">pedido2</div>
                <div class="pedido">pedido3</div>
                <div class="total">Total</div>
                <div class="botoesPopUp">
                    <button class="btnConfirmarPedido">Tudo certo, pode pedir</button>
                    <div class="cancelar" onclick="cancelaPedido('.popUp')">Cancelar</div>
                </div>
            </div>
        </section>
    `;
}

const cancelaPedido = (pedido) => {
    const elementoParaCancelar = document.querySelector(pedido)
    elementoParaCancelar.style.display="none";
}

