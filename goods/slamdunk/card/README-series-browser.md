# SLAMDUNK 卡片系列导览页面

## 概述

`series-browser.html` 是一个卡片系列导览页面，展示所有可用的SLAMDUNK卡片系列。

## 功能特性

### 🎯 主要功能
- **系列展示**: 以卡片形式展示所有配置的卡片系列
- **系列简介**: 每个系列显示简介、卡片数量等信息
- **一键跳转**: 点击卡片直接进入对应的卡片系列页面
- **多语言支持**: 支持中文、英文、日文切换

### 🎨 设计特色
- **渐变背景**: 蓝紫色渐变营造收藏氛围
- **卡片动效**: 悬停时的缩放和阴影效果
- **响应式设计**: 适配桌面、平板、手机等设备
- **闪光效果**: 系列图标有动态闪光动画

### 📊 显示信息
- **系列标题**: 当前语言下的系列名称
- **系列简介**: 从配置文件读取的描述（最多200字）
- **卡片数量**: 该系列包含的卡片总数
- **探索按钮**: 点击进入对应系列页面

## 使用方法

### 🌐 访问页面
直接在浏览器中打开 `series-browser.html`

### 🔄 语言切换
- 右上角语言选择器可切换界面语言
- URL参数支持：`series-browser.html?lang=en` 或 `?lang=ja`

### 🎯 系列导航
点击任意系列卡片即可在新标签页中打开对应的：
- `card-gallery.html?series=1997CardassMasters`
- `slamdunkcard-1997CardassMasters.html`
- `slamdunkcard-seriesB.html`

## 配置支持

### 📁 直接维护
所有系列信息直接在 `series-browser.html` 的 `SERIES_DATA` 数组中维护，包括：
- 1997CardassMasters (145张卡片)
- seriesB (80张卡片)

### ⚙️ 新增系列
直接在 `SERIES_DATA` 数组中添加新的系列对象即可：

```javascript
{
    key: 'newSeries',
    titles: {
        zh: "新系列名称", 
        en: "New Series Name",
        ja: "新シリーズ名"
    },
    descriptions: {
        zh: "新系列的中文介绍...",
        en: "New series English description...",
        ja: "新シリーズの日本語紹介..."
    },
    totalCards: 100,
    year: 2024,
    page: 'new-series.html',
    image: './images/card/cardseries/new-series.jpg'  // 系列展示图片
}
```

### 🖼️ 图片管理
- 系列展示图片存放在 `images/card/cardseries/` 文件夹
- 文件名格式：`系列key.jpg` (如: `1997-cardass-masters.jpg`)
- 图片建议尺寸：800x600px 或 16:9 比例
- 支持JPG、PNG格式
- 如果图片加载失败会自动显示篮球图标🏀作为备用

## 技术实现

### 🎨 样式特性
- CSS Grid 响应式布局
- CSS 动画和过渡效果
- 渐变背景和毛玻璃效果
- 移动端优化

### 📱 响应式断点
- **桌面**: > 768px - 多列网格
- **平板**: ≤ 768px - 单列布局
- **手机**: ≤ 480px - 紧凑布局

### 🔧 JavaScript 功能
- 动态DOM生成
- 多语言文本切换
- 事件处理和导航
- 错误处理和降级

## 文件结构

```
project/
├── series-browser.html                    # 系列导览页面
├── card-config.js                       # 配置文件
├── card-gallery.html                    # 通用卡片展示页
├── slamdunkcard-1997CardassMasters.html  # 1997系列专用页
├── slamdunkcard-seriesB.html            # B系列专用页
├── README-series-browser.md               # 本说明文档
└── images/
    └── card/
        └── cardseries/                   # 系列导览图片文件夹
            ├── 1997-cardass-masters.jpg  # 1997系列展示图
            └── slamdunk-series-b.jpg       # B系列展示图
```

这个系列导览页面为用户提供了直观的系列选择界面，让用户能够轻松探索和访问所有可用的SLAMDUNK卡片系列。