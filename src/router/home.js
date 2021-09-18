import layOut from '../view/layout/index.vue'

const home = 
    {   path:'/dashboard',
        component:layOut,
        redirect:'/dashboard/welcome',
        meta:{title:'数据概览',icon: '&#xe603;', key: 'MENU_DASHBOARD' },
        children:[
            {
                path:'welcome',
                name:'dashboard',
                component:()=>import('../view/home/index.vue'),
                hidden: true,
                meta:{
                    title:'欢迎',
                    icon:''
                }
            },
            {
                path:'index1',
                name:'index1',
                component:()=>import('../view/home/index1.vue'),
                meta:{
                    title:'你好你好',
                    icon:''
                }
            }
        ]
    }
export default home