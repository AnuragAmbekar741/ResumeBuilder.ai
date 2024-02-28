import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isUser } from "../../redux/slice/userSlice";
import { UserState } from "../../types/types";

const Home = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    console.log("effect called");
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data.user._json);
      const newUser = {
        name: data.user._json.name,
        email: data.user._json.email,
        picture: data.user._json.picture,
      };
      dispatch(isUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, [dispatch]);
  const user = useSelector((state: { user: UserState }) => state.user.user);
  console.log(user);

  return <div>Home</div>;
};

export default Home;
