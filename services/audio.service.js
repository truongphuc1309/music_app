import audios from '../db/audios.js';
class AudioService {
    static getAllAudios() {
        return audios;
    }
    static getAudioInfor(id) {
        const foundAudio = audios.find((audio) => audio.id === id);
        return foundAudio;
    }

    static getAllMusics() {
        return audios.filter((e) => e.type === 'Music');
    }

    static getAllPodcasts() {
        return audios.filter((e) => e.type === 'Podcasts');
    }

    static getIndexOfAudioById(id) {
        for (let key in audios) {
            if (audios[key].id === id) return key;
        }
    }
}

export default AudioService;
