<template>
  <h1>Result</h1>

  <p>{{ result }}</p>
  <button><router-link to="/">Weiter</router-link></button>
</template>

<script>
export default {
  name: 'ResultScreen',
  data() {
    return {
      result: ''
    }
  },
  methods: {
    randomize() {
      this.result = this.$store.state.selectedArray[Math.floor(Math.random() * this.$store.state.selectedArray.length)];
    }
  },

  beforeMount() {
    this.randomize()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>