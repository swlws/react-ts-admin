import { connect } from "react-redux";
import { RootState, Dispatch } from "../../../store/rematch/index";

const mapState = (state: RootState) => ({
  count: state.count,
});

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

function Counter(props: Props) {
  return (
    <div>
      The count is {props.count}
      <button onClick={() => props.increment()}>increment</button>
      <button onClick={() => props.incrementAsync()}>incrementAsync</button>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Counter);
