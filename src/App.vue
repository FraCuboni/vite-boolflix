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