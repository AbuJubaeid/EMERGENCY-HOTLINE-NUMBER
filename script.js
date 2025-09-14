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
const callHistory = []
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
    alert(`Calling ${callArea} : ${callNumber}`)
    document.getElementById("call-coin").innerText = remainingCoinValue

    const data = {
        name: callArea,
        number: callNumber,
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data)
    

    const historyContainer = document.getElementById("callHistorySection")
    
    historyContainer.innerText = ""
    for(const history of callHistory){
        console.log(history)
        
        const div = document.createElement("div")

        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#eeeeee] mt-3 px-5 py-2 rounded-xl">
          <div>
            <h2
              class="text-xl font-semibold mt-2 font-[hind-madurai-regular]">
               ${history.name}
            </h2>
            <h3>${history.number}</h3>
          </div>
          <p>${history.date}</p>
        </div>
        `
        historyContainer.appendChild(div)
        
    }
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


// clear button
document.getElementById("clearBtn").addEventListener("click", function(){
    const callHistoryContainer = document.getElementById("callHistorySection")

    callHistoryContainer.innerHTML = ""
})


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
copingText("fireCopyBtn", "calling-fireServiceNumber")
copingText("antiCorruptionCopyBtn", "calling-antiCorruptionNumber")
copingText("railwayCopyBtn", "calling-railwayNumber")


