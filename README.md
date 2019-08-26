###    微信小程序请求工具

    用Promise封装了微信小程序请求的工具，类似axios那样调用，做了统一的错误拦截，请求头拦截、登录失效等。

###   用法

+ 请求方法 -> 统一放到了 /api/index.js中
```
    import myRequest from './http'
    // 查询数据列表
    export const getRankData = data => myRequest(`${bxxq}/bxxq/page`, data).then(res => res)
```

+ 调用请求 -> 示例 demo.js
```
    import { getRankData } from './api/index'
    getRankData().then(res => {
        if(res.code === 100){
            // 请求数据成功
        }else{
            // 处理错误原因
            errorHandler(res, getRankData)
            // 如果 getRankData 有参数, 参数跟在后面
            // errorHandler(res, getRankData, ...arguments)
        }
    })
```

+ 后台返回错误码处理 -> /utils/errorHandler.js
```
    import { myLogin } from '../api/index'
    const errorHandler = (res, cb) => {
        switch(res.code){
            case 20001:
                // token 失效 需要重新登录
                myLogin.then(res => {
                    // 登录成功后从新执行之前的方法
                    if(cb) cb()
                })
            case 20002:
                // ...
        }
    }
```