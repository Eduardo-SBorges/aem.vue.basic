<template>
  <header>{{ text }}</header>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
header {
  font-family: 'Inconsolata', monospace;
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333;
  margin: 40px 77px;
}
</style>
