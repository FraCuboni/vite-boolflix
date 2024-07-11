import { reactive } from 'vue'

export const store = reactive({

    // array lista film
    movieList: [],
    // url API TMDB
    urlTMDB: "https://api.themoviedb.org/3/discover/movie?api_key=fc18fe3dd65a7dad10aa5103671e23eb&language=it&sort_by=popularity.desc&page=2",

});