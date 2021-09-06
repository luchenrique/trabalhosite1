function mp(){
    let frete = Number(document.getElementById("frete").value)
    let pbike = Number(document.getElementById("pbike").value)
    let media = frete + pbike
    document.getElementById("resultado").innerHTML = media.toFixed(2)
}