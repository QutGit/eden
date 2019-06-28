<template>
  <div class="home">

    <div class="banner">
      <img src="https://static.weibangong.com/files/5d0afefb16306aab1ba908cc-big" />
      <div class="b-info text-white">
        <p class="text-xxxl">为财政新政下的企业提供合法合规的用工财税综合解决方</p>
        <h2 class="text-max">数字经济下人力资源服务新业态</h2>
      </div>
    </div>

    <div class="numbers">
      <div class="n-data">
        <div class="n-item" v-for="(item, index) in numbers" :key="index"> 
          <div class="n-info">
            <div class="n-top text-blue ">
              <count-to class="text-xxxxl" :start-val="0" :end-val="item.number" :duration="duration"/>
              <i class="text-s">{{item.unit}}</i>
            </div>
            <div class="n-btm">
              <span class="text-gray text-m">{{item.message}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="wrap">
      <div class="products">
        <div class="title">
          <Title bg-text="PRODUCT" title="产品与服务" remark="用工财税综合解决方案 合规、降本、增效、省事" />
        </div>
        <div class="p-cards">
          <div class="p-item" v-for="(item, index) in products" :key="index">
            <div class="p-top">
              <img :src="item.icon" />
              <p class="text-l text-white">{{item.title}}</p>
            </div>
            <div class="p-btm">
              <div class="p-text" v-for="(info, idx) in item.messages" :key="idx">
                <img v-if="index%2==0" src="../../assets/check-blue.png" />
                <img v-if="index%2!=0" src="../../assets/check-yellow.png" />
                <p class="text-m text-gray">{{info.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantage">
        <div class="title">
          <Title bg-text="ADVANTAGE" title="我们的优势" remark="科技赋能专业 服务创造价值" />
        </div>
        <div class="a-cards">
          <div class="a-item" v-for="(item, index) in advantages" :key="index">
            <div class="a-top">
              <img src="../../assets/advantages.png" />
              <h2 class="text-xxxl text-gray">{{item.title}}</h2>
            </div>
            <div class="a-btm">
              <p class="text-m text-remark">{{item.message}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customers">
      <div class="title">
        <Title bg-text="CUSTOMER" title="他们眼中的霖珑" remark="1000家优秀企业的选择，数十万员工的认可" />
      </div>
      <div class="c-wrap">
        <div class="c-content">
          <h2>科技赋能管理</h2>
          <img class="customer-bg" src="../../assets/customer.png" />
          <div class="c-cards">
            <div class="c-item" v-for="(item, index) in companys" :key="index">
              <img class="dot-1" src="../../assets/dot-1.png" alt="" />
              <img class="dot-2" src="../../assets/dot-2.png" alt="" />
              <div class="logo">
                <img :src="item.logo" />
              </div>
              <div class="message text-s text-remark">{{item.message}}</div>
              <div class="company text-s">
                <b>{{item.company}}</b>
                <span>{{item.duty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap">
      <div class="dynamic">
        <div class="title">
          <Title bg-text="DYNAMIC" title="霖珑声音" remark="行业内新闻资讯" />
        </div>
      </div>

      <div class="cooperative">
        <div class="title">
          <Title bg-text="COOPERATIVE" title="合作伙伴" remark=" " />
        </div>
        <div class="parners"></div>
      </div>

      <div class="contactus">
        <div class="title">
          <Title bg-text="CONTACTUS" title="联系我们" remark=" " />
        </div>
        <div class="forms">
          <input class="text-xxl" type="text" placeholder="姓名" />
          <input class="text-xxl" type="text" placeholder="电话" />
          <div class="select">
            <span>您要来了解的产品</span>
            <span class="right">▼</span>
          </div>
          <div class="options text-gray">
            <p><span>微办公</span></p>
            <p><span>乐接活</span></p>
            <p><span>不木钱包</span></p>
            <p><span>汇社保</span></p>
          </div>
        </div>
        <button class="button">提交</button>
      </div>
    </div>

    <div class="service">
      <img src="../../assets/service.png" alt="">
    </div>

    
    <!-- <div>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name='list' tag="p">
        <p v-for="(item,index) in list" v-bind:key="index" class="list-item">
          {{ item.title }}
        </p>
      </transition-group>
    </div> -->
    
  </div>
</template>

<script>
import _ from 'lodash';
import CountTo from 'vue-count-to'
import Title from '../../components/Title';
import store from '../../store/index'
import { getNumbers, getProducts, getAdvantages, getCompanys } from '../../utils/apis';

export default {
  name: 'home',
  components: { CountTo, Title },
  data: function(){
    return{
      list: [],
      number: 0,
      duration: 1000,
      menuType: 1,
      numbers: [],
      products: [],
      advantages: [],
      companys: [],
    }
  },
  computed: {
    
  },
  mounted() {
    let self = this;
    window.addEventListener('scroll', (e) =>{
      if(this.$route.path !== '/') return;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let menuType = self.menuType;
      
      if(t > 74) {
        if(menuType == 2) return;
        store.dispatch('permission/getMenuType',2)
        self.menuType = 2;
      }else{
        if(menuType == 1) return;
        self.menuType = 1;
        store.dispatch('permission/getMenuType',1)
      }

      console.log('scrolltop', t);
      console.log('menuType', self.menuType);
    })

    

    this.getDatas();
    this.getProducts();
    this.getAdvantages();
    this.getCompanys();

  },
  methods: {
    getDatas(){
      getNumbers().then((res) =>{
        if(res.data.code == 200){
          this.numbers = res.data.list;
        }
      })
    },
    getProducts(){
      getProducts().then((res) =>{
        if(res.data.code == 200){
          this.products = res.data.list;
        }
      })
    },
    getAdvantages(){
      getAdvantages().then((res) =>{
        if(res.data.code == 200){
          this.advantages = res.data.list;
        }
      })
    },
    getCompanys(){
      getCompanys().then((res) =>{
        if(res.data.code == 200){
          this.companys = res.data.list;
        }
      })
    },
    shuffle(){
      this.list = _.shuffle(this.list)
    },
    changeNumber(){
      this.number = 200000;
      this.menuType = this.menuType == 2 ? 1 : 2;
    }
  }
}
</script>
<style lang="scss" scoped>
    .home{
      .service{
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 100px;
        z-index: 9999;
        img{
          width: 60px;
          height: 60px;
        }
      }

      .banner{
          position: relative;
          width: 100%;
          img{
            width: 100%;
            display: block;
          }
          .b-info{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            text-align: center;
            p{
              letter-spacing:8px;
              text-shadow:0px 0px 4px rgba(0,0,0,0.29);
              font-weight: 300;
            }
            h2{
              font-weight: 600;
              letter-spacing:1px;
              text-shadow:1px 1px 20px rgba(0,61,166,1);
            }
          }
      }

      .numbers{
        width: 100%;
        background: #F5F5F5;
        padding: 30px 0;
        .n-data{
          display: flex;
          .n-item{
            .n-info{
              display: inline-block;
              width: auto;
              text-align: left;
            }
            flex: 1;
            text-align: center;
            .n-top{
              font-size: 0;
              span{
                display: inline-block;
              }
            }
          } 
        }
      }
      
      .wrap{
        width: 1200px;
        margin: 0 auto;
        
        .products{
          width: 100%;
          margin-top: 10px;
          .p-cards{
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            
            .p-item{
              width: 250px;
              flex-basis: 250px;
              box-shadow:0px 20px 60px 10px rgba(13,37,62,0.05);
              border-radius:4px;

              &:nth-of-type(2n) .p-top{
                background: $orange;
              }
              &:hover{
                box-shadow:0px 0px 10px 10px rgba(32,0,0,0.06);
              }
              .p-top{
                background: $blue;
                height: 114px;
                text-align: center;
                img{
                  width: 36px;
                  height: 36px;
                  margin-top: 30px;
                }
                p{
                  margin-top: 10px;
                }
              }
              .p-btm{
                padding: 36px 24px 50px;
                .p-text{
                  height: 50px;
                  position: relative;
                  p{
                    line-height: 20px;
                    display: inline-block;
                    width: 160px;
                    position: absolute;
                    right: 0;
                  }
                  img{
                    width: 40px;
                    position: absolute;
                    left: 0;
                    top: -6px;
                  }
                }
              }
            }
          }
        }

        .advantage{
          margin-top: 50px;
          .a-cards{
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            .a-item{
              width: 350px;
              flex-basis: 350px;
              box-shadow:0px 20px 60px 10px rgba(13,37,62,0.05);
              border-radius:4px;
              text-align: left;
              padding: 50px 30px 44px;
              position: relative;
              &:hover{
                box-shadow:0px 0px 10px 10px rgba(32,0,0,0.06);
                &::after{
                  content: ' ';
                  position: absolute;
                  bottom: 0;
                  width: 350px;
                  height: 6px;
                  background-color: #F5A623;
                  left: 0;
                }
              }
              
              .a-top{
                img{
                  width: 52px;
                  height: 52px;
                }
                h2{
                  margin-top: 6px;
                }
              }
              .a-btm{
                p{
                  margin-top: 20px;
                }
              }
            }
          }
        }

        .cooperative{
          width: 100%;
          .parners{
            width: 940px;
            height: 460px;
            margin: 0 auto;
            background: url(../../assets/partner.png) 100% 100% no-repeat;
            background-size: contain;
          }
        }
        
        .contactus{
          text-align: center;
          .forms{
            margin-top: 60px;
            display: flex;
            position: relative;
            justify-content: space-between;
            input{
              flex-basis: 260px;
              line-height: 40px;
              border: none;
              border-bottom: 1px solid #E2E2E2;
              &::-webkit-input-placeholder{
                font-size: 16px;
              }
            }
            .select{
              line-height: 40px;
              border-bottom: 1px solid #E2E2E2;
              flex-basis: 260px;
              color: #C9C9C9;
              text-align: left;
              font-size: 16px;
              .right{
                float: right;
              }
            }
            .options{
              text-align: center;
              position: absolute;
              top: 41px;
              width: 260px;
              right: 0;
              z-index: 10;
              p{
                padding: 0 32px;
                color: #9B9B9B;
                line-height: 40px;
                cursor: pointer;
                &:hover{
                  background: #F7F7F7;
                  color: $blue;
                }
                span{
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  border-bottom: 1px solid #eee;
                }
              }
            }
          }
          .button{
            width:167px;
            height:40px;
            background:rgba(30,136,245,1);
            box-shadow:0px 0px 10px 0px rgba(0,145,255,0.74);
            border-radius:32px;
            margin-top: 70px;
            margin-bottom: 200px;
          }
        }

      }

      .customers{
          width: 100%;
          .c-wrap{
            height: 700px;
            width: 100%;
            margin-top: 130px;
            margin-bottom: 56px;
            background-color: #C1E8FF;
            .c-content{
              width: 1200px;
              height: 100%;
              margin: 0 auto;
              position: relative;
              .customer-bg{
                position: absolute;
                left: -20px;
                top: 30px;
                width: 700px;
                height: 670px;
              }
              h2{
                display: inline-block;
                width: 310px;
                line-height: 70px;
                background-color: #1E82F0;
                font-size:40px;
                font-weight:600;
                color: #fff;
                letter-spacing:4px;
                text-align: center;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 740px;
                z-index: 20;
              }
              .c-cards{
                position: absolute;
                right: 0;
                top: -65px;
                width: 650px;
                height: 830px;
                display: flex;
                flex-direction: column;
                box-shadow:0px 0px 60px 10px rgba(13,37,62,0.1);
                overflow-y: auto;
                .c-item{
                  flex-basis: 260px;
                  background: #fff;
                  box-shadow:0px 0px 60px 10px rgba(13,37,62,0.1);
                  border-radius:4px;
                  padding: 26px 58px 22px 26px;
                  position: relative;
                  .dot-2{
                    position: absolute;
                    top: 26px;
                    left: 26px;
                    width: 80px;
                    height: 70px;
                  }
                  .dot-1{
                    position: absolute;
                    right: 26px;
                    bottom: 26px;
                    width: 80px;
                    height: 70px;
                  }
                  &:not(:first-child){
                    margin-top: 22px;
                  }
                  .logo{
                    width: 100%;
                    text-align: center;
                    img{
                      height: 60px;
                    }
                  }
                  .message{
                    width: 490px;
                    margin: 0 auto;
                    text-align: left;
                    margin-top: 26px;
                  }
                  .company{
                    text-align: center;
                    position: absolute;
                    bottom: 30px;
                    width: 100%;
                    left: 0;
                    right: 0;
                    line-height: 18px;
                    span{
                      margin-left: 6px;
                    }
                  }
                }
              }
            }

          }
        }
    }
    .list-enter-active, .list-leave-active {
      transition: all 1s;
    }
    // 设置初始位置
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateX(-30px)
      // transform: translateY(30px);
    }
    .list-move {
      transition: transform 1s;
    }
</style>
