/*
用于创建action对象
 */
import { INCREMENT,DECREMENT } from "./constant";
// import store from "./store";

export const createIncrementAction = (data) =>{
    return {type:INCREMENT,data};
}

export const createDecrementAction = (data) =>{
    return {type:DECREMENT,data};
}

export const createIncrementAsynAction = (data,time) =>{
    //异步任务中一般都会调用同步action
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}