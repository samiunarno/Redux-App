import Logo from "@/assets/react.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 bg-blue-200 shadow-md">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-8 object-contain" />
        <span className="font-bold text-lg text-gray-800 leading-none">
          Tasks<span className="text-blue-600">Master</span>
        </span>
      </div>

      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
