import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PageProvider } from "./components/states/hero.jsx";
import App from "./App.jsx";
import { ViewProvider } from "./components/states/storeCart.jsx";
import { Provider } from "react-redux";
import store from "./components/states/cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageProvider>
      <ViewProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ViewProvider>
    </PageProvider>
  </StrictMode>
);
