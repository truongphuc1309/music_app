function CategoryCard({ title, background, img }) {
    return `
        <div class="category-card loadingLR" style="background-color: ${background}">
            <h1 class="category-title">${title}</h1>
            <img
                src="${img}"
                class="category-img"
                alt=""
            />
        </div>`;
}

export default CategoryCard;
