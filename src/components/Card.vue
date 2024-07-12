<script>

export default{
    name : 'Card',

    // props per popolare la card
    props : {
        MovieInfo : Object,
    },

    methods : {
        starRating(numberToDevide){
            return Math.ceil(numberToDevide / 2);
        }
    }
}       

</script>

<template>
    <div class="box">
        <div class="imgbox">
            <img v-if="MovieInfo && MovieInfo.poster_path" :src=" `https://image.tmdb.org/t/p/w342${MovieInfo.poster_path}`" alt="">
            <div class="image-holder" v-else>
                <p>?</p>
            </div>
            <div class="p-elements">
                <p class="title">{{MovieInfo.title}}{{ MovieInfo.name }}</p>
                <p v-if="MovieInfo.title !== MovieInfo.original_title">"{{MovieInfo.original_title}}{{MovieInfo.original_name}}"</p>
                <div class="lang">
                    <div :class="MovieInfo.original_language"></div>
                </div>
                <p>RATING : {{starRating(MovieInfo.vote_average)}}</p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.box{
    position: relative;
    width: calc(100% / 4);
    padding: 10px;
    padding-bottom: 15px;

    .imgbox{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: 200ms;

        &:hover{

            img,
            .image-holder{
                filter: brightness(0.3) contrast(1) grayscale(5);
                scale: 1.05;
            }

            .p-elements{
                opacity: 1;
            }
        }

        img{
            transition: 200ms;
        }

        .image-holder{
            width: 100%;
            aspect-ratio: 1/1.5;
            background-color: #303030;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 200ms;


            p{
                color: $tertiary_c;
                font-size: 200px;
            }

            

            
        }

        .p-elements{
            opacity: 0;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            overflow-y: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-height: 100%;
            transition: 300ms;
            p{
                color: white;
                text-align: center;
            }

            .title{
                font-size: 30px;
                text-align: center;
            }
            .lang{
                aspect-ratio: 3/2;
                width: 100px;

                div{
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}
</style>