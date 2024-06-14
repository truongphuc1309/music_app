const $ = document.querySelector.bind(document);

const backPage = () => {
    const backBtn = $('.turn-left');
    backBtn.onclick = () => {
        history.back();
    };
};

const forwardPage = () => {
    const backBtn = $('.turn-right');
    backBtn.onclick = () => {
        history.forward();
    };
};

const activePageBtn = (url) => {
    const activedBtn = parent.document.querySelector(
        '.nav-bar-component.active'
    );
    try {
        activedBtn.classList.remove('active');
    } catch (error) {}
    const pageBtn = parent.document.querySelector(
        `.nav-bar-component[href="${url}"]`
    );
    pageBtn.classList.add('active');
};

export { backPage, forwardPage, activePageBtn };
