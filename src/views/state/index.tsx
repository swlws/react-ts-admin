import { useState } from "react";
import ReduxPage from "./redux/index";
import ReduxToolkitPage from "./redux-toolkit/index";

import style from "./index.module.scss";

/**
 * 状态管理
 * @returns
 */
export default function StateManager() {
  const [mode, setMode] = useState("redux");

  const stateBlock = () => {
    if (mode === "redux") {
      return <ReduxPage />;
    } else if (mode === "redux-toolkit") {
      return <ReduxToolkitPage />;
    }

    return null;
  };

  return (
    <article className={style.container}>
      <aside>
        <span>State Management: </span>

        {["redux", "redux-toolkit", "mobx"].map((v) => {
          return (
            <div
              key={v}
              className={mode === v ? style.active : ""}
              onClick={() => setMode(v)}
            >
              {v}
            </div>
          );
        })}
      </aside>

      <main>{stateBlock()}</main>
    </article>
  );
}
