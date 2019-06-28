// 行业资讯
let industrys = [
  {
    id: 1, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 2, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 3, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 4, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 5, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 6, 
    title: '国家规划布局内重点软件企业', 
    url: '/', 
    date: '2018-10-10',
    source: '中央电视台',
    message: '未来，泛微公司将继续与所有的业界同仁共同开拓和推广中国的信息化应用，为提升企业的管理水平和竞争力做出自己的贡献！此外，泛微用重金打造的泛微协同软件产业园一定能够整合.', 
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
]

let communitys = [
  {
    id: 1, 
    title: ' 霖珑HR/人力资源垂直社群', 
    message: ' 汇聚数十万HR从业者 干货分享 专家授课 同业交流 分享对HR有价值的所有资讯、信息、活动', 
    tips: '扫码加微信专属客服',
    qrcode: 'https://static.weibangong.com/files/5d143593196f5e435f7b0e0f-big'
  },
  {
    id: 2, 
    title: '霖珑局/HRD/CHO/CEO高端社群', 
    message: '共同探索人力资源前沿动态 前瞻性的视角观点和有价值的转型升级 分享最佳实践 推动行业变革', 
    tips: '扫码加微信专属客服',
    qrcode: 'https://static.weibangong.com/files/5d143593196f5e435f7b0e0f-big'
  }
]
 
export default [{
    url: '/wck/website/industrys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: industrys,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/communitys',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: communitys,
        success: 'success'
      }
    }
  },
  
]