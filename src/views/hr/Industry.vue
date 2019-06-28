<template>
  <div class="industry">
    <div class="title">
      <Title bg-text="INFORMATION" title="行业资讯" />
    </div>
    <div class="list">
      <router-link :to="{path: '/hr/details/' + item.id}" class="item" v-for="(item, index) in industrys" :key="index">
        <div class="avader">
          <img :src="item.image" />
        </div>
        <div class="text">
          <h2>{{item.title}}</h2>
          <p class="text-l text-remark">{{item.message}}</p>
          <div class="remark text-m">
            <span>{{item.date}}</span>
            <!-- <span class="line">|</span>
            <span>{{item.source}}</span> -->
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getIndustrys } from '../../utils/apis';

export default {
  name: 'Industry',
  components: { Title },
  data: function(){
    return {
      industrys: [],
    }
  },
  mounted() {
    this.getIndustrys();
  },
  methods: {
    getIndustrys(){
      getIndustrys().then((res) =>{
        if(res.data.code == 200){
          this.industrys = res.data.list;
        }
      })
      
    }
  },
}
</script>
<style lang="scss" scoped>
    .industry{
      width: 100%;
      min-height: 500px;
      .list{
        max-width: 980px;
        margin: 0 auto;
        .item{
          &:hover{
            text-decoration: none;
          }
          display: block;
          display: flex;
          padding: 44px 0;
          border-bottom: 1px solid #E5E5E5;
          .avader{
            width: 640px;
            height: 184px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .text{
            margin-left: 56px;
            h2{
              font-size: 26px;
              font-weight: 600;
              color: #4A4A4A;
            }
            p{
              margin-top: 28px;
            }
            .remark{
              color: #C5C5C5;
              margin-top: 28px;
              .line{
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
</style>