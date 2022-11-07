import React, { useState } from "react";
import { postRequest, postRequestt } from "../Service/API_Service";
import { setCookie } from "./Cookies";
import { useNavigate } from "react-router";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default function Generate_Token() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  async function getToken(e) {
    e.preventDefault();
    // var data = await postRequest(
    //   `/Account/ApiLogin?MobileNo=${formData.email}&Password=${formData.password}`
    // );
    const data = await postRequestt(
      `/Account/ApiLogin?MobileNo=${formData.name}&Password=${formData.password}`
    );
    let token = data?.result?.token;
    localStorage.setItem("token", token);
    navigate("/");
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="accountbg"></div>
      <div className="wrapper-page">
        <div className="card">
          <div className="card-body">
            <div className="text-center m-b-15">
              <a href="index.html" className="logo logo-admin">
                <img src="./logo.png" height="24" alt="logo" />
              </a>
            </div>
            <div className="p-3">
              <form className="form-horizontal m-t-20">
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="name"
                      name="name"
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="password"
                      required=""
                      placeholder="Password"
                      name="password"
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />{" "}
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-danger btn-block waves-effect waves-light"
                      type="submit"
                      onClick={getToken}
                    >
                      Generate Token
                    </button>
                  </div>
                </div>
                <div className="form-group m-t-10 mb-0 row">
                  <div className="col-sm-7 m-t-20">
                    <a href="pages-recoverpw.html" className="text-muted">
                      <i className="mdi mdi-lock"></i>{" "}
                      <small>Forgot your Token ?</small>
                    </a>
                  </div>
                  <div className="col-sm-5 m-t-20">
                    <a href="pages-register.html" className="text-muted">
                      <i className="mdi mdi-account-circle"></i>{" "}
                      <small>Create a Token ?</small>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
