const myRequest = (url, data, method) => {
    if (url === '') {
        return false;
    }
    let head = {
        'content-type': 'application/json', // 默认值
        'x-access-token': wx.getStorageSync("token")
    }
    return new Promise((resolve, reject) => {
        const requestTask = wx.request({
            url: url,
            data: data || {},
            header: head,
            method: method || 'GET',
            success(res) {
                resolve(res.data);
            },
            fail(err) {
                reject(err);
            },
            complete(){
                // 取消监听
                requestTask.offHeadersReceived()
            }
        })
        // 监听 拦截响应头
        requestTask.onHeadersReceived(config => {
            console.log(config)
        })
    })
}

export default myRequest