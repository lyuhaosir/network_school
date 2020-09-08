import Teach from '@/views/teach'

import course from '@/views/teach/course'
import education from '@/views/teach/educational'

const teach = [
    {
        path: '/teach',
        name: 'Teach',
        component: Teach,
        meta: { title: '教学' },
        redirect:'/teach/course',
        children: [
            {
                path: '/teach/course',
                name: 'course',
                component: course,
                meta: { title: '课程管理' },
            },
            {
                path: '/teach/educational',
                name: 'education',
                component: education,
                meta: { title: '教务管理' },
            }
        ]
    },

]



export default teach
