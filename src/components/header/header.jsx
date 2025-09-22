import "./header.css";
import { usePage } from "../states/hero";
import { useView } from "../states/storeCart";
import { useSelector } from "react-redux";

const Header = () => {
  const { setShowHero } = usePage();
  const { switchView } = useView();
  const cartItems = useSelector(state => state.cart.items)
  const goHome = () => {
    switchView("store");
    setShowHero(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://www.hdwallpapers.in/thumbs/2021/beautiful_scenery_green_grass_trees_plants_hd_green_aesthetic-t2.jpg') center/cover no-repeat",
        color: "#f1f1f1",
        zIndex: 1050,
      }}
    >
      <div className="container">
        {/* Brand */}
        <button
          className="btn btn-link d-flex align-items-center text-decoration-none me-3"
          onClick={goHome}
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="logo"
            style={{ height: "40px", width: "40px", marginRight: "10px" }}
          />
          <h2 className="m-0 fs-4">Paradise Nursery</h2>
        </button>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-link nav-link fs-5 text-light"
                onClick={() => {
                  switchView("store");
                  setShowHero(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Store
              </button>
            </li>
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-link nav-link fs-5 text-light d-flex align-items-center position-relative"
                onClick={() => {
                  switchView("cart");
                  setShowHero(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                🛒 Cart
                {/* Badge */}
                <span
                  className="badge rounded-pill bg-success ms-1"
                  style={{ fontSize: "0.7rem", lineHeight: "1" }}
                >
                  {cartItems.length}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
