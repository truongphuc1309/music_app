function PlayerMusicItem({ index, name, artist }) {
    return `
            <div class="player__musics-list-item" data-id = "${index}">
                <button class="player__item-status-btn player-btn">
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-pause"></i>
                </button>
                <div class="player__item-music-infor">
                    <div class="player__item-music-name">
                        <p>${name}</p>
                    </div>
                    <div class="player__item-artist-name">
                        <p>${artist}</p>
                    </div>
                </div>
            </div>`;
}

export default PlayerMusicItem;
