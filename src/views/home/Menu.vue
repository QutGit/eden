<template>
  <div class="navbar" :class="{'white-bg': menuType == 2}" >
    <div class="menu clearfix">
      <div class="logo">
        <a href="/">
          <img v-if="menu_type == 1" src="../../assets/logo-w.png" />
          <img v-if="menu_type == 2" src="../../assets/logo.png" />
          <span  class="text-m" :class="{'text-white': menu_type == 1,'text-gray': menu_type == 2}"  >科技赋能管理{{menu_type}}</span>
        </a>
      </div>
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <router-link  class="text-m" :class="{'text-white': menu_type == 1,'text-gray': menu_type == 2}"  active-class="active" :to="{ path: item.url }" exact >{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import store from '../../store/index';

export default {
  name: "Menu",
  props:['menuType'],
  data: function(){
    return {
      menus: [],
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'menu_type'
    ])
  },
  
  mounted() {
    let menus = this.getMenus(this.permission_routes)
    this.menus = menus;

    
  },
  methods: {
    getMenus(routes){
      let menus = [];
      routes.forEach(item => {
        if(item.children){
          item.children.forEach((c) =>{
            menus.push({url: c.path ? c.path : '/', name: c.meta.title});
          })
        }
      });
      return menus;
    }
  }
};
</script>

<style lang="scss" scoped>
.white-bg{
  background: $white!important;
}
.navbar {
  background: none;
  width: 100%;
  height: 74px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  .menu{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    .logo{
      // flex-basis: 280px;
      text-align: right;
      padding-left: 5px;
      a{
        display: inline-block;
        width:100%;
        height: 100%;
        line-height: 74px;
        &:hover{
          text-decoration: none;
        }
        img{
          width: 178px;
          height: 30px;
          vertical-align: middle;
        }
        span{
          font-weight:400;
          vertical-align: middle;
          margin-left: 22px;
        }
      }
    }
    ul {
      flex: 1;
      overflow: hidden;
      display: inline-block;
      margin-left: 280px;
      li {
        float: left;
        padding: 0 32px;
        line-height: 74px;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          &:hover{
            text-decoration: none;
            color: $blue!important;
          }
        }
        
        &:last-child{
          padding-right: 0;
        }
        &:first-child{
          padding-left: 0;
        }
      }
    }
    .active{
      color:$blue!important;
    }
  }
}
</style>