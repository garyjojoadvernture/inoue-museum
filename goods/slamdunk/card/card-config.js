// 卡片系列配置数据
const CARD_CONFIGS = {
    '1997CardassMasters': {
        title: 'SLAMDUNK 1997 Cardass Masters',
        description: {
            zh: '1997年发行的SLAMDUNK卡牌大师系列，收录了原作中的精彩场景和角色，是粉丝收藏的经典之作。',
            en: '1997 SLAMDUNK Cardass Masters series, featuring exciting scenes and characters from original work, a classic for fan collection.',
            ja: '1997年発行のSLAMDUNKカードダスマスターシリーズ、原作の素晴らしいシーンとキャラクターを収録し、ファンコレクションのクラシックです。'
        },
        imagePath: '../../../images/goods/slamdunk/card/1997CardassMasters/',
        defaultImage: 'default.png',
        totalCards: 140,
        cardsPerPage: 36,
        cardNumbers: (() => {
            const normal = [];
            for (let i = 1; i <= 135; i++) normal.push(i);
            return [...normal, 'SP1', 'SP2', 'SP3', 'SP4', 'SP5'];
        })()
    },
    'seriesB': {
        title: 'SLAMDUNK Series B',
        description: {
            zh: 'SLAMDUNK Series B卡片系列，精选了动画中的精彩片段和热门角色。',
            en: 'SLAMDUNK Series B card collection, featuring exciting moments and popular characters from the anime.',
            ja: 'SLAMDUNK Bシリーズカード、アニメのエキサイティングな瞬間と人気キャラクターを厳選。'
        },
        imagePath: '../../../images/goods/slamdunk/card/seriesB/',
        defaultImage: 'default.png',
        totalCards: 0,
        cardsPerPage: 36
    },
    '1994CardassSlamDunk': {
        title: 'SLAMDUNK 1994 Cardass',
        description: {
            zh: '1994年发行的万代卡牌系列，以激斗为主题，收录了经典的战斗场景。',
            en: '1994 Bandai card series with battle theme, featuring classic fighting scenes.',
            ja: '1994年バンダイカードシリーズ、バトルをテーマに、クラシックな戦闘シーンを収録。'
        },
        imagePath: '../../../images/goods/slamdunk/card/1994CardassSlamDunk/',
        defaultImage: 'default.png',
        totalCards: 12,
        cardsPerPage: 36,
        cardNumbers: [1, 2, 5, 6, 8, 9, 11, 31, 33, 88, 115, 116]
    },
    'ppcard': {
        title: 'SLAMDUNK PP卡',
        description: {
            zh: 'AMADA发行的PP卡系列，收录了精美的角色插画和特别场景。',
            en: 'AMADA PP card series, featuring beautiful character illustrations and special scenes.',
            ja: 'AMADA発行のPPカードシリーズ、美しいキャラクターイラストと特別なシーンを収録。'
        },
        imagePath: '../../../images/goods/slamdunk/card/ppcard/',
        defaultImage: 'default.png',
        totalCards: 0,
        cardsPerPage: 36
    }
};

// 当前使用的配置系列（从URL参数获取）
const getCardSeries = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const series = urlParams.get('series') || '1997CardassMasters';
    return CARD_CONFIGS[series] || CARD_CONFIGS['1997CardassMasters'];
};

// 获取当前配置
let currentConfig = getCardSeries();
console.log('card-config.js loaded');
console.log('Available series:', Object.keys(CARD_CONFIGS));
console.log('Current config:', currentConfig);