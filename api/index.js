import myRequest from './http'
const bxxq = 'http://192.168.1.123:8003'        // 数据地址
const common = 'http://192.168.1.123:8006'      // 文件地址


// 登录获取token
export const myLogin = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                if (res.code) {
                    myRequest(`${bxxq}/bxxq/login/${res.code}`, null, 'POST').then(res1 => {
                        resolve(res1)
                    }).catch(err => {
                        reject(err)
                    })
                }
            }
        })
    })
}

// 查询数据列表
export const getRankData = data => myRequest(`${bxxq}/bxxq/page`, data).then(res => res)