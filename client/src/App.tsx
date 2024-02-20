import LandingPage from "./components/LandingPage";
import { Header } from "./components/common/Header";
function App() {
  return (
    <>
      <Header />
      <div className="h-screen py-20 bg-gradient-to-r from-sky-100/50">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
