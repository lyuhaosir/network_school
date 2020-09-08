import router from './router'

import loginApi from './api/test'
import { Message } from 'element-ui';

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('netword_token')
    if (!token) {
        if(to.path != '/login'){
            localStorage.removeItem('netword_info')
            Message.warning('请先登录')
            next('/login')
        }else{
            next()
        }
    } else {
        const info = localStorage.getItem('netword_info')

        if(!info){
            loginApi.userInfo().then(res=>{
                if(res.data.code==200){
                    localStorage.setItem('netword_info',JSON.stringify(res.data.data))
                    next();
                }else{
                    localStorage.removeItem('netword_token')
                    Message.warning('请先登录')
                    next('/login')
                }
            })
        }else{
            next()
        }
    }

})