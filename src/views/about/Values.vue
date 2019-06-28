<template>
  <div class="values">
    <div class="title">
      <Title bg-text="VALUES" title="企业价值观" />
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in values" :key="index">
        <h2>{{item.title}}</h2>
        <p v-for="(des, idx) in item.descripts" :key="idx">{{des}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '../../components/Title';
import { getValues } from '../../utils/apis';

export default {
  name: 'Values',
  components: { Title },
  data: function(){
    return {
      values: []
    }
  },
  mounted() {
    this.getValues();
  },
  methods: {
    getValues(){
      getValues().then((res) =>{
        if(res.data.code == 200){
          this.values = res.data.list;
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
    .values{
      width: 100%;
      min-height: 500px;
      margin-bottom: 128px;
      .list{
        width: 800px;
        margin: 40px auto;
        .item{
          margin-bottom: 54px;
          h2{
            font-size: 20px;
            color: $blue;
            line-height: 28px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          p{
            font-size: 20px;
            color: $remark;
            line-height: 28px;
            font-weight: 400;
          }
        }
      }
    }
</style>