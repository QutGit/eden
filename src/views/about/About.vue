<template>
  <div class="about">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1493b5933c57f3b76b6839-big" />
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div class="media" v-if="tabIndex == 1"><Introduction /></div>
    <div class="aptitude" v-if="tabIndex == 2"><Team /></div>
    <div class="business" v-if="tabIndex == 3"><Values /></div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Team from './Team';
import Values from './Values';
import Introduction from './Introduction';

export default {
  name: 'About',
  components: { Tabs, Team, Values,Introduction },
  data: function(){
    return {
      labels:[
        {id: 1, label: '公司简介'},
        {id: 2, label: '专家团队'},
        {id: 3, label: '霖珑价值观'},
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
    .about{
      width: 100%;
      margin-top: 74px;
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