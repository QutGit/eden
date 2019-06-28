<template>
  <div class="hr">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1431469fcc4747067ad8ba-big" />
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div v-if="tabIndex == 1">
      <keep-alive>
        <Industry />
      </keep-alive>
    </div>
    <div v-if="tabIndex == 2">
      <keep-alive>
        <Community />
      </keep-alive>
    </div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Industry from './Industry';
import Community from './Community';

export default {
  name: 'Hr',
  components: { Tabs, Industry, Community },
  data: function(){
    return {
      labels:[
        {id: 1, label: '行业资讯'},
        {id: 2, label: '社群'},
      ],
      tabIndex: 1,
    }
  },
  mounted() {
    
  },
  methods: {
    // tab切换
    getTabIndex(item){
      this.tabIndex = item.id;
    }
  },
}
</script>
<style lang="scss" scoped>
    .hr{
      width: 100%;
      margin-bottom: 128px;
      .banner{
        width: 100%;
        img{
          width: 100%;
          display: block;
        }
      }
    }
</style>