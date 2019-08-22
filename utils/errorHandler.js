import { myLogin } from '../api/index'

const tip = text => {
    wx.showToast({
        title: text,
        icon: 'none',
        duration: 2000
    })
}
const errorHandler = (res, cb) => {
    if (res.code === 20001 || res.code === 20002 || res.code === 20003) {
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
    } else {
        tip(res.msg)
    }
}
export default errorHandler