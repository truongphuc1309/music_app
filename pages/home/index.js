import { addFooter } from '../../components/footer/index.js';
import { addContentHeader } from '../../components/content-header/index.js';
import ContentComponent from '../../components/content-component/index.js';
import ContentCard from '../../components/content-card/index.js';
import HomeService from '../../services/home.service.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderImgs = $$('.slider-img');

class App {
    static activedIndex = 2;

    static loadSlider() {
        try {
            const activedImg = $('.slider-list .active');
            activedImg.classList.remove('active');
        } catch (error) {}

        sliderImgs[this.activedIndex].classList.add('active');

        for (let index in sliderImgs) {
            const priority = Math.abs(index - this.activedIndex);
            try {
                sliderImgs[index].style.zIndex = 99 - priority;
            } catch (error) {}

            if (index < this.activedIndex) {
                sliderImgs[index].style.transform = `translateX(${
                    140 * -priority
                }px) 
                scale(${1 - 0.3 * priority}) perspective(400px) rotateY(40deg)`;
            } else if (index > this.activedIndex) {
                sliderImgs[index].style.transform = `translateX(${
                    140 * priority
                }px)
                scale(${
                    1 - 0.3 * priority
                }) perspective(400px) rotateY(-40deg)`;
            }
        }
    }

    static nextSlide() {
        const nextBtn = $('.next-btn');
        nextBtn.onclick = () => {
            if (this.activedIndex < sliderImgs.length - 1) {
                this.activedIndex++;
                this.loadSlider();
                clearInterval(auto);
                this.autoSlide();
            }
        };
    }

    static prevSlide() {
        const nextBtn = $('.prev-btn');
        nextBtn.onclick = () => {
            if (this.activedIndex > 0) {
                this.activedIndex--;
                this.loadSlider();
                clearInterval(auto);
                this.autoSlide();
            }
        };
    }

    static autoSlide() {
        const nextBtn = $('.next-btn');
        const prevBtn = $('.prev-btn');
        auto = setInterval(() => {
            if (App.activedIndex === 0) autoBtn = nextBtn;
            else if (App.activedIndex === sliderImgs.length - 1)
                autoBtn = prevBtn;
            autoBtn.click();
        }, 5000);
    }

    static render() {
        const homeItems = HomeService.getAllHomeItems();
        console.log('::items::', homeItems);
        try {
            homeItems.forEach((item) => {
                const eles = item.items
                    .map((e) =>
                        ContentCard({
                            title: e.name,
                            subTitle: e.artist,
                            id: e.id,
                            img: e.img,
                        })
                    )
                    .join('');
                const homeComponent = ContentComponent({
                    title: item.name,
                    children: eles,
                });
                const contentMain = $('.content-components');
                contentMain.innerHTML += homeComponent;
            });
        } catch (error) {}
    }

    static start() {
        addContentHeader();
        addFooter();
        this.render();
        this.loadSlider();
        this.nextSlide();
        this.prevSlide();
    }
}

const nextBtn = $('.next-btn');
const prevBtn = $('.prev-btn');
let autoBtn = nextBtn;
let auto = setInterval(() => {
    if (App.activedIndex === 0) autoBtn = nextBtn;
    else if (App.activedIndex === sliderImgs.length - 1) autoBtn = prevBtn;
    autoBtn.click();
}, 5000);

App.start();
