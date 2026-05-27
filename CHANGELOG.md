## 2026-05-27 · v2.0.12

### 中文

- 新增模板库：支持将已生成或已编辑的演示保存为模板，管理模板名称、描述和标签，并在模板页统一预览、编辑、删除和复用。
- 新增从模板创建ppt会话：可直接复用模板生成可编辑会话，也可输入新主题/大纲或上传文档解析后，沿用模板视觉系统重新生成内容。
- 新增 PPTX 文件可导入为模板：模板页可导入 `.pptx` 作为模板，自动解析页面、抽取视觉风格并生成模板设计契约。
- 新增页面标题编辑：编辑页支持修改单页标题。
- 新增空白页创建：可选择已有页面作为版式基础创建到末尾，并自动清空可见文字，适合快速延展同风格页面。
- 优化首页 PPTX 快速导入编辑入口：首页可直接导入 `.pptx` 创建可编辑会话，并展示导入进度和提示信息。
- 优化编辑/检选体验：进入编辑和 AI 检选时会结束残留动画，避免带动画页面出现元素隐藏、停在半透明状态或无法选中的问题。
- 优化视频元素编辑与播放：可以对视频元素进行编辑，包括调整播放速度、音量、循环播放、自动播放等。
- 优化导入与运行时稳定性：会话导入更好地兼容扁平 ZIP 和复杂压缩包，导入会话补齐默认设计契约；
- 修复图表问题：图表类目轴bug、横向柱状图 tooltip 和 0 值数据展示更准确。
- 修复页面管理问题：修复页面管理时的动画问题，避免页面切换时元素隐藏、停在半透明状态或无法选中的问题。

### English

- Added Template Library: save generated or edited presentations as templates, manage template names, descriptions, and tags, then preview, edit, delete, and reuse them from the Templates page.
- Added PPT session creation from templates: reuse a template to create an editable session directly, or enter a new topic/outline or upload a document to regenerate content while keeping the template's visual system.
- Added PPTX import as templates: import `.pptx` files from the Templates page, automatically parse slides, extract the visual style, and create a template design contract.
- Added page title editing: edit individual slide titles from the editor.
- Added blank page creation: choose an existing slide as the layout base, create a new page at the end of the deck, and clear visible text for fast same-style page expansion.
- Improved the quick PPTX import editing entry on Home: import a `.pptx` directly from the Home page to create an editable session with progress and warning feedback.
- Improved edit and inspect modes: residual animations are finished before editing or AI inspection, reducing hidden, half-transparent, or hard-to-select elements on animated slides.
- Improved video element editing and playback: video elements can now be edited, including playback speed, volume, loop playback, autoplay, and more.
- Improved import and runtime stability: session import better handles flat ZIPs and complex archives, and imported sessions receive a default design contract.
- Fixed chart issues: category-axis bugs, horizontal bar chart tooltips, and zero-value data now render more accurately.
- Fixed page management issues: resolved animation problems during page management, reducing hidden, half-transparent, or hard-to-select elements when switching pages.
