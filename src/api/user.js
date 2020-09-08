import request from '@/utils/request'

export default {
    getStudent(page,pageSize){
        return request({
            url:"/user/student1",
            method:'get',
            params:{
                page,
                pageSize
            }
        })
    }
}