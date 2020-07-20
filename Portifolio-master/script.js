var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click",() =>
    document.querySelector(".container").classList.toggle("show-menu"));


    document.querySelector("#qtde").addEventListener("change",atualizarPreco)
    document.querySelector("#js").addEventListener("change",atualizarPreco)
    document.querySelector("#layout-sim").addEventListener("change",atualizarPreco)
    document.querySelector("#layout-nao").addEventListener("change",atualizarPreco)
    document.querySelector("#prazo").addEventListener("change", function(){
        const prazo = document.querySelector("#prazo").value
        document.querySelector("label[for=prazo]").innerHTML= `Prazo: ${prazo} semanas  `
        atualizarPreco()
    })
    
    
    function atualizarPreco(){
        const qtde = document.querySelector("#qtde").value
        const temjs = document.querySelector("#js").checked
        const incluilay = document.querySelector("#layout-sim").checked
        const prazo = document.querySelector("#prazo").value
        let preco = qtde * 100;
        if (temjs) preco = preco *  1.1
        if (incluilay) preco += 500
        let taxaUrg = 1 - prazo*0.6;
        preco += 1 * taxaUrg
            document.querySelector("#preco").innerHTML= `R$ ${preco.toFixed(2)}`
    }

