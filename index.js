const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class App {
    static expandSideBar() {
        const transformBarBtn = $('.library-transform');
        transformBarBtn.onclick = () => {
            const sideBar = $('.side-bar');
            sideBar.classList.toggle('expand');

            const transformBarIcon = $('.library-transform i');
            transformBarIcon.classList.toggle('fa-arrow-left');
        };
    }
    static start() {
        this.expandSideBar();
    }
}

App.start();
