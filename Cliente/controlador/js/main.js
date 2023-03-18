const abrir=document.querySelector(".boton")
const modal=document.querySelector(".contador")
const delete1=document.querySelector(".delete")

const iniciar=document.querySelector(".iniciar")
const alerta1=document.querySelector(".h")
abrir.addEventListener('click',(e)=>{
    e.preventDefault()
   modal.classList.add("contador--show")
})
delete1.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.classList.remove("contador--show")
})
iniciar.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location="/Cliente/vistas/vistaPrincipalnicio/index.html"
})
alerta1.addEventListener("click",(e)=>{
    e.preventDefault()
    alert("dddd")
})

