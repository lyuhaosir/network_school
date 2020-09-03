import request from '../utils/request'

export default {
    userLogin(username,password){
        return request({
            url:'/user/login',
            method:'post',
            data:{
                username,
                password
            }
        })
    },
    userInfo(){
        return request({
            url:'/user/info'
        })
    }
}