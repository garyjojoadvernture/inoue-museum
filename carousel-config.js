/**
 * 首页轮播图配置
 * Homepage Carousel Configuration
 *
 * 修改此文件即可更新轮播图内容和链接
 * Edit this file to update carousel slides
 */
const carouselConfig = {
    // 自动播放间隔（毫秒）
    autoplayInterval: 5000,

    // 轮播项配置
    slides: [
        {
            image: "images/homepage/carousel/1.jpg",
            link: "goods/slamdunk/slamdunkgoods.html",
            title: {
                zh: "灌篮高手",
                en: "SLAM DUNK",
                ja: "スラムダンク"
            }
        },
        {
            image: "images/homepage/carousel/2.jpg",
            link: "goods/slamdunk/telcard/telcard-gallery.html",
            title: {
                zh: "电话卡",
                en: "Phone Card",
                ja: "テレホンカード"
            }
        }
    ]
};
