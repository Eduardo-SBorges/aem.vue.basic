<template>
  <img :src="imagePath" />
</template>
<script>
export default {
  props: {
    imagePath: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
img {
  //
}
</style>
