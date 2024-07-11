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
    <div class="container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
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