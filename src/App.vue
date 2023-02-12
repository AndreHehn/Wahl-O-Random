<template>
  <div class="card maincard">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style  lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.maincard {
  width: 1024px;
  max-width: 80%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
