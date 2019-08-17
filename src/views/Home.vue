<template>
  <div class="page-wrapper">
    <img alt="logo-bento" class="logo" src="@/assets/img/biosprout.png">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: function() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo{
    justify-self: center;
  }
}
</style>
