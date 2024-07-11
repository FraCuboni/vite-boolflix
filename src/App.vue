<script>
// importo axios
import axios from 'axios';

// importo store
import { store } from './store';

// importo i components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      // rendo lo store utilizzabile in App.vue
      store,
    };
  },

  methods : {
    // creo funzione per estrarre dati con axios
    GetMovie(){
      let endPointMovie = store.urlBestMovies;
      let endPointTV = store.urlTV;

      let VisiblePage = [];

      // opzioni di ricerca (se searchbarInput NON è vuota aggiungi alla ricerca ciò che ha digitato l'utente)
      if(store.searchbarInput !== ''){
        endPointMovie = store.urlTMDB;
        endPointMovie += `&query=${store.searchbarInput}`;
        endPointTV += `&query=${store.searchbarInput}`;
      }else{
        endPointMovie = store.urlBestMovies;
      }

      // richiesta andata a buon fine
      axios.
      get(endPointMovie)
      .then(res =>{
        // array di 20 
        let resultMV = res.data.results;
        console.log(resultMV);
        VisiblePage.push(resultMV);
      }),
      axios.
      get(endPointTV)
      .then(res =>{
        // array di 20 
        let resultTV = res.data.results;
        console.log(resultTV);
        VisiblePage.push(resultTV);
        store.movieList=[...VisiblePage[0],...VisiblePage[1]];
      })
      


      // richiesta non riuscita
      .catch(err =>{
        console.log(err);
      })
      

      
    },

    // log della searchbar
    logBar(){
      console.log(store.searchbarInput);
    }
  },

  created(){
    this.GetMovie()
  },
}
</script>

<template>
  <div>
    <AppHeader @logga="GetMovie" />
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>