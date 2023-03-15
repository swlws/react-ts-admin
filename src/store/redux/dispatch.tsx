import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./actions";

/**
 * dispatch 加法
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_INCREMENT = (dispatch: any) => (num: number) =>
  dispatch({ type: COUNTER_INCREMENT, payload: num });

/**
 * dispatch 减法
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_DECREMENT = (dispatch: any) => (num: number) =>
  dispatch({ type: COUNTER_DECREMENT, payload: num });
