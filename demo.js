import errorHandler from './utils/errorHandler'
import { getRankData } from './api/index'

Page({
    data: {
        itemlist: []
    },
    onLoad(){
        this.initData()
    },
    // 初始化列表数据
    initData(){
        wx.showLoading({
            title: '加载中...'
        })
        let param = {
            pageSize: 10,
            pageNum: 1
        }
        getRankData(param).then(res => {
            wx.hideLoading()
            if (res.code === 100) {
                // 获取数据成功
                this.setData({
                    itemlist: res.data.list
                })
            } else {
                // 错误统一处理
                errorHandler(res, this.initData)
            }
        })
    }
})