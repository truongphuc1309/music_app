import newfeed from '../db/newfeed.js';
import AudioService from './audio.service.js';

class NewFeedService {
    static getNewFeed(userId) {
        const foundNewFeed = newfeed.find((e) => e.uid === userId);
        const altNewFeed = {
            uid: userId,
            subjects: [],
        };

        for (let key in foundNewFeed.subjects) {
            altNewFeed.subjects.push({
                name: foundNewFeed.subjects[key].name,
                items: [],
            });
            const items = foundNewFeed.subjects[key].items.map((item) =>
                AudioService.getAudioInfor(item)
            );
            altNewFeed.subjects[key].items = items;
        }

        return altNewFeed;
    }
}

export default NewFeedService;
