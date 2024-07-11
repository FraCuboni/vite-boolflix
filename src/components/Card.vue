<script>

export default{
    name : 'Card',
}

</script>

<template>
    <div class="box">
        <div class="imgbox"></div>
        <p>title</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.box{
    border: 1px solid white;
    width: calc(100% / 5 - 10px);

    .imgbox{
        background-color: red;
        width: 100%;
        height: 20px;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
}
</style>