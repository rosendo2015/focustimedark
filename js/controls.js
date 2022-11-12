
export default function Controls({
    buttonStop,
    buttonPause,
    buttonPlay,      

}){

    function resetControls() {
        buttonStop.classList.add('active')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('active')
        buttonPlay.classList.remove('hide')
                     
        return
    }

return {
    resetControls
}

}