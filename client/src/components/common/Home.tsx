import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const getUser = async () => {
    console.log("effect called");
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return <div>Home</div>;
};

export default Home;
