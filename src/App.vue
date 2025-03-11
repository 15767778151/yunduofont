<template>
  <div class="app-container">
    <div class="content">
      <h1 class="title">云朵字生成器</h1>
      
      <div class="control-panel">
        <div class="input-group">
          <input 
            type="text" 
            v-model="text" 
            placeholder="请输入要生成的文字"
            class="text-input"
          />
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
      </div>

      <div class="cloud-text-wrapper">
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
    </div>
  </div>
</template>

<script>
import CloudText from './components/CloudText.vue';

export default {
    name: 'App',
    components: { CloudText },
    data() {
      return {
        text: '',
        outlineColor: '#ff6b6b',
        outlineThickness: 20,
        outlineRound: 10,
        whiteThickness: 12,
        whiteRound: 8,
        fontSize: 120
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
}
</style>