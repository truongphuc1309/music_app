import { addFooter } from '../../components/footer/index.js';
import { addContentHeader } from '../../components/content-header/index.js';
import CategoryCard from '../../components/category-card/index.js';
import ContentComponent from '../../components/content-component/index.js';
import CategoryService from '../../services/category.service.js';
import { logOut, toggleUserOptions } from '../../utils/logOut.js';
import removeLoading from '../../utils/removeLoading.js';
import {
    activePageBtn,
    forwardPage,
    backPage,
} from '../../utils/controlHistory.js';

const $ = document.querySelector.bind(document);

class App {
    static render() {
        const categories = CategoryService.getAllCategories();
        const categoryEles = categories
            .map((e) =>
                CategoryCard({
                    title: e.tiltle,
                    img: e.img,
                    background: e.background,
                })
            )
            .join('');
        const contentComponentEle = ContentComponent({
            title: 'Browse All',
            children: categoryEles,
        });

        const contentMain = $('.content-main');
        contentMain.innerHTML = contentComponentEle;
    }
    static start() {
        activePageBtn('./pages/search/');
        addContentHeader();
        addFooter();
        forwardPage();
        backPage();
        toggleUserOptions();
        logOut();
        this.render();
        removeLoading();
    }
}
App.start();
