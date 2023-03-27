import axios from "axios";
import { URL } from "../../AppContains";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const handleLogin = (data: any) => {
  try {
    axios.post(URL + `/login`, data).then((res) => {
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log(res.data);
      window.location.href = "/";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
const handleRegister = (data: any) => {
  try {
    axios.post(URL + `/register`, data).then((res) => {
      console.log(res.data);
      window.location.href = "/login";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const handleLogout = () => {
  try {
    axios.get(URL + `/logout`, config).then((res) => {
      console.log(res.data);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { handleLogin, handleRegister, handleLogout };
