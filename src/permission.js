import router from './router/index';
import NProgress from 'nprogress';
import store from './store/index'


NProgress.configure({ showSpinner: false })

// 拦截路由 判断登录 动态加载路由等操作
router.beforeEach( async (to, from, next) =>{
    NProgress.start();
    const accessRoutes = await store.dispatch('permission/generateRoutes')
    console.log(accessRoutes)

    // 切到首页是显示透明菜单
    if(to.fullPath == '/'){
      setTimeout(() =>{
        window.scrollTo(0,0);
        store.dispatch('permission/getMenuType',1)
      },500)
    }else{
      store.dispatch('permission/getMenuType',2)
    }
    
    next()
})

router.afterEach(async () =>{
    NProgress.done();
})

