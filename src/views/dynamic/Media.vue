<template>
  <div class="media">
    <div class="title">
      <Title bg-text="MEDIA OOVERAGE" title="媒体报道" />
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in medias" :key="index">
        <div class="avader">
          <img :src="item.image" />
        </div>
        <div class="text">
          <h2>{{item.title}}</h2>
          <p class="text-l text-remark">{{item.message}}</p>
          <div class="remark text-m">
            <span>{{item.date}}</span>
            <span class="line">|</span>
            <span>{{item.source}}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getMedias } from '../../utils/apis';

export default {
  name: 'Media',
  components: { Title },
  data: function(){
    return {
      medias: [],
    }
  },
  mounted() {
    this.getMedias();
  },
  methods: {
    getMedias(){
      getMedias().then((res) =>{
        if(res.data.code == 200){
          this.medias = res.data.list;
        }
      })
      
    }
  },
}
</script>
<style lang="scss" scoped>
    .media{
      width: 100%;
      min-height: 500px;
      .list{
        max-width: 980px;
        margin: 0 auto;
        
        .item{
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