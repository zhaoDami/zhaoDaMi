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
            // 表格
            {
                path:'/admin/basicTable',
                name:'basicTable',
                component:()=>import('@/views/admin/table/basicTable')
            },
            {
                path:'/admin/sortTable',
                name:'sortTable',
                component:()=>import('@/views/admin/table/sortTable')
            },
            {
                path:'/admin/filterTable',
                name:'HomfilterTablee',
                component:()=>import('@/views/admin/table/filterTable')
            },
            // 图表管理
            {
                path:'/admin/bar',
                name:'bar',
                component:()=>import('@/views/admin/charts/bar.vue')
            },
            {
                path:'/admin/line',
                name:'line',
                component:()=>import('@/views/admin/charts/line.vue')
            },
            {
                path:'/admin/pie',
                name:'pie',
                component:()=>import('@/views/admin/charts/pie.vue')
            },
            //表单管理
            {
                path:'/admin/render',
                name:'render',
                component:()=>import('@/views/admin/form/render')
            },
            // 测试路由
            //表单管理
            {
                path:'/admin/test',
                name:'test',
                component:()=>import('@/views/admin/test/test')
            }
        ]
    }
]