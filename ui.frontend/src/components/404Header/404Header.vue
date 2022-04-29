<template>
  <h2>{{ text }}</h2>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

h2 {
  font-family: 'Inconsolata', monospace;
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333;
}
</style>
