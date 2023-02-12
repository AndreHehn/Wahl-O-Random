<template>
  <h1>Der Zufall hat entschieden:</h1>

  <p>{{ result }}</p>
  <div class="p-5"><router-link to="/" class="btn btn-primary">Neustart</router-link></div>
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