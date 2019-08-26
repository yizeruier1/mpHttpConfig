import { myLogin } from '../api/index'

const tip = text => {
    wx.showToast({
        title: text,
        icon: 'none',
        duration: 2000
    })
}
const errorHandler = (res, cb) => {
    switch(res.code){
        case 20001:
            myLogin().then(res1 => {
                if (res1.code === 100) {
                    wx.setStorageSync('token', res1.data)
                    // 获取回调函数的参数
                    const param = Array.prototype.slice.call(arguments, 2)
                    // 执行之前需要执行的事件
                    cb(...param)
                } else {
                    tip(res1.msg)
                }
            }).catch(err1 => {
                tip(err1)
            })
            break
        case 20002:
            tip(res.msg)
            break
    }
}
export default errorHandler