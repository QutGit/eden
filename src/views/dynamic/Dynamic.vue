<template>
  <div class="dynamic">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d1331f207b9fb09ae2a276e-big" />
    </div>
    <div class="d-tabs">
      <Tabs :labels="labels" @getTabIndex = "getTabIndex"></Tabs>
    </div>
    <div class="media" v-if="tabIndex == 1"><Media /></div>
    <div class="aptitude" v-if="tabIndex == 2"><Aptitude /></div>
    <div class="business" v-if="tabIndex == 3"><Business /></div>
  </div>
</template>
<script>

import Tabs from '../../components/Tabs';
import Media from './Media';
import Aptitude from './Aptitude';
import Business from './Business';

export default {
  name: 'Dynamic',
  components: { Tabs, Media, Business, Aptitude },
  data: function(){
    return {
      labels:[
        {id: 1, label: '媒体报道'},
        {id: 2, label: '企业资质'},
        {id: 3, label: '商务合作'},
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
    .dynamic{
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