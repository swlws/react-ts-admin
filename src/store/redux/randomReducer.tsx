import { RANDOM_PUSH, RANDOM_POP } from "./actions";

const initialState = {
  list: [11],
};

export default function randomReducer(state = initialState, action: any) {
  console.log("randomReducer", action);
  const list = [...state.list];
  switch (action.type) {
    case RANDOM_PUSH:
      return { ...state, list: [...list, Math.floor(Math.random() * 100)] };
    case RANDOM_POP:
      list.pop();
      return { ...state, list };
    default:
      return state;
  }
}
