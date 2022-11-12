export default function Sounds({

}) {

    const audioFloresta = new Audio('./sounds/Floresta.mp3')
    const audioChuva = new Audio('./sounds/Chuva.mp3')
    const audioCafeteria = new Audio('./sounds/Cafeteria.mp3')
    const audioLareira = new Audio('./sounds/Lareira.mp3')

    const VolumeFloresta = document.querySelector(".volume-floresta");
    const VolumeChuva = document.querySelector(".volume-chuva");
    const VolumeCafeteria = document.querySelector(".volume-cafeteria");
    const VolumeLareira = document.querySelector(".volume-lareira");
  

    function soundFloresta() {
        audioChuva.pause()
        audioCafeteria.pause()
        audioLareira.pause()
        audioFloresta.loop = true

        if (audioFloresta.paused) {
            audioFloresta.play();

        } else {
            audioFloresta.pause();
        }
        volumeFloresta()
    }

    function soundChuva() {
        audioFloresta.pause()
        audioCafeteria.pause()
        audioLareira.pause()
        audioChuva.loop = true

        if (audioChuva.paused) {
            audioChuva.play();

        } else {
            audioChuva.pause();
        }
    }
    function soundCafeteria() {
        audioFloresta.pause()
        audioChuva.pause()
        audioLareira.pause()
        audioCafeteria.loop = true

        if (audioCafeteria.paused) {
            audioCafeteria.play();

        } else {
            audioCafeteria.pause();

        }
    }
    function soundLareira() {
        audioFloresta.pause()
        audioChuva.pause()
        audioCafeteria.pause()
        audioLareira.loop = true

        if (audioLareira.paused) {
            audioLareira.play();

        } else {
            audioLareira.pause();

        }

    }

    function volumeFloresta() {
        VolumeFloresta.addEventListener('change', () => {
            audioFloresta.volume = VolumeFloresta.value
        })
    }

    VolumeCafeteria.addEventListener('change', function () {
        audioCafeteria.volume = VolumeCafeteria.value
    })
    VolumeChuva.addEventListener('change', function () {
        audioChuva.volume = VolumeChuva.value
    })
    VolumeLareira.addEventListener('change', function () {
        audioLareira.volume = VolumeLareira.value
    })

    return {
        soundFloresta,
        soundChuva,
        soundCafeteria,
        soundLareira
    }
}

