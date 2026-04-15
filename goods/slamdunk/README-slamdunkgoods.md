# SLAMDUNK 谷子分类导览页面

## 页面概述

`slamdunkgoods.html` 是井上雄彦博物馆项目中用于展示 SLAMDUNK 相关收藏品的分类导览页面。

## 分类板块

页面包含 8 个主要分类：

1. **卡牌** (Trading Cards) - 1993-1997年的官方卡牌系列
2. **手办** (Figures) - 角色手办模型
3. **日历** (Calendars) - 限量版官方日历
4. **徽章** (Badges) - 主题徽章和胸针
5. **少年JUMP杂志** (Weekly Shonen Jump) - 连载期间的杂志
6. **单行本** (Manga Volumes) - 漫画单行本收藏
7. **十日后** (10 Days After) - 2004年的续篇作品
8. **JUMP50周年** (Jump 50th Anniversary) - 2018年的纪念作品

## 文件结构

```
goods/
├── slamdunkgoods.html          # 主页面
├── card/                       # 卡牌分类页面
│   ├── series-browser.html     # 卡牌系列导览
│   ├── slamdunkcard-1997CardassMasters.html
│   ├── slamdunkcard-seriesB.html
│   └── card-config.js          # 卡牌配置文件
└── ...
```

## 功能特点

- **响应式设计** - 适配不同屏幕尺寸
- **动画效果** - 卡片悬停、淡入动画
- **多语言支持** - 中文、英文、日文（基础框架已搭建）
- **统计数据** - 显示每个分类的收藏数量和年代跨度
- **优雅降级** - 图片加载失败时显示emoji图标

## 技术实现

- 使用 CSS Grid 实现响应式布局
- CSS3 动画和过渡效果
- 原生 JavaScript 实现交互功能
- 模块化的数据配置结构

## 未来扩展

- 添加实际的子页面链接
- 实现完整的语言切换功能
- 集成搜索和筛选功能
- 添加收藏夹功能