import audios from '../../db/audios.js';
import AudioService from '../../services/audio.service.js';
import PlayerMusicItem from '../../components/player-music-item/index.js';

localStorage.setItem(
    'config',
    JSON.stringify({
        repeat: false,
        random: false,
    })
);

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var audio = $('#audio');
var songImg = $('.player__music-img');
var subStatusBtn;
var spinSongImg = songImg.animate(
    [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }],
    {
        duration: 10000,
        iterations: Infinity,
    }
);
spinSongImg.pause();

function formatTime(time) {
    let min = `00`;
    let sec = `00`;
    if (time) {
        min = `${Math.floor(time / 60)}`;
        min = min.length > 1 ? min : `0${min}`;
        sec = `${Math.floor(time % 60)}`;
        sec = sec.length > 1 ? sec : `0${sec}`;
    }

    return `${min}:${sec}`;
}

const app = {
    config: JSON.parse(localStorage.getItem('config')),
    currentIndex: 0,
    wasPlayed: [],
    isPlaying: false,
    songs: audios,

    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem('config', JSON.stringify(this.config));
    },

    activateSong: function () {
        let restSongs = $$('.player__musics-list-item:not(.active)');
        restSongs.forEach(function (song) {
            song.onclick = function () {
                app.currentIndex = Number(song.dataset.id);
                app.loadCurrentSong();
                audio.play();
                app.renderSongs();
            };
        });
    },

    clickSubStatusBtn: function () {
        subStatusBtn.onclick = function () {
            if (!app.isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        };
    },

    renderSongs: function () {
        let songList = this.songs.map(function (e, index) {
            return PlayerMusicItem({ name: e.name, artist: e.artist, index });
        });
        $('.player__musics-list').innerHTML = songList.join('');
        let activeSong = $(
            `.player__musics-list-item:nth-child(${this.currentIndex + 1})`
        );
        activeSong.classList.add('active');
        $('.player__musics-list').scrollTop = 70 * this.currentIndex;
        this.activateSong();
        subStatusBtn = $(
            `.player__musics-list-item:nth-child(${
                app.currentIndex + 1
            }) .player__item-status-btn`
        );
        this.clickSubStatusBtn();
    },

    loadCurrentSong: function () {
        let name = $('.player__music-name p');
        let artist = $('.player__artist-name p');
        let img = $('.player__music-img');
        name.innerHTML = this.songs[this.currentIndex].name;
        artist.innerHTML = this.songs[this.currentIndex].artist;
        img.style.backgroundImage = `url("${
            this.songs[this.currentIndex].img
        }")`;
        audio.src = this.songs[this.currentIndex].path;
    },

    nextSong: function () {
        if (this.config.random) {
            if (this.wasPlayed.length >= this.songs.length) this.wasPlayed = [];
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * this.songs.length);
            } while (
                this.wasPlayed.includes(randomNum) ||
                randomNum === this.currentIndex
            );
            this.currentIndex = randomNum;
            this.wasPlayed.push(randomNum);
        } else {
            this.wasPlayed = [];
            this.currentIndex++;
            if (this.currentIndex >= this.songs.length) this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.renderSongs();
    },

    prevSong: function () {
        if (this.config.random) {
            if (this.wasPlayed.length >= this.songs.length) this.wasPlayed = [];
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * this.songs.length);
            } while (
                this.wasPlayed.includes(randomNum) ||
                randomNum === this.currentIndex
            );
            this.currentIndex = randomNum;
            this.wasPlayed.push(randomNum);
        } else {
            this.currentIndex--;
            if (this.currentIndex < 0)
                this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        this.renderSongs();
    },

    handleEvents: function () {
        // Play / Pause song
        let statusBtn = $('.player__status-btn');
        statusBtn.onclick = function () {
            if (!app.isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        };

        audio.onplay = function () {
            app.isPlaying = true;
            statusBtn.classList.add('pause');
            subStatusBtn.classList.add('pause');
            spinSongImg.play();
        };
        audio.onpause = function () {
            app.isPlaying = false;
            statusBtn.classList.remove('pause');
            subStatusBtn.classList.remove('pause');
            spinSongImg.pause();
        };

        //Change in timeline
        let timeLine = $('.player__time-line');
        let onInputRunning = false;
        audio.ontimeupdate = function () {
            var seek = function () {
                var percent =
                    (100 * (timeLine.value - timeLine.min)) /
                        (timeLine.max - timeLine.min) +
                    '%';
                timeLine.style.backgroundImage = `linear-gradient( to right, ${fillColor} ${percent}, ${emptyColor} 1%)`;
            };
            let proceesPercent =
                Math.floor((this.currentTime / this.duration) * 100) +
                Math.round(
                    ((this.currentTime / this.duration) * 100 -
                        Math.floor((this.currentTime / this.duration) * 100)) *
                        10
                ) /
                    10;
            let currentTime = $('.player__curren-time');
            let audioDuration = $('.player__duration');
            if (onInputRunning) return;
            currentTime.innerHTML = formatTime(this.currentTime);
            audioDuration.innerHTML = formatTime(this.duration);
            if (this.duration) {
                timeLine.value = proceesPercent;
                seek();
            }
        };

        timeLine.onchange = function () {
            audio.currentTime = (this.value / 100) * audio.duration;
        };

        timeLine.oninput = function () {
            onInputRunning = true;
            if (audio.duration) {
                let currentTime = $('.player__curren-time');
                currentTime.innerHTML = formatTime(
                    (this.value / 100) * audio.duration
                );
            }
        };

        timeLine.onmouseup = function () {
            onInputRunning = false;
        };

        // Next song & prev song
        let nextBtn = $('.player__next-btn');
        nextBtn.onclick = function () {
            app.nextSong();
            audio.play();
        };
        let prevBtn = $('.player__prev-btn');
        prevBtn.onclick = function () {
            app.prevSong();
            audio.play();
        };

        // Set Repeat

        let repeatBtn = $('.player__repeat');

        repeatBtn.onclick = function () {
            app.setConfig('repeat', !app.config['repeat']);
            repeatBtn.classList.toggle('active');
        };

        // Set random
        let randomBtn = $('.player__random');

        randomBtn.onclick = function () {
            app.setConfig('random', !app.config['random']);
            randomBtn.classList.toggle('active');
        };

        // Repeat when end the autdio
        audio.onended = function () {
            if (app.config.repeat) audio.play();
            else nextBtn.click();
        };

        // Opcity when scroll

        let openListBtn = $('.player__musics-list-icon');
        openListBtn.onclick = function () {
            let items = $$('.player__musics-list-item');
            items.forEach(function (e) {
                e.style.opacity = '1';
            });
        };

        let musicList = $('.player__musics-list');
        musicList.onscroll = function () {
            let items = $$('.player__musics-list-item');
            items.forEach(function (e) {
                let opacityTop =
                    1 - (270 - e.getBoundingClientRect().top) / e.offsetHeight;
                let opacityBot =
                    (740 - e.getBoundingClientRect().bottom) / e.offsetHeight;
                if (opacityTop <= 1) e.style.opacity = `${opacityTop}`;
                else e.style.opacity = `${opacityBot}`;

                if ($('.player__musics-list').scrollTop === 0)
                    $('.player__musics-list-item.active').style.opacity = '1';
            });
        };
    },

    playOrderSong: function () {
        let params = new URLSearchParams(document.location.search);
        let id = params.get('id');
        if (id) {
            const index = AudioService.getIndexOfAudioById(id);
            this.currentIndex = parseInt(index);
        } else window.location.replace('/');
    },

    returnPrevPage: function () {
        const backBtn = $('.player__musics-back');
        backBtn.onclick = () => {
            history.back();
        };
    },

    start: function () {
        this.playOrderSong();
        this.loadCurrentSong();
        this.renderSongs();
        this.handleEvents();
        this.returnPrevPage();
        audio.play();
    },
};
app.start();
