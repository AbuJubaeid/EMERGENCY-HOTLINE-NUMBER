function incrementalHeart(id){
    document.getElementById(id).addEventListener("click", function(){
    let heartNumber = parseInt(document.getElementById("heart-number").innerText)
    const heartNumberValue = heartNumber + 1
    document.getElementById("heart-number").innerText = heartNumberValue

    return
})
}

incrementalHeart("heart")
incrementalHeart("ambulance")
incrementalHeart("electricity")
incrementalHeart("police")
incrementalHeart("women-child")
incrementalHeart("brac")
incrementalHeart("fire")
incrementalHeart("anti-corruption")
incrementalHeart("railway")


