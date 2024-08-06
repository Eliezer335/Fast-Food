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