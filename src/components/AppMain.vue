<script>
// importo Card
import Card from './Card.vue';

export default{
    name : 'AppMain',

    components : {
        Card,
    } 
}

</script>

<template>
    <div class="container"></div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
</style>