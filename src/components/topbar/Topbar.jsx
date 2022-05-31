import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
