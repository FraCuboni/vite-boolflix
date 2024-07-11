<script>
// importo lo store
import { store } from '../store'

// importo Card
import Card from './Card.vue';

export default{
    name : 'AppMain',

    components : {
        Card,
    },

    data(){
        return{
            store,
        }
    },
}

</script>

<template>
    <div class="container">
        <Card v-for="movie in store.movieList" :key="movie.id" :MovieInfo="movie"/>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container{
    background-color: $tertiary_c;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>