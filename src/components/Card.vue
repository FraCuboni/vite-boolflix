<script>

export default{
    name : 'Card',

    // props per popolare la card
    props : {
        MovieInfo : Object,
    }
}

</script>

<template>
    <div class="box">
        <div class="imgbox">
            <img :src="MovieInfo.poster_path" alt="">
        </div>
        <p>TITLE :{{MovieInfo.title}}</p>
        <p>ORIGINAL TITLE :{{MovieInfo.original_title}}</p>
        <p>LANG :{{MovieInfo.original_language}}</p>
        <p>RATING :{{MovieInfo.vote_average}}</p>
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
        width: 100%;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
}
</style>