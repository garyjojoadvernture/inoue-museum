/**
 * 井上雄彦作品年表数据配置文件
 * 用于 work/inouework.html 和 work/work-detail.html
 * 
 * 维护说明:
 * - year: 年份 (数字)
 * - title: 中文标题
 * - titleEn: 英文标题
 * - titleJa: 日文标题
 * - description: 中文描述
 * - descriptionEn: 英文描述
 * - descriptionJa: 日文描述
 * - tag: 标签
 * - image: 图片路径 (设为 null 则显示默认图标)
 * 
 * 图片放置路径: /images/work/timeline/
 */

const timelineData = [
    { year: 1988, title: "《紫色的枫》", titleEn: "B.T.", titleJa: "《楓パープル》", description: "井上雄彦的出道作品,在《周刊少年Jump》增刊号发表。作为处女作,展现了年轻井上雄彦的创作才华和独特的画风。", descriptionEn: "Inoue Takehiko's debut work, published in Weekly Shonen Jump special issue. As his first work, it showcased his creative talent and unique art style.", descriptionJa: "井上雄彦のデビュー作品。『週間少年ジャンプ』増刊号で発表。若き井上雄彦の創作才能と独特の画風を示した。", tag: "出道作", image: null },
    { year: 1989, title: "《B.T.》续篇", titleEn: "B.T. (continued)", titleJa: "《B.T.》続編", description: "继续连载《B.T.》系列作品,进一步完善了创作风格和故事架构。", descriptionEn: "Continued serialization of the B.T. series, further refining the creative style and story structure.", descriptionJa: "『B.T.』シリーズの続編を連載。創作スタイルとストーリー構成をさらに完善させた。", tag: "连载", image: null },
    { year: 1990, title: "《灌篮高手》开始", titleEn: "SLAM DUNK Begins", titleJa: "『SLAMDUNK』開始", description: "《灌篮高手》在《周刊少年Jump》正式连载开始。这是一个关于篮球的热血故事。", descriptionEn: "SLAM DUNK began serialization in Weekly Shonen Jump. A passionate basketball story.", descriptionJa: "『SLAMDUNK』が『週間少年ジャンプ』で正式に連載開始。バスケットボールに関する热血ストーリー。", tag: "代表作", image: null },
    { year: 1991, title: "《灌篮高手》连载中", titleEn: "SLAM DUNK", titleJa: "『SLAMDUNK』連載中", description: "湘北篮球队故事持续连载,人气飙升。樱木花道的篮球天赋逐渐展现。", descriptionEn: "The Shohoku basketball team story continues to serialize, popularity soaring. Sakuragi's basketball talent gradually reveals.", descriptionJa: "湘北バスケットボール部の物語が続き、人気が急上昇。桜木花道のバスケットボール才能が徐々にを見せる。", tag: "连载", image: null },
    { year: 1992, title: "《灌篮高手》连载中", titleEn: "SLAM DUNK", titleJa: "『SLAMDUNK』連載中", description: "全国大赛篇开始,故事达到高潮。", descriptionEn: "National tournament arc begins, story reaches climax.", descriptionJa: "全国大会編が開始、物語がクライマックスへ。", tag: "连载", image: null },
    { year: 1993, title: "《灌篮高手》连载中", titleEn: "SLAM DUNK", titleJa: "『SLAMDUNK』連載中", description: "山王工业之战篇,经典对决。", descriptionEn: "Sanno Industry battle arc, classic showdown.", descriptionJa: "山王工業戦編、经典的な対決。", tag: "连载", image: null },
    { year: 1994, title: "《灌篮高手》连载中", titleEn: "SLAM DUNK", titleJa: "『SLAMDUNK』連載中", description: "继续全国大赛篇,湘北vs最强对手。", descriptionEn: "Continues national tournament arc, Shohoku vs strongest opponents.", descriptionJa: "全国大会編繼續、湘北vs最强の对手。", tag: "连载", image: null },
    { year: 1995, title: "《灌篮高手》连载中", titleEn: "SLAM DUNK", titleJa: "『SLAMDUNK』連載中", description: "连载进入最终阶段,剧情达到巅峰。", descriptionEn: "Serialization enters final stage, story reaches peak.", descriptionJa: "連載が最終段階に入り、物語が頂点へ。", tag: "连载", image: null },
    { year: 1996, title: "《灌篮高手》完结", titleEn: "SLAM DUNK Ends", titleJa: "『SLAMDUNK』完結", description: "《灌篮高手》正式完结,31卷单行本发行。", descriptionEn: "SLAM DUNK officially ends, 31 volumes published.", descriptionJa: "『SLAMDUNK』が正式に完結、31巻単行本が発売。", tag: "完结", image: null },
    { year: 1997, title: "《灌篮高手》SP", titleEn: "SLAM DUNK Special", titleJa: "『SLAMDUNK』SP", description: "《灌篮高手》特别篇发行,卡牌游戏发布。", descriptionEn: "SLAM DUNK special issue released, card game launched.", descriptionJa: "『SLAMDUNK』特別篇発売，卡牌ゲームを発表。", tag: "特别篇", image: null },
    { year: 1998, title: "《灌篮高手》剧场版", titleEn: "SLAM DUNK Movie", titleJa: "『SLAMDUNK』映画版", description: "《灌篮高手》剧场版动画上映。", descriptionEn: "SLAM DUNK anime movie released in theaters.", descriptionJa: "『SLAMDUNK』劇場版アニメ上映。", tag: "动画", image: null },
    { year: 1999, title: "《浪客剑心》开始", titleEn: "VAGABOND Begins", titleJa: "『VAGABOND』開始", description: "《浪客剑心》在《周刊Morning》开始连载。以日本幕末时期的传奇剑客宫本武藏为题材。", descriptionEn: "VAGABOND began serialization in Weekly Morning. About the legendary swordsman Miyamoto Musashi.", descriptionJa: "『VAGABOND』が『週間モーニング』で連載開始。日本の幕末の伝説的剑客宮本武蔵を題材に。", tag: "新连载", image: null },
    { year: 2000, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "宫本武藏的传奇故事持续连载。", descriptionEn: "Miyamoto Musashi's legendary story continues.", descriptionJa: "宮本武蔵の伝説の物語が続き。", tag: "连载", image: null },
    { year: 2001, title: "《REAL》开始", titleEn: "REAL Begins", titleJa: "『REAL』開始", description: "《REAL》在《周刊Young Jump》开始连载。讲述轮椅篮球的青春故事。", descriptionEn: "REAL began serialization in Weekly Young Jump. A youth story about wheelchair basketball.", descriptionJa: "『REAL』が『週間ヤングジャンプ』で連載開始。ホイールチェアバスケットボールの青春物語を語る。", tag: "新连载", image: null },
    { year: 2002, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "剑心与武藏的冒险故事持续。", descriptionEn: "VAGABOND adventure continues.", descriptionJa: "剑心と武蔵の冒険物語が続き。", tag: "连载", image: null },
    { year: 2003, title: "《REAL》连载中", titleEn: "REAL", titleJa: "『REAL』連載中", description: "轮椅篮球故事深入展开。", descriptionEn: "Wheelchair basketball story develops deeper.", descriptionJa: "ホイールチェアバスケットボール物語が展開。", tag: "连载", image: null },
    { year: 2004, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "获得第1届日本漫画家协会奖。", descriptionEn: "Won the 1st Japan Cartoonists Association Award.", descriptionJa: "第1回日本漫画家協会賞を受賞。", tag: "获奖", image: null },
    { year: 2005, title: "《灌篮高手》十周年", titleEn: "SLAM DUNK 10th Anniv.", titleJa: "『SLAMDUNK』10周年", description: "《灌篮高手》十周年纪念活动举办。", descriptionEn: "SLAM DUNK 10th anniversary events held.", descriptionJa: "『SLAMDUNK』10周年記念イベント開催。", tag: "纪念", image: null },
    { year: 2006, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "连载继续,单行本销量突破7000万。", descriptionEn: "Serialization continues, sales exceed 70 million.", descriptionJa: "連載繼續、単行本売上が7000万部を突破。", tag: "连载", image: null },
    { year: 2007, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "继续描绘宫本武藏的成长。", descriptionEn: "Continues depicting Musashi's growth.", descriptionJa: "宮本武蔵の成長を描き続ける。", tag: "连载", image: null },
    { year: 2008, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "单行本销量突破8000万。", descriptionEn: "Sales exceed 80 million.", descriptionJa: "単行本売上が8000万部を突破。", tag: "连载", image: null },
    { year: 2009, title: "《PINK》", titleEn: "PINK", titleJa: "『PINK』", description: "短篇集《PINK》发行。", descriptionEn: "Short story collection PINK published.", descriptionJa: "短編集『PINK』発売。", tag: "短篇", image: null },
    { year: 2010, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "连载继续,备受好评。", descriptionEn: "Serialization continues, highly acclaimed.", descriptionJa: "連載繼續、高評価を得ている。", tag: "连载", image: null },
    { year: 2011, title: "《灌篮高手》完全版", titleEn: "SLAM DUNK Complete", titleJa: "『SLAMDUNK』完全版", description: "《灌篮高手》完全版发行。", descriptionEn: "SLAM DUNK complete edition published.", descriptionJa: "『SLAMDUNK』完全版発売。", tag: "再版", image: null },
    { year: 2012, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "连载继续。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载", image: null },
    { year: 2013, title: "《REAL》连载中", titleEn: "REAL", titleJa: "『REAL』連載中", description: "《REAL》继续连载。", descriptionEn: "REAL continues serialization.", descriptionJa: "『REAL』を引き続き連載。", tag: "连载", image: null },
    { year: 2014, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "单行本销量突破8200万。", descriptionEn: "Sales exceed 82 million.", descriptionJa: "単行本売上が8200万部を突破。", tag: "连载", image: null },
    { year: 2015, title: "《灌篮高手》新装版", titleEn: "SLAM DUNK New Ed.", titleJa: "『SLAMDUNK』新装版", description: "《灌篮高手》新装版发行。", descriptionEn: "SLAM DUNK new edition published.", descriptionJa: "『SLAMDUNK』新装版発売。", tag: "再版", image: null },
    { year: 2016, title: "《浪客剑心》连载中", titleEn: "VAGABOND", titleJa: "『VAGABOND』連載中", description: "连载继续,被誉为日本漫画杰作。", descriptionEn: "Serialization continues, praised as a Japanese manga masterpiece.", descriptionJa: "連載 продолжается, 日本漫画傑作と評される。", tag: "连载", image: null },
    { year: 2017, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "两部作品持续连载中,经典永续。", descriptionEn: "Two works continue serialization, classics endure.", descriptionJa: "2作品引き続き連載中、经典が続く。", tag: "连载中", image: null },
    { year: 2018, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2019, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2020, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2021, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2022, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2023, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2024, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载。", descriptionEn: "Serialization continues.", descriptionJa: "連載繼續。", tag: "连载中", image: null },
    { year: 2025, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载,经典永续。", descriptionEn: "Serialization continues, classics endure.", descriptionJa: "連載 продолжается, 经典が続く。", tag: "连载中", image: null },
    { year: 2026, title: "《浪客剑心》《REAL》连载中", titleEn: "VAGABOND & REAL", titleJa: "『VAGABOND』『REAL』連載中", description: "继续连载,经典永续。", descriptionEn: "Serialization continues, classics endure.", descriptionJa: "連載 продолжается, 经典が続く。", tag: "连载中", image: null }
];
