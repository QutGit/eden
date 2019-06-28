// 所有产品与服务
let medias = [
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
 
export default [{
    url: '/wck/website/medias',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: medias,
        success: 'success'
      }
    }
  },
  
]