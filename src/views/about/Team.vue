<template>
  <div class="team">
    <div class="title">
      <Title bg-text="EXPERT TEAM" title="专家团队" />
    </div>
    <div class="experts">
      <div class="list">
        <div class="item" v-for="(item, index) in experts" :key="index">
          <div class="avader">
            <img :src="item.icon" />
          </div>
          <div class="text">
            <h2>{{item.name}}<span>{{item.title}}</span></h2>
            <p>{{item.descroption}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getExperts } from '../../utils/apis';

export default {
  name: 'Team',
  components: { Title },
  data: function(){
    return {
      experts: []
    }
  },
  mounted() {
    this.getExperts();
  },
  methods: {
    getExperts(){
      getExperts().then((res) =>{
        if(res.data.code == 200){
          this.experts = res.data.list;
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
    .team{
      width: 100%;
      margin-bottom: 128px;
      min-height: 500px;
      .experts{
        .list{
          width: 860px;
          margin: 50px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .item{
            flex-basis: 274px;
            padding: 22px 40px;
            margin-bottom: 50px;
            &:hover{
              box-shadow:0px 0px 6px 6px rgba(235,240,250,0.5);
            }
            .avader{
              img{
                width: 190px;
                height: 190px;
              }
            }
            .text{
              h2{
                text-align: center;
                font-size: 20px;
                color: #333;
                margin-top: 24px;
                line-height: 28px;
                font-weight: 600;
                span{
                  font-size: 14px;
                  color: #666;
                  margin-left: 12px;
                  font-weight: 400;
                }
              }
              p{
                margin-top: 14px;
                font-size: 14px;
                color: #999;
              }
            }
          }
        }
      }
    }
</style>