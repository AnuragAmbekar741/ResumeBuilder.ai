import axios from "axios";
import { useEffect } from "react";
import VerticalStepper from "./VerticalStepper";
const Home = () => {
  const getUser = async () => {
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data.token);
      localStorage.setItem("token", data.token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="p-10">
      <VerticalStepper />
    </div>
  );
};

export default Home;
