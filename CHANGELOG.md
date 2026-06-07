
## 2026-06-07 · v2.0.15
 
### 完整更新日志： https://github.com/arcsin1/oh-my-ppt/releases
### 新官网： https://www.ohmyppt.cc
### 中文

- 新增多任务生成：创建演示会话后可继续发起其他任务，无需停留在生成页面等待；会话列表会持续展示排队、生成进度和完成状态。
- 新增应用内任务通知：生成完成、部分完成或失败时会在应用内及时提醒，并可直接进入对应会话查看结果。
- 新增会话另存为：可复制当前演示的页面与素材创建独立新会话，适合保留原稿后继续制作不同版本。
- 新增浏览模式：在编辑工作台中以更纯净的方式连续查看整套演示，编辑、浏览和演示等使用场景切换更清晰。
- 新增艺术字：编辑页面可直接插入艺术字，并可以调整文案、效果和字号，标题与重点内容的视觉表现更丰富。
- 新增模型兼容性设置：基础模型配置支持关闭 `temperature` 参数，兼容不接受该参数的模型服务。
- 新增对话创作大纲编辑：可在生成前手动修改每页的标题、页面目标、内容摘要和关键要点，后续对话与生成会使用更新后的大纲。
- 大幅增强资料理解与大纲解析：上传 Markdown、文本、CSV、DOCX 或图片后，可更准确地提炼章节、关键结论、数据和页面结构，让生成内容更贴近原始资料。
- 增强对话创作：AI 能更持续地整理上传资料、创作目标和页面规划，在生成前形成更清晰、可调整的内容方案。
- 增强 PPTX 导入：支持更好地还原表格、图表、页面大纲和动画信息，复杂演示导入后的可编辑性与结构完整度进一步提升。
- 优化多模型任务执行：不同任务可分别选择运行模型，支持使用多个模型处理生成、编辑、模板复用、文档解析和演讲稿等任务。
- 优化编辑工作台：重新组织顶部工具、页面导航、AI、生图、属性、演讲稿和历史记录等功能，常用操作更集中，编辑状态更清晰。
- 优化编辑历史：撤销、重做和页面编辑记录更稳定，复杂编辑过程中的回退与恢复更可靠。
- 优化大文件与长演示支持：演示页数上限提升至 500 页，PPTX 上传大小上限提升至 500MB。
- 优化缩略图加载：长演示的页面缩略图按需加载，进入编辑页和滚动页面列表时更流畅。
- 优化模板创建与复用：文档解析建议、模型选择和生成参数确认更集中，使用模板创建新内容时更直观。
- 修复 macOS Apple Silicon 环境下部分会话包无法正常打开的问题。

### English

- Added multi-task generation: start another presentation while existing tasks continue in the background, with queued, generating, and completed states visible from the Sessions page.
- Added in-app task notifications: receive a notification when generation completes, partially completes, or fails, then open the related session directly.
- Added Save as New Session: duplicate the current slides and assets into an independent session, making it easier to preserve the original while creating variations.
- Added Browse mode: review the full presentation in a cleaner workspace, with clearer transitions between editing, browsing, and presenting.
- Added WordArt: insert stylized text directly in the editor and adjust its content, effect, and size for more expressive titles and highlights.
- Added a model compatibility option: Base Model Configuration can omit the `temperature` parameter for services that do not support it.
- Added outline editing in Chat to Create: revise each slide's title, objective, summary, and key points before generation; later conversations and generation use the updated outline.
- Significantly improved source understanding and outline parsing: Markdown, text, CSV, DOCX, and image uploads are now better organized into chapters, key findings, data points, and slide structures.
- Enhanced Chat to Create: AI now maintains a clearer understanding of uploaded sources, creative goals, and slide plans before turning them into a generation-ready outline.
- Enhanced PPTX import: tables, charts, slide outlines, and animation metadata are restored more accurately for better editability and structural fidelity.
- Improved multi-model task execution: different tasks can use different models for generation, editing, template reuse, document parsing, speaker scripts, and more.
- Improved the editing workspace: reorganized tools for page navigation, AI, image generation, properties, speaker scripts, and history so common actions are easier to find and current modes are clearer.
- Improved edit history: undo, redo, and slide edit records are more reliable during longer or more complex editing sessions.
- Improved support for large files and long presentations: presentations can now contain up to 500 slides, and PPTX uploads can be up to 500MB.
- Improved thumbnail loading: slide thumbnails are loaded on demand for smoother entry and scrolling in long presentations.
- Improved template creation and reuse: document suggestions, model selection, and generation settings are now presented in a more focused workflow.
- Fixed an issue that could prevent some session packages from opening on Apple Silicon Macs.


