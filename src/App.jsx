import "./App.css";
import GetStarted from "./components/aboutUs/aboutUs.jsx";
import Header from "./components/header/header.jsx";
import { useEffect } from "react";
import { usePage } from "./components/states/hero.jsx";
import Store from "./components/store/store.jsx";
import { useView } from "./components/states/storeCart.jsx";
import CartPage from "./components/cart/cart.jsx";

function App() {
  const { showHero } = usePage();
  const { currentView } = useView();
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (!showHero) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
      } else {
        document.body.style.paddingTop = "0";
      }
    }
  }, [showHero]);

  return (
    <>
      <div className="bgImg">
        <Header />
        {showHero && (
          <div
            className="container-fluid p-0 d-flex flex-column"
            style={{ paddingTop: "100px", minHeight: "100vh" }}
          >
            <GetStarted />
          </div>
        )}
      </div>
      {currentView == "store" ? <Store /> : <CartPage />}
    </>
  );
}

export default App;
