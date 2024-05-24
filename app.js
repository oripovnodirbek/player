const audioall = document.getElementById('audio') // music 
const coverall = document.getElementById('cover') // image
const textall  = document.getElementById('text') // text
const bloced = document.getElementById('music-bloc') // container
const volumeall = document.getElementById('volume')
const volumeValue = document.getElementById('volume-value')
const nextedall = document.getElementById('nexted')
const nextedchild = document.getElementById('nexted-child')

const backBtn = document.getElementById('back')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

audioall.volume = 0.5;
volumeValue.textContent = 50;

const musicall = ['Miyagi-Minor', 'Miyagi-Patron', 'Miyagi-Utopia'];

let pozsong = 0;
const elements = (song) => {
      coverall.src = `./images/${song}.jpg`
      audioall.src = `./music/${song}.mp3`
      textall.textContent = song;
}

const playMusic = () => {
    bloced.classList.add('play')
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    audioall.play()
}

const pauseMusic = () => {
    bloced.classList.remove('play')
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    audioall.pause()
}




const play = () => {
    const state = bloced.classList.contains('play')

    if(state) {
        pauseMusic()
    } else {
        playMusic()
    }
}

const next = () => {
    if(pozsong >= musicall.length -1) {
        pozsong = 0;
    } else {
        pozsong++
    }
    elements(musicall[pozsong])
    playMusic()
}

const backs = () => {
    if(pozsong == 0) {
        pozsong = musicall.length -1;
    } else {
        pozsong--;
    }
    elements(musicall[pozsong])
    playMusic()
}

const changeVolume = () => {
    audioall.volume = volumeall.value / 100;
    volumeValue.textContent = volumeall.value;
}

const progress = (e) => {
     let curtime = e.target.curtime;
     let duretion = e.target.duration;
     nextedchild.style.width = `${(curtime / duretion) * 100}%`

}

playBtn.addEventListener('click', play)
nextBtn.addEventListener('click', next)
backBtn.addEventListener('click', backs)
volumeall.addEventListener('input', changeVolume)
audioall.addEventListener('timeupdate', progress)