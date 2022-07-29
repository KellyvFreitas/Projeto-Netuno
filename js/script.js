function scrollar(position) {
    document.querySelector('#'+position).scrollIntoView({
        behavior: 'smooth'
      });
} 

function enviarFormulario() {
    let name = document.querySelector("#input-name").value
    alert(name + ' Sua mensagem foi enviada com sucesso!')
}
