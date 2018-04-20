import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import searchCrawler from '@/components/searchCrawler/searchCrawler.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'searchCrawler',
      meta: {
          title: '监控中心'
      }
    },
    {
        path: '/searchCrawler',
        name: 'searchCrawler',
        component: searchCrawler,
        meta: {
          title: '引擎爬虫监控中心'
        }
    },
    {
    	path: '*',
    	redirect: '/'
  	}
  ]
})

// 路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "监控中心";
  }
  next()
})

export default router;
