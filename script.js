function limparCep(cep){
    cep = cep.replace("-", "");
    cep = cep.replace(".", "");
    return cep;
}

function consultarCep(cep){
    fetch("https://viacep.com.br/ws/" + cep + "/json")
    .then(resposta => resposta.json())
    .then(resposta => {    
        if(resposta.erro) {
            alert("CEP não encontrado! Por favor digite um CEP válido.")
        }else {
            document.getElementById("cidade").value = resposta.localidade;
            document.getElementById("estado").value = resposta.uf;
            document.getElementById("endereco").value = resposta.logradouro;
            document.getElementById("bairro").value = resposta.bairro;

            document.getElementById("formulario").classList.add("hidden");
            document.getElementById("resultado").classList.remove("hidden");
        }
    });
}

document.getElementById("consultar").addEventListener("click", function(e){
    let cep = document.getElementById("cep").value;
    cep = limparCep(cep);
    if(cep.length === 8){
        consultarCep(cep)
    }else{
        alert("Digite um CEP válido!")
    }
})

document.getElementById("consultarNovo").addEventListener("click", function(){
    document.getElementById("formulario").classList.remove("hidden");
    document.getElementById("resultado").classList.add("hidden");
});
