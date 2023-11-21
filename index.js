document.getElementById('form').addEventListener('submit', (event) => {
    const form = event.currentTarget
    const data = {
        nome: form.nome.value,
        endereco: form.endereco.value,
        diasDaSemana: form.diasDaSemana.value,
        abertura: form.abertura.value,
        fechamento: form.fechamento.value

    }
    console.log(data)
    console.log("Preparando Envio")
    window.localStorage.setItem('dados' , JSON.stringify(dados))
})
window.onload = () => {
 const form =  getElementById('form')
 let data = window.localStorage.getItem('dados')
    if (data) {
    data = JSON.parse(data)
    form.nome.value = data.nome
    form.endereco.value = data.endereco
    form.diasDaSemana.value = data.diasDaSemana,
   form.abertura.value =  data.abertura,
   form.fechamento.value = data.fechamento

    }
}















document.addEventListener('keypress', function (e) {
    if (e.key === "Enter") 

    var btn = document.querySelector("#clicar")
            btn.click();
})