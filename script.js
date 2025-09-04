// heart button
function incrementalHeart(id){
    document.getElementById(id).addEventListener("click", function(){
    let heartNumber = parseInt(document.getElementById("heart-number").innerText)
    const heartNumberValue = heartNumber + 1
    document.getElementById("heart-number").innerText = heartNumberValue

})
return
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



// call button
function calling(x,y,z){
    document.getElementById(x).addEventListener("click", function(){
            const callArea = document.getElementById(y).innerText
    const callNumber = document.getElementById(z).innerText
    
    const coinValue = parseInt(document.getElementById("call-coin").innerText)

    const remainingCoinValue = coinValue - 20
    if(remainingCoinValue < 20){
        alert("Don't have sufficient coin to call")
        return
    }
    alert(`calling ${callArea} : ${callNumber}`)
    document.getElementById("call-coin").innerText = remainingCoinValue
    return
})
return
}


    
calling("nationalCall-btn","calling-nationalEmergency", "calling-nationalEmergencyNumber")
calling("ambulanceCall-btn","calling-ambulance", "calling-ambulanceNumber")
calling("electricityCall-btn","calling-electricity", "calling-electricityNumber")
calling("police-btn","calling-police", "calling-policeNumber")
calling("womenChildCall-btn","calling-womenAndChild", "calling-womenAndChildNumber")
calling("bracCall-btn","calling-brac", "calling-bracNumber")
calling("FireServiceCall-btn","calling-fireService", "calling-fireServiceNumber")
calling("antiCorruptionCall-btn","calling-antiCorruption", "calling-antiCorruptionNumber")
calling("railwayCall-btn","calling-railway", "railwayNumber")


// copy number
function copingText(x,y){
    document.getElementById(x).addEventListener("click", function(){
const copyNumber = parseInt(document.getElementById("copyValue").innerText)
const copyNumberValue = copyNumber + 1
document.getElementById("copyValue").innerText = copyNumberValue

const textToBeCoppied = document.getElementById(y);

  const textToCopy = textToBeCoppied.textContent;
  alert("text copied")

  navigator.clipboard.writeText(textToCopy)

return
})
return
}

copingText("nationalCopyBtn", "calling-nationalEmergencyNumber")
copingText("ambulanceCopyBtn", "calling-ambulanceNumber")
copingText("electricityCopyBtn", "calling-electricityNumber")
copingText("policeCopyBtn", "calling-policeNumber")
copingText("womenChildCopyBtn", "calling-womenAndChildNumber")
copingText("bracCopyBtn", "calling-bracNumber")
copingText("antiCorruptionCopyBtn", "calling-antiCorruptionNumber")
copingText("railwayCopyBtn", "calling-railwayNumber")



// document.getElementById("nationalCopyBtn").addEventListener("click", function(){
// const copyNumber = parseInt(document.getElementById("copyValue").innerText)
// const copyNumberValue = copyNumber + 1
// document.getElementById("copyValue").innerText = copyNumberValue

// const textToBeCoppied = document.getElementById("calling-nationalEmergencyNumber");

//   const textToCopy = textToBeCoppied.textContent;
//   alert("text copied")

//   navigator.clipboard.writeText(textToCopy)

// return
// })



