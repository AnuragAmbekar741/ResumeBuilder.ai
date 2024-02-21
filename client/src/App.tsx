import { Header } from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <div className="h-screen py-20 bg-gradient-to-r from-[##b3c8ff] to-[#f5feff]">
            <Router />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
