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
      let endPoint = store.urlTMDB;

      // richiesta andata a buon fine
      axios.
      get(endPoint)
      .then(res =>{
        // array di 20 
        let result = res.data.results;
        console.log(result);
        store.movieList = result;
      })
      // richiesta non riuscita
      .catch(err =>{
        console.log(err);
      })
    },
  },

  created(){
    this.GetMovie()
  },
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>