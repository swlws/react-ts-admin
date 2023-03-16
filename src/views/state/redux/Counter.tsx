import { connect } from "react-redux";
import { RootState } from "../../../store/redux";
import {
  // counter
  DISPATCH_INCREMENT,
  DISPATCH_DECREMENT,

  // random
  DISPATCH_RANDOM_PUSH,
  DISPATCH_RANDOM_POP,
} from "../../../store/redux/dispatch";

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    value: state.counterReducer.value,
    list: state.randomReducer.list,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  console.log("ownProps", ownProps);
  return {
    increment: DISPATCH_INCREMENT(dispatch),
    decrement: DISPATCH_DECREMENT(dispatch),
    push: DISPATCH_RANDOM_PUSH(dispatch),
    pop: DISPATCH_RANDOM_POP(dispatch),
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Counter(props: Props) {
  return (
    <article>
      <section>
        <div>Counter Value: {props.value}</div>

        <button onClick={() => props.increment(10)}>同步加十</button>

        <button onClick={() => props.decrement(10)}>同步减十</button>
      </section>

      <section style={{ margin: "20px 0" }}>
        <div>
          <span>Random List:</span>

          {props.list.map((v) => (
            <span key={v}>{v} </span>
          ))}
        </div>

        <button onClick={() => props.push()}>随机生成一个数字</button>

        <button onClick={() => props.pop()}>去除最后一个数字</button>
      </section>
    </article>
  );
}

/**
 * 通过connect将变量、行为传入组件中
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
