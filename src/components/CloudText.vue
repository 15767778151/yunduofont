<template>
  <div class="cloud-text-container">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <!-- 外轮廓 -->
      <text
        :x="width / 2"
        :y="height / 2"
        dominant-baseline="middle"
        text-anchor="middle"
        :font-size="fontSize"
        fill="none"
        :stroke="outlineColor"
        :stroke-width="outlineThickness"
        stroke-linejoin="round"
        :stroke-miterlimit="outlineRound"
      >{{ text }}</text>
      
      <!-- 白色过渡层 -->
      <text
        :x="width / 2"
        :y="height / 2"
        dominant-baseline="middle"
        text-anchor="middle"
        :font-size="fontSize"
        fill="none"
        stroke="white"
        :stroke-width="whiteThickness"
        stroke-linejoin="round"
        :stroke-miterlimit="whiteRound"
      >{{ text }}</text>
      
      <!-- 主体文字 -->
      <text
        :x="width / 2"
        :y="height / 2"
        dominant-baseline="middle"
        text-anchor="middle"
        :font-size="fontSize"
        fill="black"
      >{{ text }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CloudText',
  props: {
    text: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 150
    },
    fontSize: {
      type: Number,
      default: 100
    },
    outlineColor: {
      type: String,
      default: '#ff6b6b'
    },
    outlineThickness: {
      type: Number,
      default: 20
    },
    outlineRound: {
      type: Number,
      default: 10
    },
    whiteThickness: {
      type: Number,
      default: 12
    },
    whiteRound: {
      type: Number,
      default: 8
    }
  }
}
</script>

<style scoped>
.cloud-text-container {
  display: inline-block;
  font-family: 'Comic Sans MS', cursive;
}

/* 确保SVG文本使用Comic Sans MS字体 */
text {
  font-family: 'Comic Sans MS', cursive;
}
</style> 