import service from './service';

// 首页 数据
export const getNumbers =()=>service('/wck/website/numbers',"POST") ;

// 首页 产品与服务
export const getProducts =()=>service('/wck/website/products',"POST") ;

// 首页 我们的优势
export const getAdvantages =()=>service('/wck/website/advantages',"POST") ;

// 首页 他们眼中的霖珑
export const getCompanys =()=>service('/wck/website/companys',"POST") ;

// 产品与服务 列表展示
export const getAllProducts =()=>service('/wck/website/all_products',"POST") ;

// 霖珑动态 媒体报道列表
export const getMedias =()=>service('/wck/website/medias',"POST") ;

// Hr洞察 行业资讯
export const getIndustrys =()=>service('/wck/website/industrys',"POST") ;

// Hr洞察 Hr社群
export const getCommunitys =()=>service('/wck/website/communitys',"POST") ;

// 社会责任 社会责任价值
export const getSocials =()=>service('/wck/website/socials',"POST") ;

// 社会责任 社会公益
export const getBenefits =()=>service('/wck/website/benefits',"POST") ;

// 关于我们 团队成员
export const getTeam =()=>service('/wck/website/team',"POST") ;

// 关于我们 发展历程
export const getDevelops =()=>service('/wck/website/develops',"POST") ;

// 关于我们 专家团队
export const getExperts =()=>service('/wck/website/experts',"POST") ;

// 关于我们 企业价值观
export const getValues =()=>service('/wck/website/values',"POST") ;