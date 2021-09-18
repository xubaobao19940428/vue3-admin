import layOut from '../view/layout/index.vue'

const product = 
    {   path:'/product',
        component:layOut,
        meta:{title:'商品中心',icon: '&#xe60f;'},
        children:[
            {
                path:'productList',
                name:'productList',
                component:()=>import('@/view/product/productList.vue'),
                meta:{
                    title:'商品列表',
                    icon:''
                }
            },
            {
                path:'productCheck',
                name:'productCheck',
                component:()=>import('@/view/product/productCheck.vue'),
                meta:{
                    title:'商品审核',
                    icon:''
                }
            }
        ]
    }
export default product