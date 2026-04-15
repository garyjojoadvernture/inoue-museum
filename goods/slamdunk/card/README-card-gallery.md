# SLAMDUNK卡片展示系统 - 配置化版本

## 📁 文件结构

```
project/
├── card-config.js          # 配置文件（包含所有卡片系列的定义）
├── card-gallery.html        # 通用卡片展示页面（主文件）
├── slamdunkcard-1997CardassMasters.html  # 原有的1997系列页面（已更新为配置化）
└── images/
    └── card/
        ├── 1997CardassMasters/  # 1997系列图片
        └── [其他系列]/          # 其他系列图片
```

## 🎯 使用方法

### 1. 基本使用

#### 显示默认系列（1997 Cardass Masters）
```
card-gallery.html
```

#### 显示指定系列
```
card-gallery.html?series=1996OtherSeries
```

### 2. 添加新的卡片系列

#### 步骤1：在 `card-config.js` 中添加配置

```javascript
const CARD_CONFIGS = {
    // 现有系列...
    
    // 新系列配置
    'yourNewSeries': {
        title: {
            zh: "SLAMDUNK卡片展示 - 您的新系列",
            en: "SLAMDUNK Card Gallery - Your New Series", 
            ja: "SLAMDUNKカード展示 - あなたの新しいシリーズ"
        },
        totalCards: 120,              // 卡片总数
        imagePath: "./images/card/yourNewSeries/",  // 图片路径
        defaultImage: "default.png",  // 默认图片文件名
        cardsPerPage: 12,             // 每页显示数量
        cardTags: {
            zh: {
                1: ["标签1", "标签2"],
                // ... 更多卡片标签
            },
            en: {
                1: ["Tag1", "Tag2"],
                // ... more tags
            },
            ja: {
                1: ["タグ1", "タグ2"],
                // ... その他のタグ
            }
        }
    }
};
```

#### 步骤2：准备图片文件

在对应目录下放置图片文件：
```
images/card/yourNewSeries/
├── 1_A.jpg    # 卡片1正面
├── 1_B.jpg    # 卡片1背面
├── 2_A.jpg    # 卡片2正面
├── 2_B.jpg    # 卡片2背面
├── ...
└── default.png # 默认图片
```

#### 步骤3：访问新系列

```
card-gallery.html?series=yourNewSeries
```

## ⚙️ 配置项说明

| 配置项 | 类型 | 说明 | 示例 |
|--------|------|------|------|
| `title` | Object | 多语言页面标题 | `{zh: "标题", en: "Title"}` |
| `totalCards` | Number | 卡片总数 | `145` |
| `imagePath` | String | 图片文件路径 | `"./images/card/series1/"` |
| `defaultImage` | String | 默认图片文件名 | `"default.png"` |
| `cardsPerPage` | Number | 每页显示数量 | `12` |
| `cardTags` | Object | 多语言标签数据 | `{zh: {...}, en: {...}}` |

## 🏷️ 标签系统

### 标签数据结构
```javascript
cardTags: {
    zh: {
        [卡片编号]: ["标签1", "标签2", "..."]
    }
}
```

### 默认标签生成
如果某个卡片没有定义标签，系统会自动生成默认标签：
- 卡片 1-10: "湘北"
- 卡片 11-15: "海南"  
- 卡片 16-20: "翔阳"
- 卡片 21-25: "陵南"
- 卡片 26-30: "丰玉"
- 卡片 31-35: "山王"
- 卡片 36-40: "教练"
- 卡片 41-45: "经理"
- 卡片 46-50: "友情"
- ... 等等

### 特殊标记
- 5的倍数：添加"限量"标签
- 10的倍数：添加"珍藏"标签

## 🎨 自定义样式

### 修改卡片布局
```css
.cards-container {
    grid-template-columns: repeat(4, 1fr); /* 4列布局 */
    gap: 25px;                            /* 更大间距 */
}
```

### 修改卡片大小
```css
.card {
    width: 280px;    /* 更宽 */
    height: 380px;   /* 更高 */
}
```

### 修改主题颜色
```css
body {
    background: #f5f5f5; /* 更深的背景 */
}
```

## 🌐 多语言支持

系统支持中文、英文、日文三种语言：

### 语言配置
```javascript
// 在 card-config.js 中为每个系列配置多语言内容
title: {
    zh: "中文标题",
    en: "English Title", 
    ja: "日本語タイトル"
}
```

### 添加新语言
1. 在 `translations` 对象中添加语言数据
2. 在 `cardTags` 中添加对应语言的标签
3. 在 `generateDefaultTags` 中添加该语言的标签映射

## 🔍 搜索功能

### 搜索类型
- **标签搜索**：搜索卡片的所有标签
- **编号搜索**：按卡片编号搜索
- **组合搜索**：标签和编号都可以匹配

### 搜索示例
- 输入 "樱木" 找到樱木花道相关卡片
- 输入 "1" 找到编号为1的卡片
- 输入 "湘北" 找到湘北高中相关卡片

## 📱 响应式设计

页面支持：
- **桌面端**：3列网格布局
- **平板端**：自动适应屏幕宽度  
- **手机端**：单列布局

## 🚀 性能优化

- **懒加载**：图片按需加载
- **缓存控制**：防止浏览器缓存旧内容
- **预加载**：优化用户体验
- **错误处理**：优雅处理缺失图片

## 📋 部署清单

### 新增系列检查清单
- [ ] 在 `card-config.js` 中添加系列配置
- [ ] 创建对应的图片目录
- [ ] 上传所有卡片图片文件（正反面）
- [ ] 确保存在 `default.png` 默认图片
- [ ] 测试访问链接是否正常
- [ ] 测试搜索功能是否正常
- [ ] 测试多语言切换是否正常
- [ ] 测试移动端显示是否正常

### 图片命名规范
- 正面图片：`[编号]_A.jpg`
- 背面图片：`[编号]_B.jpg`
- 默认图片：`default.png`

示例：
- `1_A.jpg`, `1_B.jpg`
- `100_A.jpg`, `100_B.jpg`

## 🆘 常见问题

### Q: 图片不显示？
A: 检查图片路径是否正确，文件是否存在，文件名是否符合命名规范。

### Q: 搜索不工作？
A: 检查标签配置是否正确，确保卡片标签包含搜索关键词。

### Q: 页面标题不更新？
A: 确保在配置中正确设置了多语言标题。

### Q: 移动端显示异常？
A: 检查CSS媒体查询，确保响应式样式正常工作。

---

**配置化设计让您可以轻松管理多个卡片系列，一套代码支持无限扩展！** 🎴