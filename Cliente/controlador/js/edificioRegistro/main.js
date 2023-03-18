const a=document.querySelector(".A")
const ab=document.querySelector(".r")
const r2=document.querySelector(".ra")
const r3=document.querySelector(".rb")
const r4=document.querySelector(".rc")
const r5=document.querySelector(".rd")
const r6=document.querySelector(".rf")
const r7=document.querySelector(".rg")
const r8=document.querySelector(".ri")
const b=document.querySelector(".b")
const c=document.querySelector(".c")
const d=document.querySelector(".d")
const z=document.querySelector(".eld")
const f=document.querySelector(".f")
const g=document.querySelector(".g")
const  i=document.querySelector(".i")
const p=document.querySelector(".p")
const p2=document.querySelector(".p2")
const p3=document.querySelector(".p3")
const p4=document.querySelector(".p4")
const p5=document.querySelector(".p5")
const p6=document.querySelector(".p6")
const p7=document.querySelector(".p7")
const p8=document.querySelector(".p8")
const existe=document.querySelector(".yaexiste")
a.addEventListener("click",(e)=>{
    e.preventDefault()
    p.classList.add("pa")
   p.textContent="Apartado"
 
   a.classList.add("r")
   ab.classList.add("r1")

})

ab.addEventListener("click",(e)=>{
    e.preventDefault()
    ab.classList.remove("r1")
    p.textContent=""
    a.classList.remove("r")
})
b.addEventListener("click",(e)=>{
    e.preventDefault()
    p2.classList.add("pa")
    p2.textContent="Apartado"
    b.classList.add("r")
    r2.classList.remove("ra")
    r2.classList.add("r1")
   
   
})
r2.addEventListener("click",(e)=>{
    e.preventDefault()
    ab.classList.remove("r1")
    p2.textContent=""
    r2.classList.add("ra")
    b.classList.remove("r")
})
c.addEventListener("click",(e)=>{
    e.preventDefault()
    p3.classList.add("pa")
    p3.textContent="Apartado"
    c.classList.add("r")
    r3.classList.add("r1")
    r3.classList.remove("rb")
   
   
})
r3.addEventListener("click",(e)=>{
    e.preventDefault()
    r3.classList.remove("r1")
    p3.textContent=""
    r3.classList.add("rb")
    c.classList.remove("r")
})
d.addEventListener("click",(e)=>{
    e.preventDefault()
    
    p4.classList.add("pa")
    p4.textContent="Apartado"
    d.classList.add("r")
    r4.classList.add("r1")
    r4.classList.remove("rc")
    
})
r4.addEventListener("click",(e)=>{
    e.preventDefault()
    r4.classList.remove("r1")
    p4.textContent=""
    r4.classList.add("rc")
    d.classList.remove("r")
})
z.addEventListener("click",(e)=>{
    e.preventDefault()
    p5.classList.add("pa")
    p5.textContent="Apartado"
    z.classList.add("r")
    r5.classList.add("r1")
    r5.classList.remove("rc")
})
r5.addEventListener("click",(e)=>{
    e.preventDefault()
    r5.classList.remove("r1")
    p5.textContent=""
    r5.classList.add("rc")
    z.classList.remove("r")

})
f.addEventListener("click",(e)=>{
    e.preventDefault()
    p6.classList.add("pa")
    p6.textContent="Apartado"
    f.classList.add("r")
    r6.classList.add("r1")
    r6.classList.remove("rf")
   
})
r6.addEventListener("click",(e)=>{
    e.preventDefault()
    r6.classList.remove("r1")
    p6.textContent=""
    r6.classList.add("rf")
    f.classList.remove("r")

})

g.addEventListener("click",(e)=>{
    e.preventDefault()
    p7.classList.add("pa")
    p7.textContent="Apartado"
    g.classList.add("r")
    r7.classList.add("r1")
    r7.classList.remove("rf")
})
r7.addEventListener("click",(e)=>{
    e.preventDefault()
    r7.classList.remove("r1")
    p7.textContent=""
    r7.classList.add("rg")
    g.classList.remove("r")
})
i.addEventListener("click",(e)=>{
    e.preventDefault()
    p8.classList.add("pa")
    p8.textContent="Apartado"
    i.classList.add("r")
    r8.classList.add("r1")
    r8.classList.remove("rf")
})
r8.addEventListener("click",(e)=>{
    e.preventDefault()
    r8.classList.remove("r1")
    p8.textContent=""
    r8.classList.add("rg")
    i.classList.remove("r")
})
