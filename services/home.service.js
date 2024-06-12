import home from '../db/home.js';
import AudioService from './audio.service.js';
class HomeService {
    static getAllHomeItems() {
        const list = [];

        for (let key in home) {
            list.push({
                name: home[key].name,
                items: [],
            });
            const items = home[key].items.map((item) =>
                AudioService.getAudioInfor(item)
            );
            list[key].items = items;
        }

        return list;
    }
}

export default HomeService;
