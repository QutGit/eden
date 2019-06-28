<template>
  <div class="product">
    
    <div class="p-right">
      <div class="p-item" :class="{'active': item.active}" v-for="(item, index) in allProducts" :key="index" @mouseover="hover(item)" @mouseout="noHover(item)">
        <div class="avader">
          <img :src="item.logo" />
        </div>
        <div class="text">
          <h2>{{item.title}}</h2>
          <p class="text-m text-remark">{{item.message}}</p>
          <a v-if="item.active" class="text-m text-blue" :href="item.url">了解详情</a>
        </div>  
        <div class="skip" v-if="item.active">
          <img src="../assets/right.png" />
        </div>
      </div>
    </div>

    <div class="p-left">
      <div v-for="(item, index) in allProducts" :key="index + 's'">
        <img v-if="item.active" :src="item.image" />
      </div>
    </div>  
  </div>
</template>
<script>
import { getAllProducts } from '../utils/apis';

export default {
  name: 'product',
  components: { },
  data: function(){
    return{
      allProducts: [],
      active: false,
    }
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts(){
      getAllProducts().then((res) =>{
        if(res.data.code == 200){
          this.allProducts = res.data.list;
        }
      })
    },
    hover(item){
      this.$nextTick(() =>{
        this.allProducts.forEach((p) =>{
          this.$set(p, 'active', false);
        })
        this.$set(item, 'active', true);
      })
    },
    noHover(item){
      // this.$set(item, 'active', false);
    }
  },
}
</script>
<style lang="scss" scoped>
    .product{
      width: 1200px;
      margin: 96px auto;
      min-height: 720px;
      position: relative;
      .p-right{
        // float: right;
        position: absolute;
        right: 0;
        top: 0;
        width: 494px;
        z-index: 21;
        .p-item{
          padding: 50px 0 50px 88px;
          width: 484px;
          height: 180px;
          display: flex;
          background: url(../assets/product-right-item.png) no-repeat;
          background-size: 92% 100%;
          background-position: 26px 0;
          position: relative;

          .avader{
            width: 60px;
            height: 60px;
            img{
              width: 100%;
              vertical-align: middle;
            }
          }

          .text{
            margin-left: 8px;
            h2{
              font-size: 26px;
              font-weight: 500;
              color:rgba(53,53,53,.5);
              line-height: 1;
            }
            p{
              line-height: 30px;
            }
            a{
              text-decoration: underline;
              margin-top: 4px;
              display: inline-block;
            }
          }

          .skip{
            position: absolute;
            right: 10px;
            top: 10px;
            width: 70px;
            height: 160px;
            background: #E0F2FF;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              height: 20px;
              // width: 20px;
            }
          }

          &.active{
            background: url(../assets/product-right-bg.png) no-repeat;
            background-size: 100% 100%;
            height: 180px;
            .p-item{
              .text{
                a{display: block}
              }
            }
          }
        }
      }
      .p-left{
        // float: left;
        text-align: center;
        position: absolute;
        top: 0;
        left: 26px;
        z-index: 20;
        width: 706px;
        height: 720px;
        background:linear-gradient(145deg,rgba(206,235,251,.1) 0%,rgba(160,210,245,.1) 100%);
        border:1px solid rgba(151,151,151,.1);
        img{
          width: 656px;
          margin-top: 60px;
        }
      }
    }
</style>