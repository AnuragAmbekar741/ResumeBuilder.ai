import { Header } from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="h-screen py-20 bg-gradient-to-r from-sky-100/50">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
