import ContentComponent from '../../components/content-component/index.js';
import ContentCard from '../../components/content-card/index.js';
import { addFooter } from '../../components/footer/index.js';
import { addContentHeader } from '../../components/content-header/index.js';
import NewFeedService from '../../services/newfeed.service.js';
import AudioService from '../../services/audio.service.js';
import { logOut, toggleUserOptions } from '../../utils/logOut.js';
import removeLoading from '../../utils/removeLoading.js';

import {
    backPage,
    forwardPage,
    activePageBtn,
} from '../../utils/controlHistory.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userId = localStorage.getItem('uid');

class App {
    static renderAll() {
        const newFeed = NewFeedService.getNewFeed(userId);
        const contentMain = $('.content-main');
        contentMain.innerHTML = '';
        newFeed.subjects.forEach((subject) => {
            let itemEles = subject.items.map((e) =>
                ContentCard({
                    title: e.name,
                    subTitle: e.artist,
                    img: e.img,
                    id: e.id,
                })
            );
            itemEles = itemEles.join('');
            const contentComponent = ContentComponent({
                title: subject.name,
                children: itemEles,
            });

            contentMain.innerHTML += contentComponent;
        });
        removeLoading();
    }

    static rederMusic() {
        const musics = AudioService.getAllMusics();
        let musicEles = musics.map((e) =>
            ContentCard({
                title: e.name,
                subTitle: e.artist,
                img: e.img,
                id: e.id,
            })
        );

        musicEles = musicEles.join('');
        const contentComponent = ContentComponent({
            title: 'Music',
            children: musicEles,
        });

        const contentMain = $('.content-main');
        contentMain.innerHTML = contentComponent;

        removeLoading();
    }

    static rederPodcast() {
        const podcasts = AudioService.getAllPodcasts();
        let podcastEles = podcasts.map((e) =>
            ContentCard({
                title: e.name,
                subTitle: e.artist,
                img: e.img,
                id: e.id,
            })
        );

        podcastEles = podcastEles.join('');
        const contentComponent = ContentComponent({
            title: 'Podcast',
            children: podcastEles,
        });

        const contentMain = $('.content-main');
        contentMain.innerHTML = contentComponent;

        removeLoading();
    }

    static switchFilter() {
        const switchBtn = $$('.filter>.component');
        const allBtn = $('.all');
        const musicBtn = $('.music');
        const podcastsBtn = $('.podcasts');

        switchBtn.forEach((ele) => {
            ele.addEventListener('click', (e) => {
                const activedBtn = $('.filter .active');
                if (activedBtn) activedBtn.classList.remove('active');
                e.target.classList.add('active');
            });
        });

        allBtn.addEventListener('click', this.renderAll);
        musicBtn.addEventListener('click', this.rederMusic);
        podcastsBtn.addEventListener('click', this.rederPodcast);
    }

    static start() {
        activePageBtn('./pages/explore/');
        addContentHeader();
        addFooter();
        backPage();
        forwardPage();
        this.renderAll();
        this.switchFilter();
        toggleUserOptions();
        logOut();
    }
}

App.start();
