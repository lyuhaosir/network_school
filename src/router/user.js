import User from '@/views/user'

import lecturer from '@/views/user/lecturer'
import student from '@/views/user/student'
import teaching from '@/views/user/teaching'

const user = [
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: { title: '用户' },
        redirect:'/user/teaching',
        children: [
            {
                path: '/user/lecturer',
                name: 'lecturer',
                component: lecturer,
                meta: { title: '讲师管理' },
            },
            {
                path: '/user/student',
                name: 'student',
                component: student,
                meta: { title: '学员管理' },
            },
            {
                path: '/user/teaching',
                name: 'teaching',
                component: teaching,
                meta: { title: '助教管理' },
            }
        ]
    },

]



export default user
