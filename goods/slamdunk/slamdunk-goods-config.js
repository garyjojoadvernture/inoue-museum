/**
 * SLAM DUNK 收藏分类配置
 * SlamDunk Goods Category Configuration
 *
 * ============================================================
 *  图片上传位置：images/goods/slamdunk/ 对应子目录
 *  配置方法：修改下方 cover 字段为封面图路径即可
 * ============================================================
 */
const slamdunkGoodsConfig = {
    categories: [
        {
            key:   "cards",
            cover: "../../../images/goods/slamdunk/card/cardseries/1997-cardass-masters.png",
            link:  "card/series-browser.html",
            title: {
                zh: "卡牌",
                en: "Cards",
                ja: "カード"
            },
            subtitle: "Cards"
        },
        {
            key:   "telcard",
            cover: "../../../images/goods/slamdunk/telcard/10003 (13).jpg",
            link:  "telcard/telcard-gallery.html",
            title: {
                zh: "电话卡",
                en: "Phone Cards",
                ja: "テレホンカード"
            },
            subtitle: "Phone Cards"
        },
        {
            key:   "figures",
            cover: "",
            link:  "#",
            title: {
                zh: "手办",
                en: "Figures",
                ja: "フィギュア"
            },
            subtitle: "Figures"
        },
        {
            key:   "jump-magazine",
            cover: "",
            link:  "#",
            title: {
                zh: "JUMP杂志",
                en: "JUMP Magazine",
                ja: "ジャンプ雑誌"
            },
            subtitle: "JUMP Magazine"
        },
        {
            key:   "volumes",
            cover: "",
            link:  "#",
            title: {
                zh: "单行本",
                en: "Volumes",
                ja: "単行本"
            },
            subtitle: "Volumes"
        },
        {
            key:   "tfsd",
            cover: "",
            link:  "#",
            title: {
                zh: "TFSD大电影周边",
                en: "The First Slam Dunk",
                ja: "THE FIRST SLAM DUNK"
            },
            subtitle: "The First Slam Dunk"
        },
        {
            key:   "jump-goods",
            cover: "",
            link:  "#",
            title: {
                zh: "JUMP周边",
                en: "JUMP Goods",
                ja: "ジャンプグッズ"
            },
            subtitle: "JUMP Goods"
        },
        {
            key:   "toei",
            cover: "",
            link:  "#",
            title: {
                zh: "东映动画周边",
                en: "Toei Animation",
                ja: "東映アニメーション"
            },
            subtitle: "Toei Animation"
        }
    ]
};
