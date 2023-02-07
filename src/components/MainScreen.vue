<template>
    <h1>Main</h1>
    <div class="d-flex flex-column align-items-center gap-2">
        <PartyButton v-for="party in parties" :key="party.id" :title="party.title" :partyActive="party.active"
            @click="handleParties(party)"></PartyButton>
    </div>
    <p v-for="party in $store.state.selectedArray" :key="party"> {{ party }}</p>
    <button><router-link to="/result">Weiter</router-link></button>
</template>

<script>
import PartyButton from './PartyButton.vue'
export default {
    name: 'MainScreen',
    components: {
        PartyButton
    },
    data() {
        return {
            parties: [
                { id: 1, active: false, title: 'CDU/CSU' },
                { id: 2, active: false, title: 'SPD' },
                { id: 3, active: false, title: 'DIE LINKE' },
                { id: 4, active: false, title: 'BÜNDNIS 90/DIE GRÜNEN' },
                { id: 5, active: false, title: 'FDP' },
                { id: 6, active: false, title: 'AfD' },
                { id: 7, active: false, title: 'FREIE WÄHLER' },
                { id: 8, active: false, title: 'DKP' },
                { id: 9, active: false, title: 'MENSCHLICHE WELT' },
                { id: 10, active: false, title: 'Tierschutzallianz' },
                { id: 11, active: false, title: 'Die PARTEI' },
                { id: 12, active: false, title: 'BP' },
                { id: 13, active: false, title: 'Gartenpartei' },
                { id: 14, active: false, title: 'Deutsche Konservative' },
                { id: 15, active: false, title: 'MLPD' },
                { id: 16, active: false, title: 'III. Weg' },
                { id: 17, active: false, title: 'SSW' },
                { id: 18, active: false, title: 'LIEBE' },
                { id: 19, active: false, title: 'Bündnis C' },
                { id: 20, active: false, title: 'UNABHÄNGIGE' },
                { id: 21, active: false, title: 'dieBasis' },
                { id: 22, active: false, title: 'Volt' },
                { id: 23, active: false, title: 'Tierschutzpartei' },
                { id: 24, active: false, title: 'Team Todenhöfer' },
                { id: 25, active: false, title: 'ÖDP' },
                { id: 26, active: false, title: 'BüSo' },
                { id: 27, active: false, title: 'LD' },
                { id: 28, active: false, title: 'WiR2020' },
                { id: 29, active: false, title: 'FAMILIE' },
                { id: 30, active: false, title: 'Gesundheitsforschung' },
                { id: 31, active: false, title: 'BÜNDNIS21' },
                { id: 32, active: false, title: 'PIRATEN' },
                { id: 33, active: false, title: 'V-Partei³' },
                { id: 34, active: false, title: 'DiB' },
                { id: 35, active: false, title: 'NPD' },
                { id: 36, active: false, title: 'SGV' },
                { id: 37, active: false, title: 'PdF' },
                { id: 38, active: false, title: 'B*' },
                { id: 39, active: false, title: 'Die Grauen' },
                { id: 40, active: false, title: 'Graue Panther' },
                { id: 41, active: false, title: 'THP' },
                { id: 42, active: false, title: 'LKR' },
                { id: 43, active: false, title: 'SGP' },
                { id: 44, active: false, title: 'Volksabstimmung' },
                { id: 45, active: false, title: 'du.' },
                { id: 46, active: false, title: 'BÜRGERBEWEGUNG' },
                { id: 47, active: false, title: 'LfK' },
                { id: 48, active: false, title: 'DM' },
                { id: 49, active: false, title: 'KlimalisteBW' },
                { id: 50, active: false, title: 'sonstige' },
            ]
        }
    },
    methods: {
        handleParties(party) {
            if (this.$store.state.selectedArray.includes(party.title)) {
                this.$store.commit('deleteFromArray', party.title)
                this.parties[party.id - 1].active = false;
            }
            else {
                this.$store.commit('pushToArray', party.title)
                this.parties[party.id - 1].active = true;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>