document.getElementById('form').addEventListener('submit' , (e) => {
const form = e.currentTarget 
    const data = {
    nome : form.nome.value
}
console.log(form.nome.value)
})



document.addEventListener('keypress', function (e) {
    if (e.key === "Enter") 

    var btn = document.querySelector("#clicar")
            btn.click();
}) 