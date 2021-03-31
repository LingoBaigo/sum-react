/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

//引入createStore创建store
// import { createStore } from 'redux'
//引入为count服务的reducer
// import countReducer from './count_reducer'
//暴露store
// export default createStore(countReducer);

import {createStore} from 'redux'
import countReducer from "./count_reducer";
export default createStore(countReducer);