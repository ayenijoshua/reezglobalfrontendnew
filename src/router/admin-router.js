import Dashboard from '@/views/admin/Dashboard'
import layout from '@/views/AdminLayout'
import Security from '@/views/admin/Security'
import Wallet from '@/views/admin/Wallet'
import Users from '@/views/admin/Users'
import Transactions from '@/views/admin/Transactions'
import Incentives from '@/views/admin/Incentives'
import IncentiveRequests from '@/views/admin/IncentiveRequests'
import Packages from '@/views/admin/Packages'
import Products from '@/views/admin/Products'
// import serviceProviders from '@/views/admin/serviceProvider'
// import productServices from '@/views/admin/productServices'
import BonusSettings from '@/views/admin/BonusSettings'
import GlobalProfitSettings from '@/views/admin/GlobalProfitSettings'
import ProfitPoolSettings from '@/views/admin/ProfitPoolSettings'
import ReferralBonusSettings from '@/views/admin/ReferralBonusSettings'
import WithdrawalSettings from '@/views/admin/WithdrawalSettings'
import CompanyDetails from '@/views/admin/CompanyDetails'
import Ranks from '@/views/admin/Ranks'
import CreateStockistPackage from '@/views/admin/CreateStockistPackage'
import UpgradeSettings from '@/views/admin/UpgradeSettings'
import UnilevelSettings from '@/views/admin/UnilevelSettings'

export default [
    {
        path:'/admin',
        component:layout,
        meta:{
          isAdmin:false,
          requiresAuth:true
        },
        children:[
          {
            path:'dashboard',
            name:'admin-dashboard',
            component:Dashboard,
            meta:{
                isAdmin:true,
                requiresAuth:true
            }
          },
          {
            path:'wallet',
            name:'admin-wallet',
            component:Wallet,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'transactions',
            name:'admin-transactions',
            component:Transactions,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'users',
            name:'admin-users',
            component:Users,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'security',
            name:'admin-security',
            component:Security,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'incentives',
            name:'admin-incentives',
            component:Incentives,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'ranks',
            name:'admin-ranks',
            component:Ranks,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'bonus-settings',
            name:'bonus-settings',
            component:BonusSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },

          {
            path: 'create-stockist-package',
            name: 'create-stockist-package',
            component: CreateStockistPackage,
            meta: {
                isAdmin: true,
                requiresAuth: true
            },
          },

          {
            path: 'upgrade-settings',
            name: 'upgrade-settings',
            component: UpgradeSettings,
            meta: {
                isAdmin: true,
                requiresAuth: true
            },
          },

          {
            path: 'unilevel-settings',
            name: 'unilevel-settings',
            component: UnilevelSettings,
            meta: {
                isAdmin: true,
                requiresAuth: true
            },
          },

          {
            path:'products',
            name:'products',
            component:Products,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },

          {
            path:'incentive-requests',
            name:'incentive-requests',
            component:IncentiveRequests,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'packages',
            name:'admin-packages',
            component:Packages,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },

          {
            path:'profit-pool-settings',
            name:'profit-pool-settings',
            component:ProfitPoolSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'global-profit-settings',
            name:'global-profit-settings',
            component:GlobalProfitSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'referral-bonus-settings',
            name:'referral-bonus-settings',
            component:ReferralBonusSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'withdrawal-settings',
            name:'withdrawal-settings',
            component:WithdrawalSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'company-details',
            name:'company-details',
            component:CompanyDetails,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },

        ]
    }
]