// 行业资讯
let socials = [
  {
    id: 1, 
    title: '带动新型就业', 
    message: '经济的发展使我国劳动群体就业观念逐渐发生改变，劳动主体年轻化，朝九晚五的固定雇佣、终身“铁饭碗”的形式已不是年轻群体的最优选。相反，时间、工作安排更加灵活化的新型灵活就业模式更受欢迎。霖珑云科为新时代求职者及需求方提供了一个合法合规的灵活用工平台，解决了“企业招不到人、人才找不到企业”这一信息不对称难题，带动共享经济下新型就业。', 
    image: 'https://static.weibangong.com/files/5d1468d90ac345536e9e520c-big'
  },
  {
    id: 2, 
    title: '激发市场活力', 
    message: '据国家统计局数据显示，中国劳动年龄人口连续第七年下降。然而中国经济仍在平稳增长，对劳动力的需求仍在快速增加。未来，很多企业将面临招聘困难的问题，特别是对制造业、服务业这样弹性用工需求较大的行业，没有劳动力意味着订单无人生产、服务无人承接、市场缺乏活力。霖珑云科以线上线下全场景闭环服务，解决企业用工难、用工荒、用工管理无保障等难题，让企业聚焦打造核心竞争力，将成本与管理的重心转向创新和市场开发上。', 
    image: 'https://static.weibangong.com/files/5d1468da0ac345536e9e520e-big'
  },
  {
    id: 3, 
    title: '释放双创新动能', 
    message: '为了响应国家将共享经济、小微/双创企业和政府“放管服”紧密结合的号召，霖珑云科通过双创众包模式，鼓励自由职业者参与创新创业，调动创新创业积极性。同时通过完善的平台信用机制、保障机制建设，让创业者放心去创新、安心去创业，构成了一个充满活力的创新生态体系。', 
    image: 'https://static.weibangong.com/files/5d1468dad041d4a6a0ca9611-big'
  },
  {
    id: 4, 
    title: '让企业、人才可持续发展', 
    message: '在灵活用工招聘市场，“找不到合适的人”和“找不到合适的工作”是永恒的难题，用工方和供给端双边的信息严重不对称，平台不合法合规，将让求职人群蒙受巨大损失。霖珑云科以合规降本、科学提效的方式，解决现代企业人力资源管理的商业困境，让企业聚焦打造核心竞争力、让人才创造价值，实现可持续发展。', 
    image: 'https://static.weibangong.com/files/5d1468dbd041d4a6a0ca9612-big'
  },
]

let benefits = [
  {
    id: 1, 
    title: '爱心助学', 
    message: '每一个微小的力量、每一份细微的温暖，汇聚在一起就可以形成改变世界的力量。', 
    image: 'https://static.weibangong.com/files/5d1468d80ac345536e9e5208-big'
  },
  {
    id: 1, 
    title: '公益徒步', 
    message: '为爱同步·你我同行。助力残疾人，我们永远在路上！', 
    image: 'https://static.weibangong.com/files/5d1468d90ac345536e9e520a-big'
  },
]
 
export default [{
    url: '/wck/website/socials',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: socials,
        success: 'success'
      }
    }
  },
  {
    url: '/wck/website/benefits',
    type: 'post',
    response: config => {
      return {
        code: 200,
        list: benefits,
        success: 'success'
      }
    }
  },

]