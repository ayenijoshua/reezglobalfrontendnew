import dashboard from '@/views/user/Dashboard'
import layout from '@/views/UserLayout'
import Profile from '@/views/user/Profile'
import Wallet from '@/views/user/Wallet'
import Genealogy from '@/views/user/Genealogy'
import Security from '@/views/user/Security'
import Downlines from '@/views/user/Downlines'
// import bankAccount from '@/views/user/virtualBankAccount'

//import cards from '@/views/user/cards'

export default [
    {
        path:'/user',
        component:layout,
        meta:{
          isAdmin:false,
          requiresAuth:true
        },
        children:[
          {
            path:'dashboard',
            name:'user-dashboard',
            component:dashboard,
            meta:{
                isAdmin:false,
                requiresAuth:true
            }
          },
          {
            path:'profile',
            name:'user-profile',
            component:Profile,
            meta:{
                isAdmin:false,
                requiresAuth:true
            },
          },
          {
            path:'wallet',
            name:'user-wallet',
            component:Wallet,
            meta:{
                isAdmin:false,
                requiresAuth:true
            },
          },

          {
            path:'downlines',
            name:'user-downlines',
            component:Downlines,
            meta:{
                isAdmin:false,
                requiresAuth:true
            },
          },
          {
            path:'genealogy',
            name:'user-genealogy',
            component:Genealogy,
            meta:{
                isAdmin:false,
                requiresAuth:true
            },
          },
          {
            path:'security',
            name:'user-security',
            component:Security,
            meta:{
                isAdmin:false,
                requiresAuth:true
            },
          },
          
        ]
    }
]