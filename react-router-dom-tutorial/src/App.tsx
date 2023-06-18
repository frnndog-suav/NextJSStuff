import { Outlet } from "react-router-dom";
import "./App.css";

//2 - reaproveitamento de estrutura
function App() {
  return (
    <div className="App">
      <p>Navbar</p>
      <h1>React router App</h1>
      <Outlet />
    </div>
  );
}

export default App;
