// time-line
var fillColor = 'var(--third)';
var emptyColor = '#c4dbed';
var timeLine = document.querySelector('.player__time-line');
var seek = function () {
    var percent =
        (100 * (timeLine.value - timeLine.min)) /
            (timeLine.max - timeLine.min) +
        '%';
    timeLine.style.backgroundImage = `linear-gradient( to right, ${fillColor} ${percent}, ${emptyColor} 1%)`;
};

timeLine.addEventListener('input', function () {
    seek();
});

// Open and Close Music List
var musicListBtn = document.querySelector('.player__musics-list-icon');
var isMusicListOpend = false;

musicListBtn.addEventListener('click', () => {
    if (isMusicListOpend === false) {
        document.querySelector('.player__player-title').style.opacity = '0';
        document.querySelector('.player__player-title').style.transitionDelay =
            'initial';
        document.querySelector('.player__player-top').style.backgroundColor =
            'var(--primary)';
        document.querySelector('.player__music-img-wrapper').style.transform =
            'translateY(-180px) scale(0.7)';
        isMusicListOpend = true;
    } else {
        document.querySelector('.player__player-title').style.transitionDelay =
            '0.4s';
        document.querySelector('.player__player-title').style.opacity = '1';
        document.querySelector('.player__music-img-wrapper').style.transform =
            'translateY(0)';
        document.querySelector('.player__player-top').style.backgroundColor =
            'var(--subject-color)';
        isMusicListOpend = false;
    }
});
