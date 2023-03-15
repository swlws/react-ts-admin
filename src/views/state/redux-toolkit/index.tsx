import { Provider } from "react-redux";
import { store } from "../../../store/redux-toolkit/index";
import Counter from "./Counter";

export default function StateRedux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
