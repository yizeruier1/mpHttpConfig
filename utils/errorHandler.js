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
                    // 执行之前需要执行的事件
                    cb()
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