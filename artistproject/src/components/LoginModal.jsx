import { useContext, useEffect, useState } from "react";
import projectLogo from "../assets/LOGO.png";
import axios from "axios";
import { UserContext } from "./ContextProvider/UserContext";

import $ from "jquery";
export default function LoginModal() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/customers/login";
  const { userName, setUserName, isLogin, setIsLogin } =
    useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState(null);
  // email: tester@email.com. pass: 123
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setData({ ...data, [name]: value });
    // console.log(data);
  };
  const submit = async () => {
    try {
      const result = await axios.post(api, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(result);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("nickName", result.data.nickName);
      setUserName("customer");
      setToken(result.data);

      setIsLogin(true);
    } catch (error) {
      console.log(error);
      alert("登入失敗，帳號或密碼不正確！");
      setIsLogin(false);
    }
  };

  // const storeStoke = () => {
  // localStorage.setItem("token", token);
  // localStorage.setItem("role", "customer");
  // };

  // $.ajax({
  //   url: api,
  //   type: "POST",
  //   dataType: "json",
  //   contentType: "application/json",
  //   data: JSON.stringify(data),
  //   success: result,
  // });
  // };

  return (
    <div
      className="modal fade"
      id="LoginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="login row">
            <div className="d-flex justify-content-center pt-5">
              <img
                className="projectLogo w-50 h-100"
                src={projectLogo}
                alt="Logo"
              ></img>
            </div>
            <form>
              <div className="input mx-3">
                <h2 className="d-flex m-5 ">Sign Up or Log In</h2>
                <div className="d-block">
                  <div className="row mt-5 m-2">
                    <label className="col-3" htmlFor="email">
                      Email:
                    </label>
                    <input
                      id="email"
                      className="col-8"
                      name="email"
                      type="text"
                      placeholder="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row m-2">
                    <label className="col-3" htmlFor="password">
                      Password:
                    </label>
                    <input
                      id="password"
                      className="col-8"
                      name="password"
                      type="text"
                      placeholder="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row my-5 mx-auto justify-content-center">
                <div
                  className="btn col-3 mx-2"
                  id="login"
                  data-bs-dismiss="modal"
                  onClick={submit}
                >
                  LOG IN
                </div>
                <div
                  className="btn btn-primary col-3 mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModel"
                >
                  SIGN UP
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
