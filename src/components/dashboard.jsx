import React from "react";
import dashboard from "../assets/dashboard.svg";
import lifeline from "../assets/lifeline.svg";
import doller from "../assets/doller.svg";
import roundtask from "../assets/roundtask.svg";
import rate from "../assets/rate.svg";
import { FinancialChart, Productivity, Activity } from "./chart.jsx";
import study from "../assets/study.svg";
import colorstudy from "../assets/colorstudy.svg";
import colorrate from "../assets/colorrate.svg";
import colorroundtask from "../assets/colorroundtask.svg";
import colorlifeline from "../assets/colorlifeline.svg";

const Dashboard = () => {

    

  return (
    <>
      <div className="md:p-6 p-2 flex flex-col gap-6 overflow-y-auto bg-gray-50">
        <div className="md:h-[52px]  flex flex-col items-center md:flex-row justify-between">
          <div className="flex flex-col items-center md:flex-row md:items-center gap-2">
            <div>
              <img
                src={dashboard}
                alt="dashboard"
                className="md:h-[32px] md:w-[32px] h-6 w-6"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text font-semibold text-[14px] md:text-2xl w-[150px] md:w-[227.1px] md:h-[32px]">
                Dashboard Overview
              </h1>
              <h3 className="text  text-[#65514a] text-[12px] md:text-[14px] md:w-[238.62px] md:h-[20px]">
                Your productivity and financial insights
              </h3>
            </div>
          </div>
          <div className="flex items-center mt-4 md:flex-row md:items-center gap-1 md:gap-2">
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[14px]">
              Week
            </button>
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[14px]">
              Month
            </button>
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[14px]">
              Year
            </button>
          </div>
        </div>

        <div className="md:h-[140px]  flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="md:h-[140px] md:w-[288.2px] w-full rounded-[14px] bg-[#2B7FFF] flex justify-between p-4">
            <div className="flex flex-col pt-2 gap-1 text-white">
              <img src={lifeline} alt="lifeline" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0%</p>
              <p className="w-[80.19px] h-[20px] text text-[12.9px]">
                Overall score
              </p>
            </div>
            <span className="text-white text-[14px] flex justify-center pt-1">
              Productivity
            </span>
          </div>

          <div className="md:h-[140px] md:w-[288.2px] w-full rounded-[14px] bg-[#00C950] flex justify-between p-4">
            <div className="flex flex-col pt-2 text-white">
              <img src={doller} alt="doller" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">$0</p>
            </div>
            <span className="text-white text-[14px] flex justify-center pt-1">
              Balance
            </span>
          </div>

          <div className="md:h-[140px] md:w-[288.2px] w-full rounded-[14px] bg-[#AD46FF] flex justify-between p-4">
            <div className="flex flex-col pt-2 gap-1 text-white">
              <img src={roundtask} alt="roundtask" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0/0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                0% completion rate
              </p>
            </div>
            <span className="text-white text-[14px] flex justify-center pt-2">
              Tasks
            </span>
          </div>

          <div className="md:h-[140px] md:w-[288.2px] w-full rounded-[14px] bg-[#FF6900] flex justify-between p-4">
            <div className="flex flex-col pt-2 gap-1 text-white">
              <img src={rate} alt="rate" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0.0%</p>
              <p className="w-[101.16px] h-[20px] text text-[12.9px]">
                of income saved
              </p>
            </div>
            <span className="text-white text-[14px] flex justify-center pt-1">
              Savings Rate
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <FinancialChart />
          <Productivity />
        </div>

        <div className="flex justify-between">
          <div className="w-[588.4px] h-[405px] rounded-[14px] shadow-lg p-4 flex flex-col justify-between">
            <h1 className="text-2xl font-semibold mb-6">Financial Breakdown</h1>

            <div className="flex justify-evenly">
              <div className="flex flex-col items-center ">
                <h2>Income</h2>
                <h2 className="text text-[#00A63E]">$0</h2>
              </div>

              <div className="flex flex-col items-center">
                <h2>Expenses</h2>
                <h2 className="text text-[#E7000B]">$0</h2>
              </div>

              <div className="flex flex-col items-center">
                <h2>Savings</h2>
                <h2 className="text text-[#155DFC]">$0</h2>
              </div>
            </div>
          </div>

          <Activity />
        </div>

        <div className="flex justify-around">
          <div className=" w-[288.2px] h-[117.97px] flex rounded-[14px] p-4 bg-[#FFFFFF] shadow-lg flex flex-col gap-1">
            <div className=" w-[236px] h-[51.99px] flex items-center gap-2">
              <div className="h-[36px] w-[36px] bg-[#DBEAFE] rounded-[10px] flex justify-center items-center">
                <img
                  src={colorstudy}
                  alt="study"
                  className="h-[20px] w-[20px] "
                ></img>
              </div>

              <div className="flex flex-col">
                <p className="h-[32px] w-[13.14px] text text-[24px]">0</p>
                <p className="text text-[12.8px] text-[#4A5565] w-[72.5px] h-[20px]">
                  Study Items{" "}
                </p>
              </div>
            </div>

            <div className="w-[256.2px] h-[6px] bg-[#E5E7EB] rounded-2xl"></div>

            <p className="w-[87.95px] h-[16px] text text-[11.1px] text-[#6A7282]">
              0% avg progress
            </p>
          </div>

          <div className=" w-[288.2px] h-[117.97px] flex rounded-[14px] p-4 bg-[#FFFFFF] shadow-lg">
            <div className=" w-[236px] h-[51.99px] flex items-center gap-2">
              <div className="h-[36px] w-[36px] bg-[#DCFCE7] rounded-[10px] flex justify-center items-center">
                <img
                  src={colorrate}
                  alt="rate"
                  className="h-[20px] w-[20px] "
                ></img>
              </div>

              <div className="flex flex-col">
                <p className="h-[32px] w-[13.14px] text text-[24px]">0</p>
                <p className="text text-[12.8px] text-[#4A5565] w-[90.5px] h-[20px]">
                  Goals Achieved{" "}
                </p>
              </div>
            </div>
          </div>

          <div className=" w-[288.2px] h-[117.97px] flex rounded-[14px] p-4 bg-[#FFFFFF] shadow-lg">
            <div className=" w-[236px] h-[51.99px] flex items-center gap-2">
              <div className="h-[36px] w-[36px] bg-[#F3E8FF] rounded-[10px] flex justify-center items-center">
                <img
                  src={colorroundtask}
                  alt="roundtask"
                  className="h-[20px] w-[20px] "
                ></img>
              </div>

              <div className="flex flex-col">
                <p className="h-[32px] w-[13.14px] text text-[24px]">0</p>
                <p className="text text-[12.8px] text-[#4A5565] w-[72.5px] h-[20px]">
                  Todos Done{" "}
                </p>
              </div>
            </div>
          </div>

          <div className=" w-[288.2px] h-[117.97px] flex rounded-[14px] p-4 bg-[#FFFFFF] shadow-lg">
            <div className=" w-[236px] h-[51.99px] flex items-center gap-2">
              <div className="h-[36px] w-[36px] bg-[#FFEDD4] rounded-[10px] flex justify-center items-center">
                <img
                  src={colorlifeline}
                  alt="lifeline"
                  className="h-[20px] w-[20px] "
                ></img>
              </div>

              <div className="flex flex-col">
                <p className="h-[32px] w-[13.14px] text text-[24px]">0</p>
                <p className="text text-[12.8px] text-[#4A5565] w-[73.5px] h-[20px]">
                  Habits Today{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
