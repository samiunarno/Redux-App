import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
