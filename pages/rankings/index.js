import { addContentHeader } from '../../components/content-header/index.js';
import { addFooter } from '../../components/footer/index.js';
import RakingCard from '../../components/ranking-card/index.js';
import ContentComponent from '../../components/content-component/index.js';
import RankingService from '../../services/ranking.service.js';

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
        addContentHeader();
        addFooter();
        this.reder();
    }
}

App.start();
