<template>
  <h4>{{ text }}</h4>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
h4 {
  font-family: 'Space Mono', monospace;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
}
</style>
