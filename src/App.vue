<template>
  <div class="app-container">
    <div class="content">
      <h1 class="title">云朵字生成器</h1>
      
      <div class="control-panel">
        <div class="mode-switch">
          <button 
            :class="['mode-btn', { active: !isBatchMode }]" 
            @click="isBatchMode = false"
          >
            单个文字
          </button>
          <button 
            :class="['mode-btn', { active: isBatchMode }]" 
            @click="isBatchMode = true"
          >
            批量处理
          </button>
        </div>

        <div v-if="!isBatchMode" class="input-group">
          <input 
            type="text" 
            v-model="text" 
            placeholder="请输入要生成的文字"
            class="text-input"
          />
        </div>
        
        <div v-else class="batch-input-group">
          <textarea
            v-model="batchText"
            placeholder="请输入要批量生成的文字，每行一个"
            class="batch-input"
          ></textarea>
        </div>
        
        <div class="controls">
          <div class="control-item">
            <label>外轮廓颜色</label>
            <input type="color" v-model="outlineColor">
          </div>
          
          <div class="control-item">
            <label>外轮廓厚度 ({{ outlineThickness }})</label>
            <input 
              type="range" 
              v-model.number="outlineThickness"
              min="1" 
              max="40"
            >
          </div>
          
          <div class="control-item">
            <label>外轮廓圆角 ({{ outlineRound }})</label>
            <input 
              type="range" 
              v-model.number="outlineRound"
              min="0" 
              max="30"
            >
          </div>
          
          <div class="control-item">
            <label>白色过渡层厚度 ({{ whiteThickness }})</label>
            <input 
              type="range" 
              v-model.number="whiteThickness"
              min="1" 
              max="30"
            >
          </div>
          
          <div class="control-item">
            <label>白色过渡层圆角 ({{ whiteRound }})</label>
            <input 
              type="range" 
              v-model.number="whiteRound"
              min="0" 
              max="20"
            >
          </div>
          
          <div class="control-item">
            <label>字体大小 ({{ fontSize }})</label>
            <input 
              type="range" 
              v-model.number="fontSize"
              min="50" 
              max="200"
            >
          </div>
        </div>

        <div class="action-buttons">
          <button class="action-btn" @click="exportSettings">导出配置</button>
          <label class="action-btn import-btn">
            导入配置
            <input 
              type="file" 
              accept=".json"
              @change="importSettings"
              style="display: none"
            >
          </label>
          <button class="action-btn" @click="exportImages">导出图片</button>
        </div>
      </div>

      <div v-if="!isBatchMode" class="cloud-text-wrapper">
        <CloudText 
          :text="text || '云朵字'" 
          :outlineColor="outlineColor"
          :outlineThickness="outlineThickness"
          :outlineRound="outlineRound"
          :whiteThickness="whiteThickness"
          :whiteRound="whiteRound"
          :fontSize="fontSize"
        />
      </div>

      <div v-else class="batch-preview">
        <div v-for="(line, index) in batchLines" :key="index" class="cloud-text-wrapper">
          <CloudText 
            :text="line" 
            :outlineColor="outlineColor"
            :outlineThickness="outlineThickness"
            :outlineRound="outlineRound"
            :whiteThickness="whiteThickness"
            :whiteRound="whiteRound"
            :fontSize="fontSize"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloudText from './components/CloudText.vue';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

export default {
    name: 'App',
    components: { CloudText },
    data() {
      return {
        text: '',
        batchText: '',
        isBatchMode: false,
        outlineColor: '#ff6b6b',
        outlineThickness: 20,
        outlineRound: 10,
        whiteThickness: 12,
        whiteRound: 8,
        fontSize: 120
      }
    },
    computed: {
      batchLines() {
        return this.batchText.split('\n').filter(line => line.trim());
      },
      currentSettings() {
        return {
          outlineColor: this.outlineColor,
          outlineThickness: this.outlineThickness,
          outlineRound: this.outlineRound,
          whiteThickness: this.whiteThickness,
          whiteRound: this.whiteRound,
          fontSize: this.fontSize
        };
      }
    },
    methods: {
      async exportImages() {
        const zip = new JSZip();
        const texts = this.isBatchMode ? this.batchLines : [this.text || '云朵字'];
        
        // 创建加载提示
        const loadingEl = document.createElement('div');
        loadingEl.className = 'loading-overlay';
        loadingEl.innerHTML = '正在导出图片...';
        document.body.appendChild(loadingEl);
        
        try {
          for (let i = 0; i < texts.length; i++) {
            const text = texts[i];
            const element = document.querySelector(`.cloud-text-wrapper:nth-child(${i + 1})`);
            
            loadingEl.innerHTML = `正在处理: ${text} (${i + 1}/${texts.length})`;
            
            const canvas = await html2canvas(element, {
              backgroundColor: null,
              scale: 2
            });
            
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            zip.file(`${text}.png`, blob);
          }
          
          const content = await zip.generateAsync({type: 'blob'});
          const link = document.createElement('a');
          link.href = URL.createObjectURL(content);
          link.download = '云朵字.zip';
          link.click();
        } catch (error) {
          alert('导出失败: ' + error.message);
        } finally {
          document.body.removeChild(loadingEl);
        }
      },
      
      exportSettings() {
        const settings = {
          ...this.currentSettings,
          batchText: this.batchText,
          text: this.text
        };
        
        const blob = new Blob([JSON.stringify(settings, null, 2)], {type: 'application/json'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '云朵字配置.json';
        link.click();
      },
      
      importSettings(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const settings = JSON.parse(e.target.result);
            Object.keys(settings).forEach(key => {
              if (key in this) {
                this[key] = settings[key];
              }
            });
          } catch (error) {
            alert('导入失败: ' + error.message);
          }
        };
        reader.readAsText(file);
      }
    }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f5f7fa;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
}

.title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.control-panel {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 15px;
}

.mode-switch {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.mode-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #ff6b6b;
  background: white;
  color: #ff6b6b;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.mode-btn.active {
  background: #ff6b6b;
  color: white;
}

.input-group {
  margin-bottom: 1.5rem;
}

.text-input {
  width: 80%;
  padding: 12px 20px;
  font-size: 1.1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.text-input:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
}

.batch-input-group {
  margin-bottom: 1.5rem;
}

.batch-input {
  width: 80%;
  height: 100px;
  padding: 12px 20px;
  font-size: 1.1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  resize: vertical;
  transition: all 0.3s ease;
}

.batch-input:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.control-item {
  text-align: left;
}

.control-item label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.control-item input[type="range"] {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  outline: none;
}

.control-item input[type="color"] {
  width: 100%;
  height: 40px;
  padding: 2px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

.cloud-text-wrapper {
  padding: 2rem;
  background: #f8fafc;
  border-radius: 15px;
  margin: 1rem auto;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.cloud-text-wrapper:hover {
  transform: translateY(-5px);
}

.batch-preview {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #ff5252;
  transform: translateY(-2px);
}

.import-btn {
  display: inline-block;
  text-align: center;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 1000;
}

@media (max-width: 640px) {
  .controls {
    grid-template-columns: 1fr;
  }
  
  .text-input {
    width: 90%;
  }
  
  .content {
    padding: 1rem;
  }

  .batch-preview {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
  }
}
</style>