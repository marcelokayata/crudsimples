import { Outlet, Link } from "react-router-dom";
import '../Style/Form.css'
const Layout = () => {
  return (
    <>
      <nav className="flex-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createData">CreateData</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;