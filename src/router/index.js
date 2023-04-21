import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import authRouter from './auth-router'
import userRouter from './user-router'
import adminRouter from './admin-router'
import api from '../api/auth'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  //...guestRouter,
  ...authRouter,
  ...adminRouter,
  ...userRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(route=>route.meta.requiresAuth)){
      if(userIsAuthenticated()){
          if(to.meta.isAdmin){
              checkUserIsAuthorized().then(res=>
              {
                  if(res.data.is_admin){
                      next()
                  }else{
                      localStorage.removeItem('delishcare-token')
                      next({path:'/login'}) 
                  }
              }).catch(err=>{
                  console.log(err)
                  localStorage.removeItem('delishcare-token')
                  next({path:'/login'}) 
              }) 
          }else{
              next()
          }
      }else{
          localStorage.removeItem('delishcare-token')
          next({path:'/login'})
      }
  }else{
     next() 
  }
})

export default router

function userIsAuthenticated(){
  const user = store.getters['authStore/authUser']
  if(user.email != undefined || localStorage.getItem("delishcare-token")){
      return true
  }
  return false
}

function checkUserIsAuthorized()
{
  var user = store.getters['authStore/authUser']
  if(user.is_admin == undefined){
      return api.user()
  }
  return new Promise((res,rej)=>{
      let resp = {
          data:{is_admin:user.is_admin}
      }
      user.is_admin ? res(resp) : rej(false)
  })
}
