document.querySelector('.gerar-conselho').addEventListener('click', function(){
    gerarConselho()
})


async function aconselhar() {
    const response = await fetch(`https://api.adviceslip.com/advice`)
    return await response.json()
}

function gerarConselho() {
    aconselhar().then(dadosConselho => {
        let conselhoGerado = `<p> Advice #${dadosConselho.slip.id} </p>
        <h1> ${dadosConselho.slip.advice} </h1>`
        document.querySelector('.conselho').innerHTML = `${conselhoGerado}`
    })
}

gerarConselho()



