<template>
  <div class="cloud-font-generator">
    <div class="control-panel">
      <h2>云朵字体生成器</h2>
      
      <div class="form-group">
        <label for="text-input">文本内容：</label>
        <input 
          id="text-input" 
          v-model="text" 
          type="text" 
          placeholder="请输入要转换的文字"
          @input="generateCloudFont"
        />
      </div>
      
      <div class="form-group">
        <label for="font-size">字体大小：</label>
        <input 
          id="font-size" 
          v-model.number="fontSize" 
          type="range" 
          min="20" 
          max="200" 
          @input="generateCloudFont"
        />
        <span>{{ fontSize }}px</span>
      </div>
      
      <div class="form-group">
        <label for="outer-stroke-width">外层描边粗细：</label>
        <input 
          id="outer-stroke-width" 
          v-model.number="outerStrokeWidth" 
          type="range" 
          min="1" 
          max="50" 
          @input="generateCloudFont"
        />
        <span>{{ outerStrokeWidth }}px</span>
      </div>
      
      <div class="form-group">
        <label for="inner-stroke-width">内层描边粗细：</label>
        <input 
          id="inner-stroke-width" 
          v-model.number="innerStrokeWidth" 
          type="range" 
          min="1" 
          max="30" 
          @input="generateCloudFont"
        />
        <span>{{ innerStrokeWidth }}px</span>
      </div>
      
      <div class="form-group">
        <label for="outer-stroke-color">外层描边颜色：</label>
        <input 
          id="outer-stroke-color" 
          v-model="outerStrokeColor" 
          type="color" 
          @input="generateCloudFont"
        />
      </div>
      
      <div class="form-group">
        <label for="inner-stroke-color">内层描边颜色：</label>
        <input 
          id="inner-stroke-color" 
          v-model="innerStrokeColor" 
          type="color" 
          @input="generateCloudFont"
        />
      </div>
      
      <div class="form-group">
        <label for="fill-color">文字颜色：</label>
        <input 
          id="fill-color" 
          v-model="fillColor" 
          type="color" 
          @input="generateCloudFont"
        />
      </div>
      
      <div class="form-group">
        <label for="bg-color">背景颜色：</label>
        <input 
          id="bg-color" 
          v-model="bgColor" 
          type="color" 
          @input="generateCloudFont"
        />
      </div>
      
      <button class="export-btn" @click="exportImage">导出图片</button>
    </div>
    
    <div class="preview-panel" :style="{ backgroundColor: bgColor }">
      <div ref="canvasContainer" class="canvas-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudFontGenerator',
  data() {
    return {
      text: 'busy',
      fontSize: 138,
      outerStrokeWidth: 30,
      innerStrokeWidth: 15,
      outerStrokeColor: '#FFD700', // 黄色
      innerStrokeColor: '#FFFFFF', // 白色
      fillColor: '#000000', // 黑色
      bgColor: '#FFFFFF', // 白色
      canvas: null,
      ctx: null
    }
  },
  mounted() {
    this.initCanvas();
    this.generateCloudFont();
    
    // 监听窗口大小变化，重新调整画布
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    // 移除事件监听
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // 处理窗口大小变化
    handleResize() {
      this.initCanvas();
      this.generateCloudFont();
    },
    
    // 初始化画布
    initCanvas() {
      // 移除旧的canvas（如果存在）
      if (this.canvas) {
        this.$refs.canvasContainer.removeChild(this.canvas);
      }
      
      // 创建新的canvas
      this.canvas = document.createElement('canvas');
      
      // 设置画布大小
      const containerWidth = this.$refs.canvasContainer.clientWidth;
      const containerHeight = this.$refs.canvasContainer.clientHeight;
      
      this.canvas.width = Math.max(800, containerWidth);
      this.canvas.height = Math.max(400, containerHeight);
      
      this.$refs.canvasContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
    },
    
    // 生成云朵字体
    generateCloudFont() {
      if (!this.ctx || !this.text) return;
      
      // 清空画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // 设置字体
      const fontStyle = `bold ${this.fontSize}px STXinwei, "华文新魏"`;
      this.ctx.font = fontStyle;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      
      // 计算文本宽度
      const textWidth = this.ctx.measureText(this.text).width;
      
      // 如果文本宽度超过画布宽度，调整画布大小
      if (textWidth + 200 > this.canvas.width) {
        this.canvas.width = textWidth + 200;
        // 重新获取上下文，因为画布大小改变会重置上下文
        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = fontStyle;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
      }

      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;

      // 1. 绘制外层黄色描边
      this.ctx.strokeStyle = this.outerStrokeColor;
      this.ctx.lineWidth = this.outerStrokeWidth;
      this.ctx.lineJoin = 'round';
      this.ctx.miterLimit = 2;
      this.ctx.strokeText(this.text, centerX, centerY);

      // 2. 绘制内层白色描边
      this.ctx.strokeStyle = this.innerStrokeColor;
      this.ctx.lineWidth = this.innerStrokeWidth;
      this.ctx.strokeText(this.text, centerX, centerY);

      // 3. 绘制内部文字
      this.ctx.fillStyle = this.fillColor;
      this.ctx.fillText(this.text, centerX, centerY);
    },
    
    // 导出图片
    exportImage() {
      if (!this.canvas) return;
      
      // 创建临时链接
      const link = document.createElement('a');
      link.download = '云朵字体.png';
      link.href = this.canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
.cloud-font-generator {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

@media (min-width: 768px) {
  .cloud-font-generator {
    flex-direction: row;
  }
}

.control-panel {
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
}

.preview-panel {
  flex: 2;
  min-height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.canvas-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.canvas-container canvas {
  max-width: 100%;
  max-height: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-family: STXinwei, "华文新魏", sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: STXinwei, "华文新魏", sans-serif;
}

input[type="range"] {
  width: 80%;
  vertical-align: middle;
}

input[type="color"] {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.export-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s;
  font-family: STXinwei, "华文新魏", sans-serif;
}

.export-btn:hover {
  background-color: #45a049;
}
</style> 