import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'INDEX',
      component: resolve => require(['@/components/pages/index'],resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/detail',
      name: 'DETAIL',
      component: resolve => require(['@/components/pages/detail'],resolve),
      meta: {
        title: '详情页面'
      }
    },
    {
      path: '/startmake',
      name: 'STARTMAKE',
      component: resolve => require(['@/components/pages/startmake'],resolve),
      meta: {
        title: '开始制作'
      }
    },
    {
      path: '/personal',
      name: 'PERSONAL',
      component: resolve => require(['@/components/pages/personal'],resolve),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/mybook',
      name: 'MYBOOK',
      component: resolve => require(['@/components/pages/mybook'],resolve),
      meta: {
        title: '我的书架'
      }
    },
    {
      path: '/order',
      name: 'ORDER',
      component: resolve => require(['@/components/pages/order'],resolve),
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/orderdetail',
      name: 'ORDERDETAIL',
      component: resolve => require(['@/components/pages/orderdetail'],resolve),
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/savesuccess',
      name: 'SAVESUCCESS',
      component: resolve => require(['@/components/pages/savesuccess'],resolve),
      meta: {
        title: '保存成功'
      }
    },
    {
      path: '/confirmpay',
      name: 'CONFIRMPAY',
      component: resolve => require(['@/components/pages/confirmpay'],resolve),
      meta: {
        title: '确认支付'
      }
    },
    {
      path: '/paysuccess',
      name: 'PAYSUCCESS',
      component: resolve => require(['@/components/pages/paysuccess'],resolve),
      meta: {
        title: '支付成功'
      }
    },
    {
      path: '/giftzero',
      name: 'GIFTZERO',
      component: resolve => require(['@/components/pages/giftzero'],resolve),
      meta: {
        title: '我的礼品卡'
      }
    },
    {
      path: '/newaddress',
      name: 'NEWADDRESS',
      component: resolve => require(['@/components/pages/newaddress'],resolve),
      meta: {
        title: '地址管理'
      }
    },
    {
      path: '/editaddress',
      name: 'EDITADDRESS',
      component: resolve => require(['@/components/pages/editaddress'],resolve),
      meta: {
        title: '编辑收货地址'
      }
    },
    {
      path: '/logistics',
      name: 'LOGISTICS',
      component: resolve => require(['@/components/pages/logistics'],resolve),
      meta: {
        title: '物流详情'
      }
    },
  ]
})

