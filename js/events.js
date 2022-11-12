import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlusFive,
    buttonMinusFive,
    buttonFloresta,
    buttonNuvem,
    buttonCafe,
    buttonFogo,
    buttonSun,
    buttonMoon,
    buttonBtn,
    body,
    audioFloresta,
    audioChuva,
    audioCafeteria,
    audioLareira

} from "./elements.js"

export function Events({
    controls, timer, sounds
}) {
    
    buttonPlay.addEventListener('click', function () {
        buttonPlay.classList.add('active')
        buttonPause.classList.add('active')
        buttonStop.classList.remove('active')
        buttonPlusFive.classList.remove('active')
        buttonMinusFive.classList.remove('active')
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.downTime()
    })
    buttonPause.addEventListener('click', function () {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPause.classList.add('active')
        timer.houd()
    })
    buttonStop.addEventListener('click', function () {
        
        timer.updateTimerDisplay(0, 0)
        controls.resetControls()
        timer.houd()
        timer.resetTimer()

    })
    buttonPlusFive.addEventListener('click', function () {
        timer.plusTime()
        buttonPlusFive.classList.add('active')
        buttonMinusFive.classList.remove('active')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    })
    buttonMinusFive.addEventListener('click', function () {
        timer.minusTime()
        buttonPlusFive.classList.remove('active')
        buttonMinusFive.classList.add('active')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    })

    buttonFloresta.addEventListener('click', function () {
        

        buttonFloresta.classList.toggle('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.remove('active')
        sounds.soundFloresta()

    })
    buttonNuvem.addEventListener('click', function () {
       

        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.toggle('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.remove('active')
        sounds.soundChuva()
       
    })
    buttonCafe.addEventListener('click', function () {
       

        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.toggle('active')
        buttonFogo.classList.remove('active')
        sounds.soundCafeteria()
    })
    buttonFogo.addEventListener('click', function () {
        

        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.toggle('active')

        sounds.soundLareira()
    })
    function Dark() {
        body.classList.add('dark')
        console.log('Dark')
        buttonPlay.addEventListener('click', function () {
        })
    }
    function Ligth() {
        body.classList.remove('dark')
        console.log('Light')
    }

    buttonSun.addEventListener('click', function () {
        buttonSun.classList.add('hide')
        buttonMoon.classList.remove('hide')
        Dark()
    })
    buttonMoon.addEventListener('click', function () {
        buttonMoon.classList.add('hide')
        buttonSun.classList.remove('hide')
        Ligth()
    })
   
}