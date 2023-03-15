import { connect } from "react-redux";
import {
  DISPATCH_INCREMENT,
  DISPATCH_DECREMENT,
} from "../../../store/redux/dispatch";

const mapStateToProps = (state: any) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    increment: DISPATCH_INCREMENT(dispatch),
    decrement: DISPATCH_DECREMENT(dispatch),
  };
};

interface Props {
  value: number;
  increment: any;
  decrement: any;
}

function Counter(props: Props) {
  return (
    <div>
      <span>value: {props.value}</span>

      <br />

      <button onClick={() => props.increment(10)}>同步加十</button>

      <button onClick={() => props.decrement(10)}>同步减十</button>
    </div>
  );
}

/**
 * 通过connect将变量、行为传入组件中
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
