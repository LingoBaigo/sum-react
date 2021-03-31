## 求和案例 redux精简版
    1.去除count组件自身的状态
    2.src下面建立：
        -redux
            -store.js
            -count_reducer.js
    3.store.js
        3.1引入createStore创建store
        3.2调用createStore的时候传入一个为其服务的reducer
        3.3记得暴露store
    4.count_reducer.js
        4.1 reducer本质是一个函数，两个参数,preState,action，返回加工后的状态
        4.2 reducer有两个作用：初始化和加工状态
        4.3 reducer第一次被调用时store自动触发，传递的preState是undefined 后面是我们调用store.dispatch(action)
    5.在index.js中检测store中状态的带感，一旦改变重新渲染App
        注：redux只负责管理状态，状态的变化驱动页面的展示需要靠我们自己 store.subscribe
## 完整版redux
    1.加了count_action.js
        专门用于创建action对象
    2.constant.js
        管理常量，比如type

## redux异步action版
    1.明确：延迟的动作不想交给组件自身，想交给action
    2.什么时候需要异步action：想要对状态进行操作，但是具体数据靠异步任务返回（非必须）
    3.具体编码
        3.1 下载redux-thunk 并且在store.js中引入
        3.2 创建action的函数返回的是一个函数，该函数中写异步任务
        3.3 异步任务有结果后，分发一个同步的action去真正操作数据
    4.备注：异步action不是必须的，完全可以在组件中等待异步任务的结果返回了再去分发同步action