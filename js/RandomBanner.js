const imgs = [
    "/Blog/img/banner/banner.webp",
    "/Blog/img/banner/banner1.webp",
    "/Blog/img/banner/banner2.webp",
    "/Blog/img/banner/banner3.webp",
    "/Blog/img/banner/banner4.webp",
    // "/Blog/img/banner/banner5.webp",
    "/Blog/img/banner/banner6.webp",
    // "/Blog/img/banner/banner7.webp",
    "/Blog/img/banner/banner8.webp",
    "/Blog/img/banner/banner9.webp",
    "/Blog/img/banner/banner10.webp",
    "/Blog/img/banner/banner11.webp",
    "/Blog/img/banner/banner12.webp",
    "/Blog/img/banner/banner13.webp",
    "/Blog/img/banner/banner14.webp",
    "/Blog/img/banner/banner15.webp",
]

const random_banner = imgs[Math.floor(Math.random() * imgs.length)];
const banner = document.getElementById('banner');
if (banner) {
    const metaOgType = document.querySelector('meta[property="og:type"]');
    console.log(" metaOgType.content: ", metaOgType ? metaOgType.content : "not found");
    if (metaOgType && metaOgType.content === "article") {
        const background = banner.style.background;
        if (background.includes("/Blog/img/banner/random.webp")) {
            banner.style.background = `url(${random_banner}) center center / cover no-repeat`;
        }
    }
    const metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (metaOgUrl && metaOgUrl.content.includes("DayDream-Gallery")) {
        banner.style.background ='url("/Blog/img/banner/banner4.webp") center center / cover no-repeat';
    }
}