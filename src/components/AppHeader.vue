<script>

export default{
    name : 'AppHeader',
}

</script>

<template>  

    <div class="container">
        <div class="box">
            <h1>BOOLFIX</h1>
        </div>
        <div class="box">
            <input type="text" placeholder="Cerca">
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container{
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
    background-color: $secondary_c;

    .box{

        h1{
            color: $primary_c;
        }

    }
}

</style>