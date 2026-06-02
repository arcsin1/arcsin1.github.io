
## 2026-06-02 · v2.0.14
 
 这是一个功能性增加和优化的过渡版本，计划下个版本对编辑页进行大的交互改造！
 
### 完整更新日志： https://github.com/arcsin1/oh-my-ppt/releases

### 中文

- **新增 AI 生图工作流**：编辑页右侧新增图片生成模式，可围绕当前页面生成配图素材，并支持将生成图片添加到画布、设置为页面背景或直接定位本地文件。
- **新增多生图模型接入配置**：目前支持即梦、Agnes AI、硅基流动、OpenAI-compatible 图片接口和 Gemini 图片生成，并可在设置页独立管理、启用和验证生图模型。
- **新增配图提示词辅助**：支持「大纲提示词」和「风格提示词」，可根据当前页标题、大纲、页面视觉风格和用户输入生成更适合当前页面的配图描述；
- **新增统一模型切换体验**：创建、模板复用、风格导入、图片解析等需要模型参与的操作，都可以在执行前选择本次使用的模型，减少频繁进入设置页切换的成本，多模型切换更方便。
- **新增页面大纲**：编辑页支持读取、展示和编辑修改页面大纲，创建、导入、页面管理和单页补写流程中的页面上下文更清晰。
- **新增 HTTP/SOCKS 代理支持**：可为模型服务配置代理，提升访问 Gemini 等外部服务时的网络兼容性。
- **新增 macOS Intel 架构支持配置**，提升 Apple Silicon 与 Intel Mac 的安装包兼容性。
- **新增添加文字功能**：编辑页可直接添加文字元素，文字编辑体验进一步优化。
- 优化对话创作： 增加对话历史记录，用户可以查看和管理之前的对话记录，方便后续参考和继续创作。
- 优化设置页：增加一些配置帮助说明。
- 优化模板复用体验：从模板创建演示时的参数确认、模型选择和生成前校验更完整，减少模板结构异常导致的失败。
- 优化导入与解析稳定性：文档解析、大纲归一化、PPTX 导入和风格抽取流程更稳，对复杂输入的容错更好。
- 优化编辑体验：改进文字选中、字体编辑、图层检查和元素锚点定位，减少重叠元素或复杂页面中的误选和编辑偏差。
- 优化技能提示词：更新图表与布局技能说明，生成图表、版式和页面结构时更贴合演示文稿场景。

### En

- Added AI image generation: create slide visuals from the editor, then add them to the canvas, set them as the slide background, or reveal the generated file locally.
- Added image model configuration: connect Jimeng, Agnes AI, SiliconFlow, OpenAI-compatible image APIs, and Gemini image generation from Settings.
- Added image prompt helpers: use "Outline prompt" and "Style prompt" to turn the current slide outline, visual style, and your own idea into a better image description.
- Added model selection at run time: choose which model to use before creation, template reuse, style import, image parsing, and other AI-powered actions.
- Added slide outlines: the editor can now read, display, and edit slide outlines, making the current slide context clearer during editing, import, page management, and single-slide regeneration.
- Added HTTP/SOCKS proxy support: configure a proxy for model services to improve connectivity with external providers such as Gemini.
- Added macOS Intel support: packaging configuration now better supports both Apple Silicon and Intel Macs.
- Improved chat-to-create: conversation history is now easier to keep, review, and continue from during creative planning.
- Improved Settings: added helpful configuration guidance.
- Improved template reuse: stronger parameter confirmation, model selection, and pre-generation checks reduce failures from invalid template structure.
- Improved import and parsing stability: document parsing, outline normalization, PPTX import, and style extraction now handle complex inputs more reliably.
- Added text insertion: add text elements directly in the editor, with further improvements to text editing.
- Improved editing: text selection, font editing, layer inspection, and element anchoring are more accurate on complex or overlapping slide elements.
- Improved built-in skill prompts: chart and layout instructions now better match presentation-generation scenarios.


<p>
<img width="30%" alt="clipboard-image-1780408100" src="https://github.com/user-attachments/assets/455ce2b5-f9a7-4877-9140-7e0512ae03a8" />
<img width="30%"  alt="clipboard-image-1780407998" src="https://github.com/user-attachments/assets/2df7c9b7-a7df-4aac-8ef7-9d67e8831abd" />
<img width="30%"  alt="clipboard-image-1780408075" src="https://github.com/user-attachments/assets/7a69c3c1-806e-47db-b3c4-8f605ca090ea" />
</p>

十分感谢大家支持！目前主要由我一人开发和维护，如果您觉得 Oh My PPT 对您有所帮助，可以赞助支持一下：

[支持赞助token](https://arcsin1.github.io/#/sponsor)
