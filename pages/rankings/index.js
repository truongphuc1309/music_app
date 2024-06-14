import { addContentHeader } from '../../components/content-header/index.js';
import { addFooter } from '../../components/footer/index.js';
import RakingCard from '../../components/ranking-card/index.js';
import ContentComponent from '../../components/content-component/index.js';
import RankingService from '../../services/ranking.service.js';
import { logOut, toggleUserOptions } from '../../utils/logOut.js';
import removeLoading from '../../utils/removeLoading.js';
import {
    backPage,
    forwardPage,
    activePageBtn,
} from '../../utils/controlHistory.js';

const $ = document.querySelector.bind(document);

class App {
    static reder() {
        const list = RankingService.getAllRankings();
        const rankingEles = list
            .map((e, index) => RakingCard({ ...e, index: index + 1 }))
            .join('');
        const contentComponent = ContentComponent({
            title: 'Rankings',
            children: rankingEles,
        });
        const contentMain = $('.content-main');
        contentMain.innerHTML = contentComponent;
    }

    static start() {
        activePageBtn('./pages/rankings/');
        addContentHeader();
        addFooter();
        backPage();
        forwardPage();
        toggleUserOptions();
        logOut();
        this.reder();
        removeLoading();
    }
}

App.start();
