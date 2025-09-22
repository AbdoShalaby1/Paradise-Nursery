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
            className="container-fluid p-0 vh-100 vw-100 d-flex flex-column"
            id="home"
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
