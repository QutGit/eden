<template>
  <section class="app-main" :class="{'mt': menuType == 2}">
    <transition name="fade" :duration="500" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'AppMain',
  data: function(){
    return {
      menuType: 1
    }
  },
  watch: {
    '$route'(to, from){
      if(to.fullPath == '/'){
        setTimeout(() =>{
          this.menuType = 1;
        },500)
        
      }else{
        this.menuType = 2;
      }
    }
  },
  computed: {
    ...mapGetters([
      'menu_type'
    ]),
    cachedViews() {
      // include属性表示只有name属性为cachedViews的组件会被缓存(注意是组件的name名，不是路由名称)
      // exclude属性跟上面正好想反
      // return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
/*
  transition: 动画过度过程的6个类名
  v-enter：进入过度的开始状态，在元素被插入之前生效，在元素被插入之后的下一帧移除
*/

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.app-main {
  min-height: calc(100vh - 284px);
  width: 100%;
  position: relative;
  overflow: hidden;
  // margin-top: 74px;
}
.mt{
  margin-top: 74px;
}

</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
