import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";

//2 - reaproveitamento de estrutura
function App() {
  return (
    <div className="App">
      {/* 4 - navegando entre paginas */}
      <NavBar />
      <h1>React router App</h1>
      <Outlet />
    </div>
  );
}

export default App;
