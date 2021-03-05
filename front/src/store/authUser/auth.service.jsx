import axios from "axios";

export const signUp = async (value) => {
  try {
    return await axios
      .post("http://localhost:3500/api/create", value, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((user) => {
        return user.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const signIn = async (value) => {
  try {
    return await axios
      .post("http://localhost:3500/api/login", value.user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((user) => user.data);
  } catch (error) {
    console.log(error);
  }
};

export const signInMe = async (user) => {
  try {
    return await axios
      .get("http://localhost:3500/api/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: user ? user.token : "",
        },
      })
      .then((user) => user.data);
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async (token) => {
  try {
    return await axios
      .get("http://localhost:3500/api/logout", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? token : "",
        },
      })
      .then((user) => user.data);
  } catch (error) {
    console.log(error);
  }
};

export const showAllUser = async (value) => {
  try {
    return await axios
      .get("http://localhost:3500/api/users")
      .then((user) => user.data);
  } catch (error) {
    console.log(error);
  }
};
