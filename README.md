# A Study in Steampunk: Choice by Gaslight (蒸汽朋克研究：煤气灯下的抉择) 简中汉化项目

## 📖 项目简介
本项目为 Hosted Games 出品的互动小说《A Study in Steampunk: Choice by Gaslight》的中文本地化项目。

该作由 Heather Albano 编写，总文本量约 27.7 万字。游戏的所有剧情分支与数值判定均由 ChoiceScript 代码驱动。本项目通过自动化工具配合 AI 技术实现了全文本覆盖，并建立此仓库以支持后续的人工协作润色。

- **当前版本**：v0.1 (AI 初版)
- **翻译技术**：基于 Gemini 3 pro 模型进行全文本自动化处理。
- **项目状态**：已完成全文本 AI 翻译，后续将考虑进行人工汉化。

---

## 📂 仓库目录结构
```text
/Steampunk-Gaslight-CN
├── /tools                  # 汉化工具集
│   ├── convert.js           # 核心脚本：将翻译后的 .txt 同步至游戏读取的 .json 字典
│   ├── unpack.bat           # 一键解包工具：提取 app.asar 资源
│   ├── pack.bat             # 一键封包工具：封装修改后的资源，自动处理二进制依赖
│   └── convert_all.bat      # 批量处理脚本：一键同步所有场景文本与索引
├── /source_en              # 英文原版 .txt 剧情文件（校对基准）
├── /ai_draft               # AI 翻译初版 .txt（当前最新版本）
├── /manual_refined          # 人工精修版 .txt（志愿者协作提交区）
├── /images_cn              # 汉化后的图片资源（如标题图、章节题图等）
├── GLOSSARY.md             # 汉化术语表（确保专有名词译名统一）
└── README.md               # 项目说明文档
```
---

## 🛠️ 技术指南与工作流
本项目基于 Electron 架构。游戏在运行时并不直接读取 .txt 文件，而是读取同名的 .txt.json 字典文件，因此文本修改后必须经过同步步骤。

### 1. 环境准备
使用本项目工具前，请确保系统中已安装 Node.js。

### 2. 解包资源 (Unpack)
1. 将正版游戏的 app.asar 文件放入项目根目录。
2. 运行 unpack.bat，脚本会将资源解压至 unpacked/ 文件夹。

### 3. 文本修改逻辑
- **剧情文本路径**：unpacked/assets/scenes/
- **修改准则**：
  - 请对照 /source_en 中的原文进行润色。
  - 严禁修改任何以 * 开头的指令行（如 *if, *choice, *set, *label）。
  - **缩进规范**：ChoiceScript 极其依赖缩进。请务必保持行首空格数量与原文件完全一致，否则会导致游戏报错。

### 4. 同步索引 (Convert) - 关键步骤
修改完 .txt 文本后，必须更新对应的 JSON 字典：
- 运行 convert_all.bat。
- 该工具会通过 convert.js 扫描文本中的 *label 标签位置并生成全小写索引，确保跳转逻辑正确。

### 5. 重新封包 (Pack)
1. 运行 pack.bat。
2. 脚本将使用专业命令排除 .node、.dll 等二进制文件，生成新的 app.asar 并备份原件。

---

## 📜 剧情加载顺序说明
若需了解或修改章节跳转逻辑，请参考核心引导文件：
- **路径**：unpacked/assets/scenes/startup.txt
- **逻辑点**：在该文件中搜索 *scene_list 指令，其下方按顺序罗列的文件名即为游戏剧情的实际加载与衔接逻辑。

---

## 🎮 玩家安装说明
若您仅需安装已发布的汉化补丁：

1. **定位目录**：在 Steam 库中右键点击游戏 -> 管理 -> 浏览本地文件。进入 resources 文件夹。
2. **备份原件**：将原始 app.asar 重命名为 app.asar.bak。
3. **覆盖补丁**：将下载的汉化版 app.asar 放入该目录。
4. **运行要求**：确保 app.asar 与解包时生成的 app.asar.unpacked 文件夹处于同一级目录下，否则游戏将无法启动。

---

## 🤝 协作规范
1. **译名统一**：修改文本前请查阅 GLOSSARY.md。
2. **提交修改**：建议通过 Pull Request 提交润色后的 .txt 文件。
3. **Bug 反馈**：若遇到逻辑死循环或变量报错（如 expected 2 was 4），请提交 Issue 并附带报错截图。

---

## ⚠️ 免责声明
- 本补丁仅供翻译交流与技术学习使用，严禁用于任何形式的商业用途。
- 游戏本体版权归原作者 Heather Albano 及发行商 Hosted Games 所有。请支持正版作品。
