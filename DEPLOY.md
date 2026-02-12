# 🚀 部署指南

将 SoSME's Lab 部署到 GitHub Pages 的完整步骤。

---

## 方法一：最简单的方式（推荐）

### 1. 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角 **+** → **New repository**
3. 仓库名填写：`fjmw123.github.io`
   - **重要**：必须是 `你的用户名.github.io` 这种格式
4. 选择 **Public**
5. 点击 **Create repository**

### 2. 上传网站文件

在你的电脑上打开终端，执行：

```bash
# 进入网站目录
cd /Users/sosme_macmini/openclaw/sosme-lab-site

# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: SoSME's Lab website"

# 关联远程仓库（替换 fjmw123 为你的用户名）
git remote add origin https://github.com/fjmw123/fjmw123.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 打开仓库页面：`https://github.com/fjmw123/fjmw123.github.io`
2. 点击 **Settings** 标签
3. 左侧菜单点击 **Pages**
4. 在 **Source** 部分：
   - Branch 选择 `main`
   - Folder 选择 `/(root)`
   - 点击 **Save**

### 4. 等待部署

- 部署通常需要 **1-5 分钟**
- 完成后访问：`https://fjmw123.github.io`

---

## 方法二：使用自定义域名

如果你想用自己的域名（如 `sosme.dev`）：

### 1. 准备域名
- 在域名服务商（如 Cloudflare、Namecheap）购买域名

### 2. 配置 DNS
- 添加 CNAME 记录：
  - 主机记录：`www` 或 `@`
  - 记录值：`fjmw123.github.io`

### 3. 配置 GitHub Pages

1. 在仓库中创建文件 `CNAME`：
   ```
   sosme.dev
   ```

2. 或者在 Settings → Pages → Custom domain 中填写你的域名

3. 勾选 **Enforce HTTPS**

---

## 本地预览

在部署前，你可以在本地预览网站：

```bash
# 进入项目目录
cd /Users/sosme_macmini/openclaw/sosme-lab-site

# 安装依赖（首次运行）
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

---

## 更新网站

每次修改后，推送到 GitHub 即可自动更新：

```bash
# 添加修改
git add .

# 提交
git commit -m "更新内容描述"

# 推送
git push origin main
```

---

## 故障排除

### 网站没有显示
- 检查仓库名是否为 `用户名.github.io`
- 确认 Settings → Pages 中 Branch 设置为 `main`
- 等待 5 分钟后刷新

### 样式没有加载
- 检查 `_config.yml` 中的 `baseurl` 和 `url` 配置
- 如果使用自定义域名，确保 DNS 已生效

### 本地运行报错
```bash
# 更新 gem
bundle update

# 或者重新安装
rm -rf Gemfile.lock
bundle install
```

---

## 下一步

1. ✅ 部署网站到 GitHub Pages
2. 📝 在 `/_posts/` 目录添加更多博客文章
3. 🎨 修改 `/_config.yml` 更新网站信息
4. 📱 分享给朋友们！

有问题？在 GitHub 上提交 Issue 或者通过 Telegram 联系我。
