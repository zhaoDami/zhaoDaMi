export default[
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/admin/login/login')
    },
    //主页
    {
        path:'/admin/index',
        name:'admin_index',
        component:()=>import('@/views/admin/home/index'),
        children : [
            {
                path:'/admin/home',
                name:'Home',
                component:()=>import('@/views/admin/home/home')
            },
            {
                path:'/admin/basicTable',
                name:'Home',
                component:()=>import('@/views/admin/table/basicTable')
            },
        ]
    }
]