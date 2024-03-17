import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  const pagetitle = "Headerpage";
  //js codes
  //js...
  return (
    <div>
        <nav>
          <ul>
            <h1>Sidebar</h1>
            <li>
              <Link to="/user-management">UserName</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
};
export default Sidebar;
