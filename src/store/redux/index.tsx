import { createStore, combineReducers } from "redux";

import counterReducer from "./counterReducer";
import randomReducer from "./randomReducer";

const reducers = combineReducers({
  counterReducer,
  randomReducer,
});

// 创建一个包含应用程序 state 的 Redux store。
// 它的 API 有 { subscribe, dispatch, getState }.
// let store = createStore(counterReducer);

// 多个reducer时使用combineReducers进行合并
let store = createStore(reducers);

// 你可以使用 subscribe() 来更新 UI 以响应 state 的更改。
// 通常你会使用视图绑定库（例如 React Redux）而不是直接使用 subscribe()。
// 可能还有其他用例对 subscribe 也有帮助。
store.subscribe(() => {
  console.log("store changed", store.getState());
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./actions";

// 主动调用action
// 改变内部状态的唯一方法是 dispatch 一个 action。
// 这些 action 可以被序列化、记录或存储，然后再重放。
// store.dispatch({ type: COUNTER_INCREMENT, payload: 100 });
