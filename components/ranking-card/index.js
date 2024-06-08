function RankingCard({ index, id, name, artist, album, total, img }) {
    return `<a
                href="/pages/player/?id=${id}"
                class="ranking-card"
            >
                <div class="card-left">
                    <h1 class="card-number">${index}</h1>
                    <img
                        src="${img}"
                        alt=""
                        class="card-img"
                    />
                    <div class="card-infor">
                        <h1 class="card-name">${name}</h1>
                        <h1 class="card-artist">${artist}</h1>
                    </div>
                </div>
                <div class="card-right">
                    <h1 class="card-album">${album}</h1>
                    <p class="total-time">${total}</p>
                </div>
            </a>`;
}

export default RankingCard;
