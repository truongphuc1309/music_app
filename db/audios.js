const pre = 'https://drive.google.com/thumbnail?id=';

const audios = [
    {
        id: 'a001',
        name: 'Có hẹn với thanh xuân',
        artist: 'Monstar',
        type: 'Music',
        album: 'Over The Moon',
        total: '03:38',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718339640/music_app/image/qfdolwhf2t3qokatq5bq.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343002/music_app/audio/tj1sd7a37ctwo6qiy5ma.mp3',
    },
    {
        id: 'a002',
        name: 'Đoạn Kết Mới',
        artist: 'Hoàng Dũng',
        type: 'Music',
        album: 'Yên',
        total: '04:54',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718340107/music_app/image/dkepy962awh9fjhqu7tq.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343263/music_app/audio/moevlkyxyizscq7csrkh.mp3',
    },
    {
        id: 'a003',
        name: 'Ném câu yêu vào không trung',
        artist: 'Hoàng Dũng',
        type: 'Music',
        album: 'Yên',
        total: '03:56',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718340425/music_app/image/o9ykioaxmj8xfmulcgou.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343420/music_app/audio/u741kudaefrjniye77xj.mp3',
    },
    {
        id: 'a004',
        name: 'Payphone',
        artist: 'Maroon 5',
        type: 'Music',
        album: 'Overexposed',
        total: '03:51',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718340590/music_app/image/oqbybo8sdw73seuaqfg1.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343525/music_app/audio/tusxbo67zmefztbyaven.mp3',
    },
    {
        id: 'a005',
        name: 'Yếu đuối',
        artist: 'Hoàng Dũng',
        album: 'Tình Ca Hoàng Dũng',
        total: '04:00',
        type: 'Music',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/vbmr2cgenusr8m2fgpax.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343937/music_app/audio/t5ujx9fwsr3gm1smo2yc.mp3',
    },
    {
        id: 'a006',
        name: 'Nàng thơ',
        artist: 'Hoàng Dũng',
        album: 'Nàng thơ',
        total: '04:14',
        type: 'Music',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/iwubghdtem0qagjpbtby.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344098/music_app/audio/qzjebwccdspm34lus23v.mp3',
    },
    {
        id: 'a007',
        name: 'Suýt nữa thì',
        artist: 'Andiez',
        type: 'Music',
        album: 'Suýt nữa thì',
        total: '04:46',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342183/music_app/image/jhjdegamhouourotrwsi.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344218/music_app/audio/bhxvwncs6b8ndwjiuzgy.mp3',
    },
    {
        id: 'a008',
        name: 'Muộn rồi mà sao còn',
        artist: 'Sơn Tùng MTP',
        type: 'Music',
        total: '04:36',
        album: 'Muộn rồi mà sao còn',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342185/music_app/image/zxz9euk11hoxxsix4ce9.png`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344324/music_app/audio/jg5qn6b92nwbrxdny871.mp3',
    },
    {
        id: 'a009',
        name: 'Ngày đầu tiên',
        artist: 'Đức Phúc',
        type: 'Music',
        total: '03:33',
        album: 'Ngày đầu tiên',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/kuimakmsu3lbqtnvfr2s.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344446/music_app/audio/qyb7fndpi1cm27yavvdl.mp3',
    },
    {
        id: 'a010',
        name: 'Beautiful In White',
        artist: 'Shane Filan',
        type: 'Music',
        album: 'Beautiful In White',
        total: '03:48',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342185/music_app/image/ozrymgawmbjwuuyd4wut.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344668/music_app/audio/tao3nc0ritz0lwm63xjy.mp3',
    },
    {
        id: 'a011',
        name: 'You raise me up',
        artist: 'Westlife',
        type: 'Music',
        album: 'Face to Face',
        total: '04:02',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/x8bba3jxmdghsoy3g3o7.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344744/music_app/audio/pxcrfwicum0mik9a6edp.mp3',
    },
    {
        id: 'a012',
        name: 'I do',
        artist: '911',
        type: 'Music',
        album: 'I do',
        total: '03:21',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/jjwjuemf330qjhfnn7wg.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344824/music_app/audio/rc37ahzh8echhunl02wl.mp3',
    },
    {
        id: 'a013',
        name: 'Kiss the rain',
        artist: 'Yiruma',
        type: 'Music',
        album: 'Kiss the rain',
        total: '03:52',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342185/music_app/image/la05xze55mgvsprdoyxb.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344928/music_app/audio/ngkhdtvcsar4ljy7yplz.mp3',
    },
    {
        id: 'a014',
        name: 'River flows in you',
        artist: 'Yiruma',
        type: 'Music',
        album: 'River flows in you',
        total: '03:29',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342183/music_app/image/qwush1r145o9idvqpmfw.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344995/music_app/audio/vxsqdtawbpcu0rq5bxar.mp3',
    },
    {
        id: 'a015',
        name: 'Take me to your heart',
        artist: 'Micheal learns to rock',
        album: 'Michael Learns to Rock',
        total: '04:02',
        type: 'Music',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/wjmrjxrmi70pmkzks4cd.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345077/music_app/audio/u75kygppv0jp1t7a7jyr.mp3',
    },
    {
        id: 'a016',
        name: 'Stand by me',
        artist: 'SHINee',
        type: 'Music',
        album: 'Stand by me',
        total: '04:07',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/ytyutyuiv6x6qoumzmgm.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345158/music_app/audio/kj9czt9v5tckcngat6yx.mp3',
    },
    {
        id: 'a017',
        name: 'Cupid',
        artist: 'Fifty Fifty',
        type: 'Music',
        album: 'The Beginning',
        total: '02:55',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342185/music_app/image/bo3cb0afwoqyr0msqdt0.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345329/music_app/audio/sqh8iuxypm3sphgtgt29.mp3',
    },
    {
        id: 'a018',
        name: 'Magnetic',
        artist: 'Illit',
        type: 'Music',
        album: 'Super Real Me',
        total: '03:08',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718339042/music_app/image/gbkjl8itybzlkojupkzv.webp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718338843/music_app/audio/c2iao6hjvnmzmrsgzlon.mp3',
    },
    {
        id: 'a020',
        name: "That's why",
        artist: 'Micheal learns to rock',
        type: 'Music',
        album: ' Played on Pepper',
        total: '04:11',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718342184/music_app/image/phrfe2bcjjopsz6uzlc9.jpg`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717346078/music_app/audio/fproqtxy7zdean9zht7d.mp3',
    },
    {
        id: 'a021',
        name: 'Đừng làm trái tim anh đau',
        artist: 'Sơn Tùng MTP',
        type: 'Music',
        album: 'Đừng làm trái tim anh đau',
        total: '04:39',
        img: `https://i.scdn.co/image/ab67616d0000b273a1bc26cdd8eecd89da3adc39`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718225480/music_app/audio/du6ipshjbc6y07jd2lwp.mp3',
    },
    {
        id: 'a022',
        name: 'Are you following your dream?',
        artist: 'BBC learning English',
        type: 'Podcast',
        total: '04:39',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718344148/music_app/image/l6us5q3eez4x7nlppx8h.webp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718343758/music_app/audio/oiwabgol7v7cl1jtxayx.mp3',
    },
    {
        id: 'a023',
        name: 'The benefits of doing nothing',
        artist: 'BBC learning English',
        type: 'Podcast',
        total: '04:39',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718344549/music_app/image/bma1gz01gk3hz20cc8aq.webp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718346661/music_app/audio/klhhkixvsyqd10bnirhh.mp3',
    },
    {
        id: 'a024',
        name: '5 minutes to start your day right',
        artist: 'BBC learning English',
        type: 'Podcast',
        total: '04:39',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718344588/music_app/image/htaquvpnpnvtbf1q9ndy.webp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718346760/music_app/audio/ttad1mesgxhqna5byzol.mp3',
    },
    {
        id: 'a025',
        name: 'The Danger Of Silence',
        artist: 'TED',
        type: 'Podcast',
        total: '04:39',
        img: `https://res.cloudinary.com/diy8dw4cd/image/upload/v1718344666/music_app/image/ei30a5pi5yrfifygx016.webp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1718346840/music_app/audio/mek32opaw2c3zpim2fsm.mp3',
    },
];

export default audios;
