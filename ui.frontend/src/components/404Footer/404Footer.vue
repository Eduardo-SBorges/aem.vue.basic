<template>
  <h6>
    created by <a :href="userurl">{{ username }}</a> - devChallenges.io
  </h6>
</template>
<script>
export default {
  props: {
    username: { type: String, default: 'Edit me!' },
    userurl: { type: String, default: '#' }
  }
}
</script>
<style lang="scss" scoped>
h6 {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  color: #bdbdbd;

  a {
    font-weight: 700;
    color: unset;
  }
}
</style>
