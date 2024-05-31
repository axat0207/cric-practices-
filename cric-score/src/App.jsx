import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./Home.jsx";

export default function App() {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
