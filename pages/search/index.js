import { addFooter } from '../../components/footer/index.js';
import { addContentHeader } from '../../components/content-header/index.js';
import CategoryCard from '../../components/category-card/index.js';
import ContentComponent from '../../components/content-component/index.js';
import CategoryService from '../../services/category.service.js';

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
        addContentHeader();
        addFooter();
        this.render();
    }
}
App.start();
