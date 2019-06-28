// 所有产品与服务
let products = [
  {
    id: 1, 
    active: true,
    title: '乐接活', 
    url: '/', 
    message: '算薪、发薪、结算、申报综合服务', 
    logo: 'https://static.weibangong.com/files/5d12e82734978308bfb2802c-big',
    image: 'https://static.weibangong.com/files/5d12e82834978308bfb28030-big'
  },
  {
    id: 2, 
    title: '微办公', 
    url: '/', 
    message: '算薪、发薪、结算、申报综合服务', 
    logo: 'https://static.weibangong.com/files/5d12e82734978308bfb2802d-big',
    image: 'https://static.weibangong.com/files/5d12e82834978308bfb28031-big'
  },
  {
    id: 3, 
    title: '乐接活', 
    url: '/', 
    message: '算薪、发薪、结算、申报综合服务', 
    logo: 'https://static.weibangong.com/files/5d12e82734978308bfb2802e-big',
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28032-big'
  },
  {
    id: 4, 
    title: '乐接活', 
    url: '/', 
    message: '算薪、发薪、结算、申报综合服务', 
    logo: 'https://static.weibangong.com/files/5d12e82834978308bfb2802f-big',
    image: 'https://static.weibangong.com/files/5d12e82934978308bfb28033-big'
  },
]
 
export default [{
    url: '/wck/website/all_products',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: products,
        success: 'success'
      }
    }
  },
  
]