<template>
  <div id="app">
    <header class="app-header">
      <h1>云朵字体生成器</h1>
      <p class="subtitle">创建美丽的云朵文字效果</p>
    </header>
    
    <main class="app-main">
      <CloudFontGenerator />
    </main>
    
    <footer class="app-footer">
      <p>&copy; {{ currentYear }} 云朵字体生成器 | 一款简单易用的在线文字效果生成工具</p>
      <p class="footer-links">
        <a href="#" @click.prevent="showHelp">使用帮助</a> |
        <a href="#" @click.prevent="showAbout">关于我们</a>
      </p>
    </footer>
    
    <!-- 帮助对话框 -->
    <div class="modal" v-if="showHelpModal">
      <div class="modal-content">
        <span class="close-btn" @click="showHelpModal = false">&times;</span>
        <h2>使用帮助</h2>
        <div class="help-content">
          <h3>基本操作</h3>
          <ol>
            <li>在"文本内容"输入框中输入您想要转换的文字</li>
            <li>使用各种滑块调整字体的外观参数</li>
            <li>实时预览生成的云朵字体效果</li>
            <li>点击"导出图片"按钮保存生成的图片</li>
          </ol>
          
          <h3>参数说明</h3>
          <ul>
            <li><strong>边框粗细</strong>：控制字体边框的粗细程度</li>
            <li><strong>边缘大小</strong>：控制云朵效果的边缘扩散程度</li>
            <li><strong>云朵密度</strong>：控制云朵效果的密集程度</li>
            <li><strong>字体颜色</strong>：设置云朵字体的颜色</li>
            <li><strong>背景颜色</strong>：设置背景的颜色</li>
            <li><strong>字体大小</strong>：调整字体的大小</li>
            <li><strong>字体样式</strong>：选择不同的字体样式</li>
            <li><strong>发光效果</strong>：启用/禁用字体的发光效果</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 关于对话框 -->
    <div class="modal" v-if="showAboutModal">
      <div class="modal-content">
        <span class="close-btn" @click="showAboutModal = false">&times;</span>
        <h2>关于云朵字体生成器</h2>
        <div class="about-content">
          <p>云朵字体生成器是一款基于Vue3开发的在线工具，可以帮助用户创建美丽的云朵文字效果。</p>
          <p>无论您是设计师、内容创作者还是普通用户，都可以使用这个简单易用的工具来创建独特的文字效果，用于社交媒体、海报、标题或任何需要吸引眼球的场合。</p>
          <p>我们致力于提供最佳的用户体验，欢迎提供反馈和建议，帮助我们不断改进这个工具。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloudFontGenerator from './components/CloudFontGenerator.vue'

export default {
  name: 'App',
  components: {
    CloudFontGenerator
  },
  data() {
    return {
      showHelpModal: false,
      showAboutModal: false
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    showHelp() {
      this.showHelpModal = true;
    },
    showAbout() {
      this.showAboutModal = true;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', 'Arial', sans-serif;
  background-color: #f0f8ff;
  color: #333;
  line-height: 1.6;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, #87ceeb, #1e90ff);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  margin: 10px 0 0;
  font-size: 1.2rem;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

.app-footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
  font-size: 0.9rem;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #87ceeb;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

/* 模态对话框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #777;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #333;
}

.help-content, .about-content {
  margin-top: 20px;
}

.help-content h3 {
  margin-top: 20px;
  color: #1e90ff;
}

.help-content ul, .help-content ol {
  padding-left: 20px;
}

.help-content li {
  margin-bottom: 8px;
}
</style>
