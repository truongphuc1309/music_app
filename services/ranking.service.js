import rankings from '../db/rankings.js';
import audios from '../db/audios.js';

class RankingService {
    static getAllRankings() {
        let list = rankings.map((e) => audios.find((audio) => audio.id === e));

        return list;
    }
}

export default RankingService;
