function ContentCard({ title, subTitle, img, id }) {
    return `<a href = "/pages/player/?id=${id}"class="content-card">
                <img loading = "lazy" src="${img}" alt="" class="card-img">
                <h1 class="card-title">${title}</h1>
                <h3 class="card-sub-title">${subTitle}</h3>
                <button class = "play-btn align-center"><i class="fa-solid fa-play"></i></button>
            </a>`;
}

export default ContentCard;
