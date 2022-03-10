const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [ {
    name: "13",
    image: "img-1",
    artist : "Dhanordhar",
    title : "Karan"

},
{
    name: "14",
    image: "img-2",
    artist : "GOD",
    title : "Krishna"

},
{
    name: "15",
    image: "img-3",
    artist : "veer",
    title : "Abhimanyu"

},
{
    name: "16",
    image: "img-5",
    artist : "Maharathi",
    title : "Bhisma"

}]
let isPlaying



// for play 
const playMusic =  () => {
    isPlaying = true;
    music.play();
    play.classList.replace( 'fa-play' , 'fa-pause' )
}

// for pause 
const pauseMusic =  () => {
    isPlaying = false;
   music.pause();
   play.classList.replace('fa-pause' , 'fa-play')
}

play.addEventListener('click' , () =>
{
    isPlaying ? pauseMusic(): playMusic();
})

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src =  "songs/"+songs.name+".mp3"; 
    img.src = "images/"+songs.image+".jpg";
};


songIndex = 0;
const nextSong =()=>{
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
     playMusic();
};
const prevSong =()=>{
    songIndex = (songIndex - 1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
next.addEventListener("click" , nextSong);
prev.addEventListener("click" , prevSong);