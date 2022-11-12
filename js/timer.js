
export default function Timer({
    
    audioFloresta,    
    audioChuva,
    audioCafeteria,
    audioLareira,
    kitchenTimer,
    displayMinutes,
    displaySeconds,
    minutes,   
    resetControls,   
    
}){
    
let outTimer    
minutes = Number(displayMinutes.textContent)

// function timeEnd() {
    
//          audioFloresta.pause()
//         audioChuva.pause()
//         audioCafeteria.pause()
//         audioLareira.pause()
//         kitchenTimer.play()
//     }
    
function plusTime() {
    clearTimeout(outTimer)
    displayMinutes.textContent = String(Number(displayMinutes.textContent) + 5).padStart(2, '0')
}
function minusTime() {
    houd()
    displayMinutes.textContent = String(Number(displayMinutes.textContent) - 5).padStart(2, '0')
    if (displayMinutes.textContent <= 0) {
        updateTimerDisplay(0, 0)
        resetControls()
    }
}
function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(outTimer)
}
function downTime() {    
    outTimer = setTimeout(function () {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)
        
        if (minutes <= 0 && seconds <= 0) {
            // timeEnd()
            resetControls()
            return
        }
        if (seconds <= 0) {
            seconds = 60
            minutes = minutes - 1
            if (minutes <= 0) {
                updateTimerDisplay(0, String(seconds - 1))
            }
        }
        updateTimerDisplay(minutes, String(seconds - 1))
        downTime()
    }, 1000)
    
}
function houd(){
    clearTimeout(outTimer)
   
    
}

/*******************/
return {
    // timeEnd, 
    plusTime,
    minusTime,
    updateTimerDisplay,
    resetTimer, 
    downTime,
    houd
   
}

}

    