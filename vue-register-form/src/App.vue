<template>
  <main>
    <img src="./assets/image.jpg" alt="form-image" />
    <RegisterForm />
  </main>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';
export default {
  name: 'App',

  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
}

img {
  margin-bottom: 50px;
  height: 450px;
}

@media only screen and (min-width: 1000px) {
  main {
    flex-direction: row;
    gap: 100px;
  }

  img {
    height: 650px;
  }
}
</style>
