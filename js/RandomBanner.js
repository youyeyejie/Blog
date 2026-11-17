const imgs = [
    CONFIG.root + 'img/banner/banner.webp',
    CONFIG.root + 'img/banner/banner1.webp',
    CONFIG.root + 'img/banner/banner2.webp',
    CONFIG.root + 'img/banner/banner3.webp',
    CONFIG.root + 'img/banner/banner4.webp',
    // CONFIG.root + 'img/banner/banner5.webp',
    CONFIG.root + 'img/banner/banner6.webp',
    // CONFIG.root + 'img/banner/banner7.webp',
    CONFIG.root + 'img/banner/banner8.webp',
    CONFIG.root + 'img/banner/banner9.webp',
    CONFIG.root + 'img/banner/banner10.webp',
    CONFIG.root + 'img/banner/banner11.webp',
    CONFIG.root + 'img/banner/banner12.webp',
    CONFIG.root + 'img/banner/banner13.webp',
    CONFIG.root + 'img/banner/banner14.webp',
    CONFIG.root + 'img/banner/banner15.webp',
]

const random_banner = imgs[Math.floor(Math.random() * imgs.length)];
const banner = document.getElementById('banner');
if (banner) {
    const metaOgType = document.querySelector('meta[property="og:type"]');
    console.log(" metaOgType.content: ", metaOgType ? metaOgType.content : "not found");
    if (metaOgType && metaOgType.content === "article") {
        const background = banner.style.background;
        if (background.includes(CONFIG.root + 'img/banner/random.webp')) {
            banner.style.background = `url(${random_banner}) center center / cover no-repeat`;
        }
    }
    const metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (metaOgUrl && metaOgUrl.content.includes("DayDream-Gallery")) {
        banner.style.background = `url(${CONFIG.root + 'img/banner/banner4.webp'}) center center / cover no-repeat`;
    }
}