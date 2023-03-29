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
      window.location.href = "/login";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (data: any) => {
  try {
    return await axios.post(URL + `/admin/user/update`, data, config).then((res) => {
      window.location.href = "/";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserInfoById = (userName: string) => {
  try {
    return axios.get(URL + "/view/user/" + userName, config).then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        handleLogout();
      }
    });
  } catch (error) {
    handleLogout();
    console.log(error);
  }
};

export { handleLogin, handleRegister, handleLogout, getUserInfoById, editUser };
