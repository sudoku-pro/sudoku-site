# 参与贡献

我们欢迎你参与改进 Sudoku 文档！无论是修正错别字、新增指南，还是优化现有内容，我们都非常感谢你的帮助。

## 贡献方式

### 改进文档
- 修正错别字或语法错误
- 让晦涩的说明更清晰
- 补充缺失的信息
- 更新过时的内容
- 改善排版与可读性

### 新增内容
- 针对常见问题撰写指南
- 添加教程或示例
- 将文档翻译成其他语言
- 撰写常见问题条目

### 技术贡献
- 改进构建流程
- 为文档站点添加新功能
- 修复部署工作流中的 bug

## 开始之前

### 环境要求
- Node.js 18 或更高版本
- pnpm 包管理器
- Git

### 搭建开发环境

1. 在 GitHub 上 **Fork 本仓库**
2. **克隆你的 Fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/sudoku-site.git
   cd sudoku-site
   ```
3. **安装依赖**：
   ```bash
   pnpm install
   ```
4. **启动开发服务器**：
   ```bash
   pnpm docs:dev
   ```
5. 在浏览器中打开 `http://localhost:5173`

### 进行修改

1. 为你的改动创建一个新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 在 `docs/` 下修改对应的文档文件
3. 通过构建站点来验证改动：
   ```bash
   pnpm docs:build
   ```
4. 提交你的改动：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交改动

1. **推送分支**到你的 Fork：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上 **创建 Pull Request**
3. **等待审核**，并根据反馈进行调整

## 写作规范

### 写作风格
- 使用清晰、简洁的语言
- 尽量使用主动语态
- 保持包容与友好的语气
- 保持格式统一
- 在有助于理解时附上代码示例

### 文件结构
- 文档页面放在 `docs/` 下
- 指南放在 `docs/guide/` 下
- 文件名使用小写字母加连字符：`my-new-guide.md`
- 不强制要求 frontmatter，但可用它补充元数据

### 链接
- 站内文档使用相对链接
- 在有帮助时链接到外部资源
- 确保所有链接均可正常访问

### 图片与资源
- 将图片放在 `docs/public/` 或其子目录下
- 使用具有描述性的文件名
- 为网页优化图片（建议小于 500KB）

## 行为准则

本项目遵循一套行为准则。参与即表示你同意：

- 保持尊重与包容
- 聚焦于建设性的反馈
- 为自己的错误承担责任

详见 [CODE_OF_CONDUCT.md](https://github.com/sudoku-pro/sudoku-site/blob/main/CODE_OF_CONDUCT.md)。

## 有疑问？

如果你对贡献流程有疑问：
- 先查看已有的 [issue](https://github.com/sudoku-pro/sudoku-site/issues) 和 [讨论](https://github.com/sudoku-pro/sudoku-site/discussions)
- 如有需要，新建一个 issue
- 联系维护者

感谢你帮助改进 Sudoku 文档！🎉
