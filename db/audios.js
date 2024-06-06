const pre = 'https://drive.google.com/thumbnail?id=';

const audios = [
    {
        id: 'a001',
        name: 'Có hẹn với thanh xuân',
        artist: 'Monstar',
        type: 'Music',
        img: `${pre}1dQpUyzpDObX1fkerSC2HdwnXWhuw2I4m`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343002/music_app/audio/tj1sd7a37ctwo6qiy5ma.mp3',
    },
    {
        id: 'a002',
        name: 'Đoạn Kết Mới',
        artist: 'Hoàng Dũng',
        type: 'Music',
        img: `${pre}16bQYmjLOYF-lRq7JsMKJMC1gJHgI2tqu`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343263/music_app/audio/moevlkyxyizscq7csrkh.mp3',
    },
    {
        id: 'a003',
        name: 'Ném câu yêu vào không trung',
        artist: 'Hoàng Dũng',
        type: 'Music',
        img: `${pre}1ENbVakf_CUXeAj-9MkhVm64viBSDEMCw`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343420/music_app/audio/u741kudaefrjniye77xj.mp3',
    },
    {
        id: 'a004',
        name: 'Payphone',
        artist: 'Maroon 5',
        type: 'Music',
        img: `${pre}1fhWqB1AsfCTMoSwph0BwdpEuXOSeRuFs`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343525/music_app/audio/tusxbo67zmefztbyaven.mp3',
    },
    {
        id: 'a005',
        name: 'Yếu đuối',
        artist: 'Hoàng Dũng',
        type: 'Music',
        img: `${pre}162AT4IVm1piTE7XryMUrT7kfTaEWq55t`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717343937/music_app/audio/t5ujx9fwsr3gm1smo2yc.mp3',
    },
    {
        id: 'a006',
        name: 'Nàng thơ',
        artist: 'Hoàng Dũng',
        type: 'Music',
        img: `${pre}1Lm2LSai61p3f_3Z6xQIz6PZCDmLOt5rp`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344098/music_app/audio/qzjebwccdspm34lus23v.mp3',
    },
    {
        id: 'a007',
        name: 'Suýt nữa thì',
        artist: 'Andiez',
        type: 'Music',
        img: `${pre}1_-WavjdRAfnnVw2Yd39I4s_56eKnvRwv`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344218/music_app/audio/bhxvwncs6b8ndwjiuzgy.mp3',
    },
    {
        id: 'a008',
        name: 'Muộn rồi mà sao còn',
        artist: 'Sơn Tùng MTP',
        type: 'Music',
        img: `${pre}1d08r5MZQ0uKQQXO0PLY4jVbvusdZjRpl`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344324/music_app/audio/jg5qn6b92nwbrxdny871.mp3',
    },
    {
        id: 'a009',
        name: 'Ngày đầu tiên',
        artist: 'Đức Phúc',
        type: 'Music',
        img: `${pre}1xf9YrYkElkSc8XVsR0QS0DarNTpr2wgm`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344446/music_app/audio/qyb7fndpi1cm27yavvdl.mp3',
    },
    {
        id: 'a010',
        name: 'Beautiful In White',
        artist: 'Shane Filan',
        type: 'Music',
        img: `${pre}12hzSxuFXDvTxtDpbI9jIFBbp1ux1f0aq`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344668/music_app/audio/tao3nc0ritz0lwm63xjy.mp3',
    },
    {
        id: 'a011',
        name: 'You raise me up',
        artist: 'Westlife',
        type: 'Music',
        img: `${pre}1-HZhRgH5bijoMYPj7YzJCyy1FKtVYN7g`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344744/music_app/audio/pxcrfwicum0mik9a6edp.mp3',
    },
    {
        id: 'a012',
        name: 'I do',
        artist: '911',
        type: 'Music',
        img: `${pre}1u9Z5vEubbGHnX-KJwErs__eAvVwJBZ5t`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344824/music_app/audio/rc37ahzh8echhunl02wl.mp3',
    },
    {
        id: 'a013',
        name: 'Kiss the rain',
        artist: 'Yiruma',
        type: 'Music',
        img: `${pre}13qI50RUiOJIIXffOBGdsFE2fMCBPCWBJ`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344928/music_app/audio/ngkhdtvcsar4ljy7yplz.mp3',
    },
    {
        id: 'a014',
        name: 'River flows in you',
        artist: 'Yiruma',
        type: 'Music',
        img: `${pre}1E8Y4MhM6SACS2j84s5xOCl0CC_hCzzoJ`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717344995/music_app/audio/vxsqdtawbpcu0rq5bxar.mp3',
    },
    {
        id: 'a015',
        name: 'Take me to your heart',
        artist: 'Micheal learns to rock',
        type: 'Music',
        img: `${pre}10wYI0DvJTuCjxrVnaDaRmKCE3H_YQNfT`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345077/music_app/audio/u75kygppv0jp1t7a7jyr.mp3',
    },
    {
        id: 'a016',
        name: 'Stand by me',
        artist: 'SHINee',
        type: 'Music',
        img: `${pre}18M7atfTkef7sqmYtv3Z1yvY74U0YVTxF`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345158/music_app/audio/kj9czt9v5tckcngat6yx.mp3',
    },
    {
        id: 'a017',
        name: 'Cupid',
        artist: 'Fifty Fifty',
        type: 'Music',
        img: `${pre}1ovFGSkuRqa2BVkWumKr5rQVQq-nUPMQe`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345329/music_app/audio/sqh8iuxypm3sphgtgt29.mp3',
    },
    {
        id: 'a018',
        name: 'Nàng',
        artist: 'OgeNus',
        type: 'Music',
        img: `${pre}1qIotVaDNf0Z8ywz6y2Z7ThKea1r0IPnU`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345550/music_app/audio/lwwbm4vftrug5mxfc07d.mp3',
    },
    {
        id: 'a019',
        name: 'Bạn đời',
        artist: 'Karik & G-Ducky',
        type: 'Music',
        img: `${pre}1ypu3VkdNYeSdzW6IiSUlHyvJ8bkybEML`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717345913/music_app/audio/u9mtpgpknurws9ocsz0i.mp3',
    },
    {
        id: 'a020',
        name: "That's why",
        artist: 'Micheal learns to rock',
        type: 'Music',
        img: `${pre}180qMHRtvf3hgZuYVojxrvap9WH6YwOJB`,
        path: 'https://res.cloudinary.com/diy8dw4cd/video/upload/v1717346078/music_app/audio/fproqtxy7zdean9zht7d.mp3',
    },
];

export default audios;
