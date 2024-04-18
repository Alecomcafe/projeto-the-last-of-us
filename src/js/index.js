/*
OBJETIVO  - QUANDO CLICARMOS NO BOTÃO TENMOS QUE MOSTRAR A IMAGEM DE FUNDO CORRESPONDENTE.

- Passo 1- dar um geito de pegar o elemento HTML dos botões
- Passo 2- dar um geito de identificar o clic do usuário no botão
- Passo 3- desmarcar o botão selecionado  anterior
- Passo 4- marcar o botão clicado como se estivesse selecionado
- Passo 5- esconder a imagem anterior
- Passo 6- fazer aparecer a imagem correspondente ao botão clicado 
*/

//- Passo 1- dar um geito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');

//Passo 2- dar um geito de identificar o clic do usuário no botão
botoesCarrossel.forEach((botao) => {
    botao.addEventListener('click', () =>{
        //Passo 3- desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4- marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
    } )
})







