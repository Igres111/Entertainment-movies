import React, { useContext, useState } from "react";
import { GlobalAPI } from "./ContextAPI";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  // const email = localStorage.getItem("email");
  // const pass = localStorage.getItem("pass");

  const { userId, setUserId } = useContext(GlobalAPI);
  const [error, setError] = useState<boolean>(false);
  const [wrpass, setWrpass] = useState<boolean>(false);
  const [repeat, setRepeat] = useState("");
  const navigate = useNavigate();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserId((prev) => ({ ...prev, email: e.target.value }));
  }

  function handleChange2(e: React.ChangeEvent<HTMLInputElement>) {
    setUserId((prev) => ({ ...prev, pass: e.target.value }));
    if (error && userId.pass.length >= 0) {
      setError((prev) => !prev);
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userId.pass.length === 0) {
      setError(true);
    }

    if (repeat === userId.pass && !wrpass && repeat !== "") {
      localStorage.setItem("email", userId.email);
      localStorage.setItem("pass", userId.pass);
      navigate("/login");
    } else {
      setWrpass(true);
    }
  }
  function handleChange3(e: React.ChangeEvent<HTMLInputElement>) {
    setRepeat(() => e.target.value);
    if (wrpass && repeat.length >= 0) {
      setWrpass((prev) => !prev);
    }
  }

  return (
    <div className="bg-hole w-screen	 h-screen	">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-screen"
      >
        <svg
          className="w-8 mb-16 	"
          width="33"
          height="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
        <div className="flex flex-col justify-center bg-bluehole pl-6 pr-6 w-80 h-bigg rounded-lg">
          <h1 className="text-white text-3xl ">Sign Up</h1>
          <input
            className="mt-7 pl-3 pb-3 bg-bluehole border-b border-greyblue text-white  "
            type="text"
            onChange={handleChange}
            placeholder="Email adress"
          />
          <div className="relative">
            <input
              className={`mt-3  pl-3 pb-3 bg-bluehole border-b  ${
                error ? "border-monkired" : "border-greyblue"
              } text-white w-full `}
              type="password"
              onChange={handleChange2}
              placeholder="Password"
            />

            {error && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-monkired">
                Can't be empty{" "}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Repeat password"
              onChange={handleChange3}
              className={` mt-3 pl-3 pb-3 bg-bluehole border-b ${
                wrpass ? "border-monkired" : "border-greyblue"
              } text-white w-full `}
            />

            {wrpass && (
              <span className="absolute text-monkired right-0 top-1/2 -translate-y-1/2 ">
                They must match!
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-monkired h-12 mt-10 text-white rounded-lg hover:text-black hover:bg-white"
          >
            {" "}
            Login to your account
          </button>

          <div className="mt-6 flex justify-center">
            <label className="text-white">Already have an account?</label>
            <a href="./login" className="text-monkired ml-2 ">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
