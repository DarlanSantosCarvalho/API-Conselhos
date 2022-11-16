async function aconselhar(){
    const response = await fetch(`https://api.adviceslip.com/advice`)
    return await response.json()
}

console.log(await aconselhar())
