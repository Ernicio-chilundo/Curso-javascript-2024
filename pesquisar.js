const btn_pesq = document.getElementById("btn_pesq")
const f_textpesq = document.getElementById("f_textpesq")
const dados = document.getElementById("dados")

btn_pesq.addEventListener("click",(evt)=>{
    dados.innerHTML = ""
    const valorpesq = f_textpesq.value
    if (valorpesq==""){
        alert("Digite a pesquisa")
        f_textpesq.focus()
        return
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value 
    const entpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorpesq}`
    fetch(entpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML = ""
        res.forEach(el => {
            const linha =document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 =  document.createElement("div")
            c1.setAttribute("class","coluna c1")
            c1.innerHTML= el.n_contato_contato
            linha.appendChild(c1)

            const c2 =  document.createElement("div")
            c2.setAttribute("class","coluna c2")
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)

            const c3 =  document.createElement("div")
            c3.setAttribute("class","coluna c3")
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)

            const c4 =  document.createElement("div")
            c4.setAttribute("class","coluna c4")
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)

            const c5 =  document.createElement("div")
            c5.setAttribute("class","coluna c5")
            c5.innerHTML = el.dt_dtnasc_contato
            linha.appendChild(c5)

            dados.appendChild(linha)
        });
    })

}) 