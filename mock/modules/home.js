// 首页 数据展示
let numbers = [
  {id: 1, number: 18, unit: '年', message: '人力薪税实践'},
  {id: 2, number: 160, unit: '+', message: '全国线下直营布点'},
  {id: 3, number: 60000, unit: '+', message: '服务用工企业'},
  {id: 4, number: 50, unit: '亿', message: '年发薪流水'},
]
 
let products = [
  {
    id: 1, 
    title: '人力成本精算', 
    messages: [
      {id: 1, text: '定制化社保薪税方案设计'},
      {id: 2, text: '用工成本与风险一体管控'},
      {id: 3, text: '在线智能算薪、发薪、结算、 申报综合服务'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37af-big'
  },
  {
    id: 2, 
    title: '用工模式筹划', 
    messages: [
      {id: 1, text: '基于人才和组织关系重塑'},
      {id: 2, text: '资深行业专家提供定制方案'},
      {id: 3, text: '灵活用工全场景服务平台合 规化操作'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b2-big'
  },
  {
    id: 3, 
    title: '雇员自助服务', 
    messages: [
      {id: 1, text: '雇员自助办理查询提高效能'},
      {id: 2, text: '提高雇员工作效能及满意度'},
      {id: 3, text: '智能一体化移动办公平台'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b1-big'
  },
  {
    id: 4, 
    title: 'HR大数据金融', 
    messages: [
      {id: 1, text: '自主研发的互联网saas智能薪酬工具'},
      {id: 2, text: '区别于传统的电子发薪、薪资提取/预支'},
      {id: 3, text: '银行合作、实名认证、资金管控、安全可靠'}
    ], 
    icon: 'https://static.weibangong.com/files/5d103628141fc22956bf37b0-big'
  },
]

let advantages = [
  {id: 1, title: '属地化交付', message: '160+直营网点提供属地化代缴代办，避免层层转包、服务无保障'},
  {id: 2, title: '专业化方案', message: '18年人力薪税实践不断创新优化解决方案，避免操作失误、合规风险多'},
  {id: 3, title: '一体化咨询', message: '提供从战略咨询到规划落地一揽子服务，避免 与客户商业模式、组织管理方式相背离'}
]

let companys = [
  {id: 1, company: '霞飞诺', duty: '中国区人事总监', message: '使用不木钱包发薪以后，解决了我们发薪难的问题，很大程度上节约了的时间成本和人力成本，不木钱包不愧是一款有温度的发薪工具呀！', logo: 'https://static.weibangong.com/files/5d11ea6a78b8946ae8fe1723-big'},
  {id: 2, company: '蒙牛', duty: '销售服务中心行政经理', message: '微办公让企业对一线的远程管控更加方便，行程更加真实有效。实现数据存储完整性，降低信息外泄风险。搭建企业互动沟通平台，加强沟通与协作，提升工作效率，从而增强企业综合市场竞争力。', logo: 'https://static.weibangong.com/files/5d11ea6978b8946ae8fe1720-big'},
  {id: 3, company: '广之旅', duty: '财务总监', message: '微办公现在是我们必备的 APP，每天员工都在微办公进行沟通，处理工作事务，对于我们经常不在办公室的同事，极大地方便了我们的工作，告别了纸张时代。流程化、规范化、简单易用是我使用的最大感受，只需要手指轻轻一点，我就能轻松完成工作，不会错过重要信息，这是我们选择微办公的理由! ', logo: 'https://static.weibangong.com/files/5d11ea6878b8946ae8fe171c-big'},
]
 
export default [{
    url: '/wck/website/numbers',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: numbers,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/products',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: products,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/advantages',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: advantages,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/companys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: companys,
        success: 'success'
      }
    }
  }
]