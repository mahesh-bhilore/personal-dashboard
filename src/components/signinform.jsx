import React from "react";
import mail from "../assets/mail.svg";
import passwordlock from "../assets/passwordlock.svg";
import passwordview from "../assets/passwordview.svg";
import biomatric from "../assets/biomatric.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import apple from "../assets/apple.svg";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checked,setchecked] = useState(false);
  const navigate = useNavigate();

  const loginUser = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

     console.log(users);

    const matchedUser =
      users.find(
        (user) =>
          user.Email === email &&
          user.Password === password
      );

    if (matchedUser) {
      localStorage.setItem(
      "currentUser",
      JSON.stringify(matchedUser));
      
      alert("Login Success");
       navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <div className="w-full lg:w-360 min-h-screen lg:h-175 flex flex-col lg:flex-row">
        <div className="h-182 w-180 flex flex-col gap-8 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
          <div className="h-49 w-160 flex flex-col gap-2 translate-x-10 translate-y-12 ">
            <div className="h-12 w-160 flex items-center gap-4">
              <img src={star} alt="star" className="h-6 w-6" />
              <p className=" h-8 w-27 text-white text text-xl font-semibold">
                FinanceAI
              </p>
            </div>

            <div className="h-22 w-160">
              <p className="text-white text font-bold text-2xl">
                Welcome Back to <br />
                Smart Finance
              </p>
            </div>

            <div className="h-7 w-160">
              <p className="text text-white">
                Manage your money intelligently with AI-powered insights
              </p>
            </div>
          </div>

          <div className="h-23 w-160 flex justify-between translate-x-10 translate-y-85">
            <div className="h-23 w-50 rounded-2xl border border-gray-400 p-4 bg-white/10 backdrop-blur-lg">
              <div className="text text-white text-2xl font-semibold">50K+</div>
              <div className="text text-white text-[12px]">Active Users</div>
            </div>

            <div className="h-23 w-50 rounded-2xl border border-gray-400 p-4 bg-white/10 backdrop-blur-lg">
              <div className="text text-white text-2xl font-semibold">$2M+</div>
              <div className="text text-white text-[12px]">Money Saved</div>
            </div>

            <div className="h-23 w-50 rounded-2xl border border-gray-400 p-4 bg-white/10 backdrop-blur-lg">
              <div className="text text-white text-2xl font-semibold">4.9★</div>
              <div className="text text-white text-[12px]">App Rating</div>
            </div>
          </div>
        </div>

        <div className="h-182 w-180 p-12">
          <div className="h-156.25 w-md flex flex-col gap-5 translate-x-[156.25px] translate -y-[50.6px]">
            <div className="h-17 w-md flex flex-col gap-2">
              <div className="h-9 w-md text-gray-900 text-2xl font-bold">
                Sign In
              </div>
              <div className="h-6 w-md">
                Enter your credentials to access your account
              </div>
            </div>

            <div className="h-121.25 w-md flex flex-col gap-5">
              <div className="h-20.75 w-md flex flex-col justify-between">
                <div className="h-6 w-md text-gray-900 font-semibold ">
                  Email Address
                </div>
                <div className="h-12.75 w-md rounded-[14px] bg-gray-200 p-3.5 flex justify-around">
                  <img src={mail} alt="mail" className="h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-4.75 w-[382.4px] border-none outline-none"
                  ></input>
                </div>
              </div>

              <div className="h-20.75 w-md flex flex-col justify-between">
                <div className="h-6 w-md text-gray-900 font-semibold ">
                  Password
                </div>
                <div className="h-12.75 w-md rounded-[14px] bg-gray-200 p-4 flex justify-between">
                  <div className=" w-48 flex justify-between ">
                    <img
                      src={passwordlock}
                      alt="passwordlock"
                      className="h-5 w-5"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="h-4.75 w-40 border-none outline-none"
                    ></input>
                  </div>
                  <img
                    src={passwordview}
                    alt="passwordview"
                    className="h-5 w-5"
                  />
                </div>
              </div>

              <div className="h-5 w-md flex gap-48">
                <div className="w-32 h-5 flex justify-between items-center">
                  <input  checked={checked} onChange={(e) => setchecked(e.target.value)} type="checkbox" className="h-4 w-4 "></input>
                  <a className="text font-semibold">Remember me</a>
                </div>
                <div className="w-32 h-5 text font-semibold">
                  Forgot Password?
                </div>
              </div>

              <button onClick={loginUser} disabled={!checked} className="h-13 w-md bg-black rounded-[14px] flex justify-center items-center">
                <a className="text-white font-semibold">Sign In</a>
              </button>

              <div className="h-13 w-md rounded-[14px] flex justify-center gap-2 items-center border border-gray-400">
                <img src={biomatric} alt="biomatric" className="h-5 w-5" />
                <a className="font-bold">Sign in with Biometrics</a>
              </div>

              <div className="h-5 w-md flex justify-center items-center">
                <div className="flex-1 h-px bg-gray-400"></div>
                <div className="h-5 w-33.5 flex justify-center items-center">
                  Or continue with
                </div>
                <div className="flex-1 h-px bg-gray-400"></div>
              </div>

              <div className="h-[45.6px] w-md flex justify-between">
                <div className="h-[45.6px] w-[141.32px] rounded-[14px] border border-gray-400 flex justify-center items-center">
                  <img src={google} alt="google" className="h-5 w-5" />
                </div>
                <div className="h-[45.6px] w-[141.32px] rounded-[14px] border border-gray-400 flex justify-center items-center">
                  <img src={github} alt="github" className="h-5 w-5" />
                </div>
                <div className="h-[45.6px] w-[141.32px] rounded-[14px] border border-gray-400 flex justify-center items-center">
                  <img src={apple} alt="apple" className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="h-6 w-md flex justify-center gap-1">
              <button>Don't have an account? </button>
              <Link to="/signup">
                <button className="text font-bold cursor-pointer  ">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
