#!/bin/bash

echo "🚀 开始推送代码到GitHub..."

# 进入项目目录
cd "$(dirname "$0")"

# 检查是否有未提交的更改
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "📝 检测到文件更改，正在提交..."
    
    # 添加所有更改的文件
    git add .
    
    # 获取当前时间作为提交信息
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "Update: $timestamp"
    
    echo "✅ 代码提交成功"
else
    echo "ℹ️  没有检测到文件更改"
fi

# 推送到GitHub
echo "📤 正在推送到GitHub..."
git push origin main

echo "🎉 推送完成！"
echo "🌐 访问地址: https://garyjojoadvernture.github.io/inoue-museum/"