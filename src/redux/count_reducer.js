/*
    1.该文件创建一个为count组件服务的reducer,reducer本质就是一个函数
    2.reducer函数会收到两个参数，一个是原来的状态，一个是动作对象
 */

//初始化状态
const initState = 0
export default function countReducer(preState=initState,action) {
    const { type,data } = action;
    switch (type) {
        case 'increment' :
            return preState + data;
        case 'decrement' :
            return preState - data;
        default :
            return preState;
    }
}