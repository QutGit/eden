<template>
  <div class="community">
    <div class="title">
      <Title bg-text="COOPERATION" title="商务合作" />
    </div>
    <div class="content">
      <div class="b-list">
        <div class="b-item" v-for="(item, index) in communitys" :key="index">
          <div class="avader">
            <img :src="item.qrcode" />
          </div>
          <div class="text">
            <h2 class="text-l">{{item.title}}</h2>
            <p class="text-m text-remark">{{item.message}}</p>
            <span class="text-m">{{item.tips}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getCommunitys } from '../../utils/apis';

export default {
  name: 'Community',
  components: { Title },
  data: function(){
    return {
      communitys: [],
    }
  },
  mounted() {
    this.getCommunitys();
  },
  methods: {
    
    getCommunitys(){
      getCommunitys().then((res) =>{
        if(res.data.code == 200){
          this.communitys = res.data.list;
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
    .community{
      width: 1200px;
      margin: 0 auto;
      min-height: 500px;
      .content{
        width: 100%;
        margin-top: 40px;
        .b-list{
          display: flex;
          justify-content: space-between;
          .b-item{ 
            flex-basis: 592px;
            padding: 40px;
            display: flex;
            border: 1px solid #E7E7E7;
            .avader{
              img{
                width: 160px;
              }
            }
            .text{
              margin-left: 30px;
              h2{
                font-weight:600;
                line-height: 1;
              }
              p{
                margin-top: 30px;
              }
              span{
                display: inline-block;
                background: #EFEFEF;
                padding: 4px;
                margin-top: 24px;
              }
            }
          }
        }
        
      }
    }
</style>