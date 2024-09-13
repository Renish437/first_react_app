import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar bg-${props.mode} bg-gradient row `}>
        <nav className={`navbar navbar-expand-lg navbar-warning bg-body-grey`}>
          {/* ${props.mode} */}
          <div className="container-fluid">
            <a
              className={`navbar-brand text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              href="/"
            >
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse `}
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
                <li className="nav-item">
                  <a
                    className={`nav-link active row p-4  data-bs-theme="light" text-${
                      props.mode === "dark" ? "light" : "dark"
                    }  `}
                    href="/"
                  >
                    {props.home}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className={`nav-link row p-4  data-bs-theme="light" text-${
                      props.mode === "dark" ? "light" : "dark"
                    }  `}
                    to="/about"
                  >
                    {props.about}
                  </Link>
                </li> */}
              </ul>
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  onClick={props.toggleMode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "dark" ? "light" : ""
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Switch Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title",
  home: "Set home",
  about: "Set About us",
};
