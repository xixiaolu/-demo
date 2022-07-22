import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页面
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  
  // 手机快速注册页面
  {
    path: '/phoneregister',
    name: 'phoneregister',
    component: () => import(/* webpackChunkName: "phoneregister" */ '../views/PhoneRegister.vue'),
  },
  // 手机验证码的页面
  {
    path: '/captcha',
    name: 'captcha',
    component: () => import(/* webpackChunkName: "captcha" */ '../views/Captcha.vue')
  },
  //  选择国家或地区
  {
    path: '/region',
    name: 'region',
    component: () => import(/* webpackChunkName: "region" */ '../views/Region.vue')
  },
  // 已经注册的页面
  {
    path: '/registered',
    name: 'registered',
    component: () => import(/* webpackChunkName: "registered" */ '../views/Registered.vue')
  },
  // QQ
  {
    path: '/qqlogin',
    name: 'qqlogin',
    component: () => import(/* webpackChunkName: "qqlogin" */ '../views/QQLogin.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import(/* webpackChunkName: "my" */ '../views/UserInfo.vue')
  },
  // 一键登录页
  {
    path: '/oneclicklogin',
    name: 'oneclicklogin',
    component: () => import(/* webpackChunkName: "my" */ '../views/OneClickLogin.vue')
  },
  // 隐私政策
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "my" */ '../views/Privacy.vue')
  },
  // 注册密码
  {
    path: '/registerpass',
    name: 'registerpass',
    component: () => import(/* webpackChunkName: "my" */ '../views/RegisterPass.vue')
  },
  // 注册成功页面
  {
    path: '/registersucceed',
    name: 'registersucceed',
    component: () => import(/* webpackChunkName: "my" */ '../views/RegisterSucceed.vue')
  },
  // 忘记密码页面
  {
    path: '/forgetpass',
    name: 'forgetpass',
    component: () => import(/* webpackChunkName: "forgetPass" */ '../views/ForgetPass.vue')
  },
  // 忘记密码之后的第一个页面
  {
    path: '/useridentity',
    name: 'useridentity',
    component: () => import(/* webpackChunkName: "my" */ '../views/UserIdentity.vue')
  },
  // 忘记密码之后的第二个页面
  {
    path: '/phoneverificationfind',
    name: 'phoneverificationfind',
    component: () => import(/* webpackChunkName: "my" */ '../views/PhoneVerificationFind.vue')
  },

  // 忘记密码之后的第三个页面
  {
    path: '/newpass',
    name: 'newpass',
    component: () => import(/* webpackChunkName: "my" */ '../views/NewPass.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  localStorage.setItem('route',from.path);
  next();
})

export default router
