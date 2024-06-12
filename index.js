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

    static switchPage() {
        const switchPageBtns = $$('.nav-bar-component');
        switchPageBtns.forEach((element) => {
            element.onclick = (event) => {
                const activedBtn = $('.nav-bar-component.active');
                activedBtn.classList.remove('active');
                event.target.classList.add('active');
            };
        });
    }
    static start() {
        this.expandSideBar();
        this.switchPage();
    }
}

App.start();
