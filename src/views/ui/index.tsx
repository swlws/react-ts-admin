import { useState } from "react";
import AntdPage from "./antd/index";

import style from "./index.module.scss";

/**
 * 状态管理
 * @returns
 */
export default function StateManager() {
  const [mode, setMode] = useState("antd");

  const stateBlock = () => {
    if (mode === "antd") {
      return <AntdPage />;
    }

    return null;
  };

  return (
    <article className={style.container}>
      <aside>
        <span>UI: </span>

        {["antd"].map((v) => {
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
