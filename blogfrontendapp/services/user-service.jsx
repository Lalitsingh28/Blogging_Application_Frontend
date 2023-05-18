import { myAxios } from "./helper-service";

export const signUp = (user) => {
  return myAxios.post("/user/register", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/user/login", loginDetail)
    .then((response) => response.data);
};

