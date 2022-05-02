<template>
  <div class="page-404">
    <not-found-header :text="header" />
    <div class="container">
      <section id="image">
        <not-found-image :path="imageUrl" />
      </section>
      <section id="content">
        <not-found-title :title="title" />
        <not-found-text :text="text" />
        <not-found-button :text="button" />
      </section>
    </div>
    <not-found-footer :username="userName" :userurl="userUrl" />
  </div>
</template>
<script>
import NotFoundHeader from '@/components/404Header/404Header'
import NotFoundImage from '@/components/404Image/404Image'
import NotFoundTitle from '@/components/404Title/404Title'
import NotFoundText from '@/components/404Text/404Text'
import NotFoundButton from '@/components/404Button/404Button'
import NotFoundFooter from '@/components/404Footer/404Footer'

export default {
  components: {
    NotFoundHeader,
    NotFoundImage,
    NotFoundTitle,
    NotFoundText,
    NotFoundButton,
    NotFoundFooter
  },
  props: {
    header: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    button: { type: String, default: '' },
    userName: { type: String, default: '' },
    userUrl: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.page-404 {
  display: flex;
  height: calc(100vh - 16px);
  width: calc(100vw - 16px);
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
}

.container {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  align-content: center;
}

section {
  box-sizing: border-box;
  margin: 0 77px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
