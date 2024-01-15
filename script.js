
function gerarBind() {
    // Obter valores selecionados
    var tecla = document.getElementById("opcao").value;
    var animacao = document.getElementById("anime").value;

    // Construir o comando Bind
    var comandoBind = 'bind keyboard "' + tecla + '" "' + animacao + '"' 
    

    // Exibir o resultado na textarea
    document.getElementById("resultado").value = comandoBind;
}