<template>
    <div class="party-button p-3" v-bind:class="{ 'notsend': !partyActive }">{{ title }}</div>
</template>

<script>
export default {
    name: 'PartyButton',
    props: ['partyActive', 'title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.party-button {
    background-color: aquamarine;
    border: 1px solid aqua;
    border-radius: 3px;
    width: 200px;
    cursor:pointer;

    &:hover {
        background-color: aqua;
    }
}

.notsend {
    filter: grayscale(100%);
}
</style>