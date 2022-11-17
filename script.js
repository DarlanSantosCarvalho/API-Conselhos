async function aconselhar() {
    const response = await fetch(`https://api.adviceslip.com/advice`)
    console.log(await response.json())
}

function gerarConselho() {
    aconselhar().then(dadosConselho => {
        let conselhoGerado = `<h1> ${dadosConselho.advice} </h1>`
        document.getElementById('conselho').innerHTML = `${conselhoGerado}`
    })
}


aconselhar()

gerarConselho()