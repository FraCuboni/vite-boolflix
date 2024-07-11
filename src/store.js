import { reactive } from 'vue'

export const store = reactive({

    // array lista film
    movieList: [],
    // url API TMDB

    // movies
    urlTMDB: "https://api.themoviedb.org/3/search/movie?api_key=fc18fe3dd65a7dad10aa5103671e23eb&language=it&page=1",

    urlBestMovies: "https://api.themoviedb.org/3/discover/movie?api_key=fc18fe3dd65a7dad10aa5103671e23eb&language=it&sort_by=popularity.desc&page=1",

    // tv series
    urlTV: "https://api.themoviedb.org/3/search/tv?api_key=fc18fe3dd65a7dad10aa5103671e23eb&language=it&page=1",

    Parameters: {

        sarchbarSorted: '&query=',

        movieByPopularity: '&sort_by=popularity.desc&page=1',
    },

    // movie searchbar
    searchbarInput: '',

});