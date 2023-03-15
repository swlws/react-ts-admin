import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../../../store/redux-toolkit/features/counter/counterSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/redux-toolkit/hooks";

export default function Counter() {
  const count = useAppSelector((state: any) => state.counter.value);
  const status = useAppSelector((state: any) => state.counter.status);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>
        value: {count}, state: {status}
      </span>

      <br />

      <button onClick={() => dispatch(increment())}>同步加一</button>

      <button onClick={() => dispatch(decrement())}>同步减一</button>

      <button onClick={() => dispatch(incrementByAmount(10))}>同步加五</button>

      <button onClick={() => dispatch(incrementAsync(10))}>异步加10</button>
    </div>
  );
}
