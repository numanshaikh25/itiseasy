import Cookies from "js-cookie";
import configData from "../config/constant.json";

let isAuthenticated = () => {
  let jwt = Cookies.get("jwt");
  if (jwt !== undefined) {
    return true;
  }
  return true;
};

let logoutUser = () => {
  Cookies.remove("jwt", { path: "/", domain: configData.DOMAIN });
};

export { isAuthenticated, logoutUser };
