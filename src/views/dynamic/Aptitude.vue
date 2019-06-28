<template>
  <div class="aptitude">
    <div class="title">
      <Title bg-text="HONOR" title="企业荣誉" />
    </div>
    <div class="honor">
      <div class="h-item">
        <div class="avader">
          <img src="../../assets/honor-1.png" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" />
          <p>2016年度中国移动办公 领域领军企业奖</p>
        </div>

        <div class="avader">
          <img src="../../assets/honor-2.png" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" />
          <p>2017年度最佳智能一体化移动办公产品</p>
        </div>

        <div class="descript text-right">
          <img class="ratate" src="../../assets/left.png" />
          <p>2018年度中国互联网+行业值得信赖品牌</p>
        </div>
        <div class="avader">
          <img src="../../assets/honor-3.png" />
        </div>

        <div class="descript text-right">
          <img class="ratate" src="../../assets/left.png" />
          <p>2018杰出智能创新奖 第七届中国财经峰会组委会</p>
        </div>
        <div class="avader">
          <img src="../../assets/honor-4.png" />
        </div>

        <div class="avader">
          <img src="../../assets/honor-4.png" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" />
          <p>2016年度中国移动办公 领域领军企业奖</p>
        </div>

        <div class="avader">
          <img class="horizontal" src="../../assets/honor-5.png" />
        </div>
        <div class="descript">
          <img src="../../assets/left.png" />
          <p>中国互联网+ 行业最受信赖产品奖</p>
        </div>

      </div>
    </div>
    <div class="title">
      <Title bg-text="QUALIFICATIONS" title="企业资质" />
    </div>
    <div class="qualification">
      <div class="q-list">
        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>人力资源服务许可证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>劳务派遣经营许可证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>江苏省民营科技企业</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>江苏省人力资源服务行业协会常务理事</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>江苏省苏商发展企业会员证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>江苏省苏商发展促进会理事单位</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>中国人才交流协会会员证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>微办公信息技术服务管理认证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>微办公软件研发质量管理体系认证</span>
        </div>

        <div class="q-item">
          <img src="../../assets/aptitude-icon.png" />
          <span>微办公信息安全管理体系认证</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import Title from '../../components/Title';

export default {
  name: 'Aptitude',
  components: { Title },
  data: function(){
    return {
    }
  },
  mounted() {
    
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
    .aptitude{
      width: 100%;
      .honor{
        width: 1200px;
        margin: 0 auto;
        .h-item{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          >div{
            flex-basis: 285px;
            height: 234px;
            margin-top: 14px;
          }
          .descript{
            background: #F5F5F5;
            padding: 38px 22px 0 18px;
            font-size: 16px;
            color: #858585;
            img{
              height: 30px;
            }
            p{
              margin-top: 30px;
            }
            .ratate{
              transform: rotate(180deg);
            }
            &.text-right{
              text-align: right;
            }
          }
          .avader{
            background: #d8d8d8;
            text-align: center;
            img{
              height: 100%;
            }
            .horizontal{
              width: 100%!important;
            }
          }
        }
      }
      .qualification{
        width: 1200px;
        margin: 0 auto;
        .q-list{
          display: flex;
          flex-wrap: wrap;
          width: 70%;
          margin: 0 auto;
          .q-item{
            flex-basis: 50%;
            font-size: 22px;
            color: #4A4A4A;
            line-height: 60px;
            img{
              height: 30px;
              vertical-align: middle;
            }
            span{
              vertical-align: middle;
              margin-left: 20px;
            }
          }
        }
      }
    }
</style>