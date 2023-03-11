// import "./App.css";
import AppRouter from "./router/index";
import MenuFrame from "./components/MenuFrame/index";
import menuList from "./data/menu";

function App() {
  return (
    <MenuFrame menu={menuList}>
      <AppRouter />
    </MenuFrame>
  );
}

export default App;
