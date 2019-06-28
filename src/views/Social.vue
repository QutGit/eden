<template>
  <div class="social">
    <div class="banner">
      <img src="https://static.weibangong.com/files/5d145526ec2e0140512f8161-big" />
    </div>
    <div class="s-title">
      <h2 class="text-xxxl">承担平台责任、贡献社会价值</h2>
      <p class="text-s text-remark">霖珑云科不止帮助企业降本增效，更致力于通过建立数字经济下人力资源服务新业态。</p>
      <p class="text-s text-remark">来带动新型就业、激发市场活力、释放双创新动能、让企业和人才可持续发展，积极承担平台责任、贡献社会价值。</p>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in socials" :key="index">
        
        <div class="avader" v-if="index%2==1">
          <img :src="item.image" />
        </div>

        <div class="text">
          <h2>{{item.title}}</h2>
          <p class="text-l text-remark">{{item.message}}</p>
        </div>

        <div class="avader" v-if="index%2==0">
          <img :src="item.image" />
        </div>

      </div>
    </div>
    <div class="s-title">
      <h2 class="text-xxxl">社会公益</h2>
    </div>
    <div class="list bottom">
      <div class="item" v-for="(item, index) in benefits" :key="index">
        <img class="b-avader" :src="item.image" />
        <div class="b-text" :class="{'yellow': index%2 == 0}">
          <h2>{{item.title}}</h2>
          <p class="text-l text-white">{{item.message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSocials, getBenefits } from '../utils/apis';

export default {
  name: 'Industry',
  components: { },
  data: function(){
    return {
      socials: [],
      benefits: [],
    }
  },
  mounted() {
    this.getSocials();
    this.getBenefits();
  },
  methods: {
    getSocials(){
      getSocials().then((res) =>{
        if(res.data.code == 200){
          this.socials = res.data.list;
        }
      })
    },
    getBenefits(){
      getBenefits().then((res) =>{
        if(res.data.code == 200){
          this.benefits = res.data.list;
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
    .social{
      width: 100%;
      min-height: 500px;
      .banner{
        width: 100%;
        // margin-top: 74px;
        img{
          width: 100%;
          display: block;
        }
      }
      .s-title{
        text-align: center;
        overflow: hidden;
        margin-top: 78px;
        h2{
          margin-bottom: 20px;
        }
        p{
          line-height: 18px;
        }
      }
      .list{
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        .item{
          display: flex;
          margin-top: 46px;
          position: relative;
          >div{
            flex: 1;
          }
          >img{
            width: 100%;
          }
          .avader{
            img{
              width: 600px;
              height: 390px;
              display: block;
            }
          }
          .text{
            padding: 112px 54px 0 54px;
            background: #EBEBEB;
            h2{
              font-weight: 500;
            }
            p{
              margin-top: 28px;
            }
          }
          .b-avader{
            height: 400px;
          }
          .b-text{
            background:rgba(18,130,216,.8);
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 36px 24px;
            width: 500px;
            &.yellow{
              background:rgba(245,166,35,.8);
            }
            h2{
              font-size: 36px;
              color: #fff;
              font-weight: 600;
            }
            p{
              margin-top: 30px;
            }
          }
        }
      }
      .bottom{
        margin-bottom: 128px;
      }
    }
</style>