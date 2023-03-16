import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./actions";
import { RANDOM_PUSH, RANDOM_POP } from "./actions";

/**
 * dispatch counter increment
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_INCREMENT = (dispatch: any) => (num: number) =>
  dispatch({ type: COUNTER_INCREMENT, payload: num });

/**
 * dispatch counter decrement
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_DECREMENT = (dispatch: any) => (num: number) =>
  dispatch({ type: COUNTER_DECREMENT, payload: num });

/**
 * dispatch random push
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_RANDOM_PUSH = (dispatch: any) => (num: number) =>
  dispatch({ type: RANDOM_PUSH });

/**
 * dispatch random pop
 *
 * @param dispatch
 * @returns
 */
export const DISPATCH_RANDOM_POP = (dispatch: any) => (num: number) =>
  dispatch({ type: RANDOM_POP });
