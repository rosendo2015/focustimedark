import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { Events } from "./events.js"
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
    audioFloresta,
    audioChuva,
    audioCafeteria,
    audioLareira,
    kitchenTimer,
    displayMinutes,
    displaySeconds,
    buttonSun,
    buttonMoon,
    body,
    
} from "./elements.js"

const controls = Controls({
    buttonStop,
    buttonPause,
    buttonPlay,
    buttonFloresta,
    buttonNuvem,
    buttonCafe,
    buttonFogo,
    audioChuva,
    audioCafeteria,
    audioLareira,
    audioFloresta
})
const timer = Timer({
    audioFloresta,
    audioChuva,
    audioCafeteria,
    audioLareira,
    kitchenTimer,
    displayMinutes,
    displaySeconds,
    clearTimeout,
    resetControls: controls.resetControls
})
const sounds = Sounds({
    audioChuva,
    audioCafeteria,
    audioLareira,
    audioFloresta
})

const events = Events({
    timer, controls, sounds
})

