// 所有产品与服务
let team = [
  {
    id: 1, 
    name: '高萍', 
    name_e: 'Grace Gao',
    titles: [
      '霖珑云科董事长',
      '长江商学院EMBA',
      '行业投资人及并购专家',
      '专注人力资源服务十余年',
      '致力于推动中国人力资源管理从事务性 向战略型转变'
    ], 
    image: 'https://static.weibangong.com/files/5d1493b3933c57f3b76b6835-big'
  },
  {
    id: 2, 
    name: '韩志勇', 
    name_e: '',
    titles: [
      '霖珑云科CEO',
      '中欧国际工商学院EMBA',
      '曾任前百分点集团COO、联想亚信副总裁、联想集团 首任战略管理总监',
      '企业级软件及IT服务近20年从业经验',
      '创业及投资领域涉及大数据、SaaS、数据库营销、商 务社交等多个方向'
    ], 
    image: 'https://static.weibangong.com/files/5d1493b5933c57f3b76b6837-big'
  },
  {
    id: 3, 
    name: '赵柯', 
    name_e: '',
    titles: [
      '霖珑云科COO',
      '原上海外服、蓝海集团高管 从业近20年的人力资源实战专家',
      '曾任前百分点集团COO、联想亚信副总裁、联想集团 首任战略管理总监',
      '具有前瞻性视角和丰富的行业经验',
      '精通薪酬福利、成本优化、劳动用工、社保 福利等各领域 '
    ], 
    image: 'https://static.weibangong.com/files/5d1493b3933c57f3b76b6835-big'
  },
  {
    id: 4, 
    name: '黄喆', 
    name_e: '',
    titles: [
      '霖珑云科CTO',
      '负责集团产品与研发工作',
      '微办公、霖珑云等多个核心产品创始人',
      '曾担任去哪儿网用户体验总监、百度CRM系统/凤巢/ 商桥等产品工作',
      '对人力资源管理、客户管理、供应链管理、支付体系、 用户服务体系均有深刻的理解'
    ], 
    image: 'https://static.weibangong.com/files/5d1493b5933c57f3b76b6838-big'
  },
]

let develops = [
  { 
    id: 1, 
    date: '2019', 
    descripts: [
      '建成300+直营服务机构及网点',
      '董事长高萍女士被授予西交利物浦大学创新生态导师',
      '灵活用工全场景服务平台—乐接活正式上线'
    ] 
  },
  { 
    id: 2, 
    date: '2018', 
    descripts: [
      '建成覆盖160+城市、30+省市的直营服务网点',
      '企业自发薪功能上线、上线发薪流水即突破2000万',
      '微办公着力打造人力资源、项目管理等垂直化场景应用功能 不木、奇鱼强强联合'
    ] 
  },
  { 
    id: 3, 
    date: '2017', 
    descripts: [
      '建成覆盖19省、70+城市的直营服务网点',
      '招财进宝电子工资单、全国HRO系统上线',
      '微办公推出“人工智能+CRM”的客户管理解决方案'
    ] 
  },
  { 
    id: 3, 
    date: '2016', 
    descripts: [
      '建成覆盖35+城市的直营服务网点',
      '获汇思集团战略投资',
      '微办公、招财进宝功能完善升级'
    ] 
  },
   
  { 
    id: 4, 
    date: '2015', 
    descripts: [
      '不木科技成立，招财进宝1.0版上线',
      '奇鱼时代成立，微办公提出一体化协同办公理念',
    ] 
  }
]

let experts = [
  {
    id: 1,
    name: '王政杰',
    title: 'SaaS专家',
    descroption: '服务过制造业、物流业、互联网等50+细分领域知名客户',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
  {
    id: 2,
    name: '季伟',
    title: '用工专家',
    descroption: '熟悉人才供应链管理、擅长全方位人才获取解决方案',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
  {
    id: 3,
    name: '李金凤',
    title: '金融专家',
    descroption: '熟知人力成本精算、人力财税综合管理',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
  {
    id: 4,
    name: '卞正',
    title: '薪税专家',
    descroption: '对灵活用工企业的人力成本优化有深刻理解',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
  {
    id: 5,
    name: '潘启敏',
    title: '用工专家',
    descroption: '在人力成本及用工风险规划等领域深受客户好评',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
  {
    id: 6,
    name: '周睿',
    title: '人力专家',
    descroption: '对人力资源战略规划及落地实操有丰富的经验',
    icon: 'https://static.weibangong.com/files/5d15b416281522d62edb7b44-big'
  },
]

let values = [
  {
    id: 1,
    title: '我们的愿景',
    descripts: [
      '科技让劳动力更高效'
    ]
  },
  {
    id: 2,
    title: '我们的使命',
    descripts: [
      '让人才发挥价值、收入有保障 让组织激发活力、创新有成长'
    ]
  },
  {
    id: 3,
    title: '我们的价值观',
    descripts: [
      '客户至上：以客户需求为导向、以客户成功为目标，追求极致客户体验。',
      '合规至上：有原则、有底线，坚决保障客户权益，坚决合法、合理、合规。',
      '创新至上：全流程服务创新、管理创新、技术创新，创新思维驱动企业成长。',
      '人才至上：为有主人翁精神的、不断成长迭代的优秀人才提供良性机制和成功的土壤。'
    ]
  }
]

 
export default [{
    url: '/wck/website/team',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: team,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/develops',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: develops,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/experts',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: experts,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/values',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: values,
        success: 'success'
      }
    }
  },
  
]