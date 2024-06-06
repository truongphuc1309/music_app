function ContentComponent({ title = '', children }) {
    return `<div class="content-component" name="${title}" >
               <h1 class="content-title">${title}</h1>
               <div class="content-items">${children}</div>
            </div>`;
}

export default ContentComponent;
