import React from "react";
import person from "../assets/person.svg";
import home from "../assets/home.svg";
import business from "../assets/business.svg";
import mail from "../assets/mail.svg";
import passwordlock from "../assets/passwordlock.svg";
import passwordview from "../assets/passwordview.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Signup = () => {

    const [Type,setType] = useState("");
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [showPassword,setshowPassword] = useState(false);
    const [Checked,setChecked] =useState(false);
    const [Selected,setSelected] = useState("Personal")

    const saveData = () => {

        const user = {

            Type,
            Name,
            Email,
            Password,

        };

        const oldUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];


    const updatedUsers = [
      ...oldUsers,
      user,
    ];

        localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)

        );

        alert("saved");

        setName("");
        setEmail("");
        setType("");

    };

    const handletype = (value) => {
        setType(value);

    };

    

  return (
    <>
      <div className="h-screen w-screen  flex flex-col gap-6 items-center p-7 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text text-3xl font-bold">Create Account</p>
          <p className="text font-extralight flex gap-2">
            Join thousands of smart money managers
          </p>
        </div>

        <div className="w-[672px] h-auto flex flex-col gap-4">
          <p className="text font-semibold ">Choose Account Type</p>

          <div className="flex justify-between select-none">
            <button onClick={() => {handletype("Personal")}} className={`h-[107.19px] w-[213.32px] border border-gray-400 rounded-[14px] flex flex-col items-center justify-center ${Type ==="Personal" ? "bg-gray-100" : ""} hover:bg-gray-100 cursor-pointer`}>
              <img src={person} alt="person" className="h-5 w-5" />
              <p className="text font-semibold">Personal</p>
              <p className="text font-semibold text-gray-500 text-[12px]">
                For individual use
              </p>
            </button>

            <button onClick={() => {handletype("Family")}} className={`h-[107.19px] w-[213.32px] border border-gray-400 rounded-[14px] flex flex-col items-center justify-center ${Type ==="Family" ? "bg-gray-100" : ""} hover:bg-gray-100 cursor-pointer`}>
              <img src={home} alt="home" className="h-5 w-5" />
              <p className="text font-semibold">Family</p>
              <p className="text font-semibold text-gray-500 text-[12px]">
                Share with family
              </p>
            </button>

            <button onClick={() => {handletype("Business")}} className={`h-[107.19px] w-[213.32px] border border-gray-400 rounded-[14px] flex flex-col items-center justify-center ${Type ==="Business" ? "bg-gray-100" : ""} hover:bg-gray-100 cursor-pointer`}>
              <img src={business} alt="business" className="h-5 w-5" />
              <p className="text font-semibold">Business</p>
              <p className="text font-semibold text-gray-500 text-[12px]">
                For companies
              </p>
            </button>
          </div>

          <div className="flex justify-between">
            <p className="w-[330px] text font-semibold">Full Name</p>
            <p className="w-[330px] text font-semibold">Email Address</p>
          </div>

          <div className="flex justify-between">
            <div className="w-[330px] h-[53.6px] p-3.5 bg-gray-200 border border-gray-300 rounded-[14px] flex justify-around items-center">
              <img src={person} alt="person" className="h-5 w-5" />
              <input
              type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="h-4.75 w-[250px] border-none outline-none"
              ></input>
            </div>

            <div className="w-[330px] h-[53.6px] p-3.5 bg-gray-200 border border-gray-300 rounded-[14px] flex justify-around items-center">
              <img src={mail} alt="mail" className="h-5 w-5" />
              <input
              type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-4.75 w-[250px] border-none outline-none"
              ></input>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="w-[330px] text font-semibold">Password</p>
            <p className="w-[330px] text font-semibold">Confirm Password</p>
          </div>

          <div className="flex justify-between">
            <div className="w-[330px] h-[53.6px] p-3.5 bg-gray-200 border border-gray-300 rounded-[14px] flex justify-around items-center">
              <img src={passwordlock} alt="passwordlock" className="h-5 w-5" />
              <input
              type={showPassword ? "text" : "password"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-4.75 w-[220px] border-none outline-none"
              ></input>
              <img onClick={() => setshowPassword(!showPassword)} src={passwordview} alt="passwordview" className="h-5 w-5" />
            </div>

            <div className="w-[330px] h-[53.6px] p-3.5 bg-gray-200 border border-gray-300 rounded-[14px] flex justify-around items-center">
              <img src={passwordlock} alt="passwordlock" className="h-5 w-5" />
              <input
                placeholder="Confirm Password"
                className="h-4.75 w-[250px] border-none outline-none"
              ></input>
            </div>
          </div>

          <div className="h-[20px] w-[672px] flex gap-4 items-center">
            <input type="checkbox" checked={Checked} onChange={(e) => setChecked(e.target.value)} className="h-4 w-4 "></input>
            <p className="text font-semibold text-gray-500 text-[12px]">
              I agree to the
              <span className="text font-bold text-black mr-1 ml-1">
                Terms of Service
              </span>
              and
              <span className="text font-bold text-black ml-1">
                Privacy Policy
              </span>
            </p>
          </div>

          <Link to="/signin">  
          <button onClick={saveData} disabled={!Checked} className="h-[53.6px] w-[672px] bg-black rounded-[14px] flex justify-center items-center cursor-pointer">
            <p className="text-white font-semibold select-none">
              Create Account
            </p>
          </button>
          </Link>

          <div className="h-6 w-[672px] flex justify-center gap-1">
            <button className="text font-extralight text-[14px]">
              Already have an account?{" "}
            </button>
            <Link to="/signin">
              {" "}
              <button className="text font-bold cursor-pointer">
                Sign In
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
