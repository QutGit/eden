<template>
  <div class="wck-tabs">
    <div class="content">
      <div v-for="(item, index) in labels" :key="index" class="wck-tab text-s" :class="{'active': tabIndex == item.id}" @click="getTabIndex(item)">{{item.label}}</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Tabs',
  components:{  },
  props: {
    labels: {
      type: Array,
      required: true,
    },

  },
  data: function(){
    return{
      tabIndex: 1
    }
  },
  methods: {
    getTabIndex(item){
      this.tabIndex = item.id;
      this.$emit('getTabIndex', item);
    }
  }
}
</script>
<style lang="scss" scoped>
    .wck-tabs{
      text-align: center;
      width: 100%;

      .content {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background: #FAFAFA;
        display: flex;
        justify-content: center;


        .wck-tab{
          float: left;
          padding: 24px 40px;
          color: #4A4A4A;
          position: relative;
          cursor: pointer;

          &:last-child::after{
            display: none;
          }

          &.active{
            background: #fff;
            font-weight:600;
            color: $blue;
          }

          &::after{
            content: ' ';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px; 
            height: 10px;
            background: #ccc;
          }
        }
        
      }
    }
</style>