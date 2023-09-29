import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);
