
function gerarBind() {
    // Obter valores selecionados
    var tecla = document.getElementById("opcao").value;
    var animacao = document.getElementById("anime").value;

    // Construir o comando Bind
    var comandoBind = 'bind keyboard "' + tecla + '" "' + animacao + '"' 
    

    // Exibir o resultado na textarea
    document.getElementById("resultado").value = comandoBind;

}

function copiarResultado() {
    // Selecionar o conteúdo da textarea
    var resultadoTextarea = document.getElementById("resultado");
    resultadoTextarea.select();

    // Executar o comando de cópia
    document.execCommand("copy");

    // Exibir um alerta indicando que o resultado foi copiado
    alert("Copiado com sucesso! Agora aperte F8 no FiveM e cole.");
}


function ApagarBind() {
    // Obter valores selecionados
    var tecla = document.getElementById("opcao").value;
    var animacao = document.getElementById("anime").value;

    // Construir o comando Bind
    var comandoBind = 'unbind keyboard "' + tecla + '"'
    

    // Exibir o resultado na textarea
    document.getElementById("resultado").value = comandoBind;

}