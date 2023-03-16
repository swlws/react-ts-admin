import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

/**
 * 初始化多个model
 */
export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

// 主动调用
const { dispatch } = store;
// state = { count: 0 }
// reducers
dispatch({ type: "count/increment", payload: 1 }); // state = { count: 1 }
dispatch.count.increment(1); // state = { count: 2 }

// effects
dispatch({ type: "count/incrementAsync", payload: 1 }); // state = { count: 3 } after delay
dispatch.count.incrementAsync(1); // state = { count: 4 } after delay
