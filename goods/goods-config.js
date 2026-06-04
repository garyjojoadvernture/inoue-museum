/**
 * 收藏分类配置
 * Goods Category Configuration
 *
 * ============================================================
 *  图片上传位置：images/goods/goodscategory/
 *  配置方法：修改下方 image 字段为图片文件名即可
 * ============================================================
 */
const goodsConfig = {

    // ── 作品分类 ──────────────────────────────────
    works: [
        {
            // 灌篮高手（已配置）
            image: "../images/goods/goodscategory/slamdunk.jpg",   // 图片路径
            link:  "slamdunk/slamdunkgoods.html",               // 点击跳转
            title: {
                zh: "灌篮高手",
                en: "SLAM DUNK",
                ja: "スラムダンク"
            },
            subtitle: "SLAM DUNK"
        },
        {
            // 浪客行 —— 将封面图放入 images/goods/goodscategory/ 目录
            image: "../images/goods/goodscategory/vagabond.jpg",  // ← 改这里
            link:  "#",                                            // ← 有页面后改这里
            title: {
                zh: "浪客行",
                en: "VAGABOND",
                ja: "バガボンド"
            },
            subtitle: "VAGABOND"
        },
        {
            // REAL —— 将封面图放入 images/goods/goodscategory/ 目录
            image: "../images/goods/goodscategory/real.jpg",      // ← 改这里
            link:  "#",
            title: {
                zh: "REAL",
                en: "REAL",
                ja: "リアル"
            },
            subtitle: "REAL"
        },
        {
            // 零秒出手 —— 将封面图放入 images/goods/goodscategory/ 目录
            image: "../images/goods/goodscategory/buzzerbeater.jpg",  // ← 改这里
            link:  "#",
            title: {
                zh: "零秒出手",
                en: "BUZZER BEATER",
                ja: "ブザービーター"
            },
            subtitle: "BUZZER BEATER"
        }
    ],

    // ── 其它收藏分类 ─────────────────────────────
    others: [
        {
            icon:  "📖",
            link:  "#",
            title: {
                zh: "杂志",
                en: "Magazine",
                ja: "雑誌"
            },
            desc: {
                zh: "Magazine & Interviews",
                en: "Magazine & Interviews",
                ja: "雑誌とインタビュー"
            }
        },
        {
            icon:  "💿",
            link:  "#",
            title: {
                zh: "光碟",
                en: "Video",
                ja: "ビデオ"
            },
            desc: {
                zh: "DVD & Blu-ray",
                en: "DVD & Blu-ray",
                ja: "DVD & Blu-ray"
            }
        },
        {
            icon:  "📦",
            link:  "#",
            title: {
                zh: "其它",
                en: "Others",
                ja: "その他"
            },
            desc: {
                zh: "Other Items",
                en: "Other Items",
                ja: "その他のアイテム"
            }
        }
    ]
};
