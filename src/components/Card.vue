<script>

export default {
  name: 'Card',

  // props per popolare la card
  props: {
    MovieInfo: Object,
  },

  methods: {
    starRating(numberToDivide) {
      let fullStars = Math.ceil(numberToDivide / 2);
      let emptyStars = 5 - fullStars;
      const starsF = [];
      const starsE = [];

      for (let i = 0; i <= 5; i++) { 
        if(fullStars >= i){
            starsF.push(i);
        }else{
            starsE.push(i);
        }
      }

      return [starsF.length - 1 , starsE.length];
    },
  },
};      

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
                <p>RATING :
                    <font-awesome-icon v-for="star in starRating(MovieInfo.vote_average)[0]" :icon="['fas', 'star']" />
                    <font-awesome-icon v-for="star in starRating(MovieInfo.vote_average)[1]" :icon="['far', 'star']" />
                </p>
                <p class="description">{{ MovieInfo.overview }}</p>
                <div class="lang">
                    <div :class="MovieInfo.original_language">{{ MovieInfo.original_language }}</div>
                </div>
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
            height: 90%;
            width: 90%;
            transition: 300ms;
            p{
                color: white;
            }

            .title{
                font-size: 30px;
            }
            .lang{
                aspect-ratio: 3/2;
                width: 100px;
                position: absolute;
                right: 0;
                bottom: 10%;
                color: white;
                text-align: right;

                display: flex;
                align-items: center;
                justify-content: center;

                div{
                    opacity: 0.5;
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