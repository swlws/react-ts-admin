import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

type MenuProps = {
  data: MenuItem[];
};
function Menu(props: MenuProps) {
  const data = props.data;
  if (!Array.isArray(data)) return null;

  const navItems = data.map(({ name, path }) => {
    const className = ({ isActive }: { isActive: boolean }) => {
      return isActive ? styles["nav-link-active"] : undefined;
    };

    return (
      <NavLink key={path} className={className} to={path}>
        {name}
      </NavLink>
    );
  });

  return (
    <div className={styles.menu}>
      {navItems}
      <Outlet />
    </div>
  );
}

type MenuItem = {
  id: string;
  name: string;
  path: string;
};
type BaseFrameProps = {
  menu: MenuItem[];
  children?: React.ReactNode;
};

export default function BaseFrame(props: BaseFrameProps) {
  return (
    <article className={styles.container}>
      <header>
        <aside className={styles.title}>React-Ts-Admin</aside>
        <Menu data={props.menu} />
      </header>

      <main>{props.children}</main>
    </article>
  );
}
