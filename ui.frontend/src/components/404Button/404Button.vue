<template>
  <button class="btn" @click="goToHome">{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  },
  methods: {
    goToHome () {
      console.info('TODO: Redirect to home')
    }
  }
}
</script>
<style lang="scss" scoped>
button.btn {
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 24px 43px;
  width: 216px;
  color: #fff;
  background-color: #333;
  transition: background-color 0.2s ease-in, box-shadow 0.1s ease-in-out;

  &:hover {
    background-color: #777;
    transition: background-color 0.1s ease-in;
  }

  &:active {
    box-shadow: inset 0 0 20px -3px #0008;
  }
}
</style>
