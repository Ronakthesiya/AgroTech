import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errorData, setErrorData] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Validate the form data
    const errors = {};
    if (loginData.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (loginData.password.trim() === "") {
      errors.password = "Password is required";
    }
    if (Object.keys(errors).length > 0) {
      // Set errors and prevent form submission
      setErrorData(errors);
      return;
    }
    // If there are no errors, perform the login
    if (loginData.username !== null && loginData.password !== null) {
      // If all fields are filled, perform login
      // You would typically send this data to a server for authentication
      console.log("Login Successful");
      console.log(loginData);
      let response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      // setLoginData({username: '', password: ''}); // Clear the form
      setErrorData({ username: "", password: "" });
      if (response.status === 401) {
        alert("Login Failed");
      } else {
        const data = await response.json();
        const user = data.data.user;
        console.log(user);
        localStorage.setItem("UserID",user._id)
        navigate("/User/Community");
      }
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2 mt-5">
        <div className="w-10/12 max-w-[600px] px-6 py-12 rounded-3xl bg-white border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter your details.
          </p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Username</label>
              <input
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none focus:border-green-500"
                placeholder="Enter your username"
              />
              {errorData.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errorData.username}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
              {errorData.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errorData.password}
                </p>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg"
              >
                Sign in
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Don't have an account?</p>
              <button
                className="ml-2 font-medium text-base text-green-500"
                onClick={() => navigate("/Register")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
