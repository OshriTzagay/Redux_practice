import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="side-bar">
     <Link to="/">HOME</Link>
     <Link to="/todos">TODOS</Link>
    </div>
  );
};
