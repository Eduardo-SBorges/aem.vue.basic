<template>
  <img :src="path" />
</template>
<script>
export default {
  props: {
    path: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
img {
  max-width: 40vw;
  height: auto;
}
</style>
