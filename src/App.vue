<template>
  <div id="app">
    <div id="nav">
      <AppHeader />
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  created() {
    this.$store.dispatch('getCoins')
    this.$store.dispatch('getMarketData')
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style src="@/assets/styles/app.css"></style>

<style lang="scss">
#app {
  width: 95%;
  margin: 0 auto;
  #nav {
    position: fixed;
  }
}
.page-enter-active,
.page-leave-active {
  // transition: opacity 0.25s;
  transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.page-enter,
.page-leave-active {
  // opacity: 0;
  opacity: 0;
  transform: translate(30px, 0);
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.25s;
}

.layout-enter,
.layout-leave-active {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.slideDown-enter-active,
.slideDown-leave-active {
  transition: all 0.25s ease-in;
}

.slideDown-enter,
.slideDown-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.25s ease-in;
}

.slideUp-enter,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
