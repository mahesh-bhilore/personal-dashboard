import React from "react";
import study from "../assets/study.svg";
import plus from "../assets/plus.svg";
import rate from "../assets/rate.svg";
import uptread from "../assets/uptread.svg";
import filter from "../assets/filter.svg";
import blackplus from "../assets/blackplus.svg";
import { useState } from "react";

const Studytracker = () => {
  const [Progress, setProgress] = useState(0);
  const [Newitem, setNewitem] = useState(false);

  return (
    <>
      <div className="p-8 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1200px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={study} alt="study" className="h-[32px] w-[32px]" />
            </div>

            <div>
              <span className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Study & Learning Tracker
              </span>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Track your learning journey
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNewitem(!Newitem)}
              className="px-4 py-2 rounded-[10px] bg-[#9810FA] text-white font-semibold text-[15px] flex items-center justify-center gap-2"
            >
              <img src={plus} alt="plus" className="h-5 w-5"></img>
              <p className="text text-[16px]">New Item</p>
            </button>
          </div>
        </div>

        <div className="h-[140px] w-[1200px] flex justify-between">
          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#00C950] flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={rate} alt="rate" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Topics mastered
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Completed
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#2B7FFF]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={uptread} alt="uptread" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Currently learning
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              In Progress
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#AD46FF]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={study} alt="study" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Future topics
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Planned
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#E7000B]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={rate} alt="rate" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0h</p>
              <p className="w-[101.16px] h-[20px] text text-[12.9px]">
                Total hours
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Time Spent
            </span>
          </div>
        </div>

        <div className="w-[1200px] bg-[#FFFFFF] drop-shadow-lg rounded-[14px] p-6 flex flex-col gap-6">
          <div className="w-[1200px] flex justify-between">
            <select className="w-[390px] h-[40px] border border-gray-400 px-4 rounded-[10px]">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Planned</option>
            </select>

            <select className="w-[390px] h-[40px] border border-gray-400 px-4 rounded-[10px]">
              <option>All Categories</option>
              <option>AWS</option>
              <option>DevOps</option>
              <option>FullStack</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Mobile</option>
              <option>Data Science</option>
              <option>Machine Learning</option>
              <option>System Design</option>
              <option>Algorithms</option>
              <option>Other</option>
            </select>

            <div className="w-[390px] h-[40px] flex items-center px-4 gap-2">
              <img src={study} alt="study" className="h-4 w-4"></img>
              <input
                type="text"
                placeholder="0 tasks"
                className="outline-none"
              ></input>
            </div>
          </div>

          {Newitem && (
            <div className="w-[1150px] border border-[#E9D4FF] bg-[#FAF5FF] rounded-[14px] flex flex-col px-6 py-6 gap-5">
              <span className="flex gap-2">
                <img src={blackplus} alt="plus"></img>
                <p className="text text-[20px] font-semibold">Add Study Item</p>
              </span>

              <div className="flex justify-between items-center w-[1100px]">
                <input
                  type="text"
                  placeholder="Title (e.g., AWS Solutions Architect)..."
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400"
                ></input>
                <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                  <option>Select Category</option>
                  <option>AWS</option>
                  <option>DevOps</option>
                  <option>FullStack</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Mobile</option>
                  <option>Data Science</option>
                  <option>Machine Learning</option>
                  <option>System Design</option>
                  <option>Algorithms</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex justify-between items-center w-[1100px]">
                <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                  <option>Planned</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>

                <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                  <option>Low Priority</option>
                  <option>Medium Priority</option>
                  <option>High Priority</option>
                </select>
              </div>

              <div className="flex justify-between items-center w-[1100px]">
                <input
                  type="date"
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 "
                ></input>
                <input
                  type="date"
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 "
                ></input>
              </div>

              <textarea
                type="text"
                placeholder="Description..."
                className="border border-gray-400 rounded-[10px] px-4 py-2 h-[90px] w-[1100px]"
              ></textarea>

              <div className="w-[1100px] flex flex-col gap-2">
                <p className="text font-semibold">Progress (%)</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={Progress}
                  onChange={(e) => setProgress(e.target.value)}
                ></input>
                <p>{Progress}%</p>
              </div>

              <div className="w-[1100px] flex flex-col gap-2">
                <p className="text font-semibold">Time Spent (hours)</p>
                <input
                  type="number"
                  placeholder="Amount..."
                  className="h-[45px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <div className="w-[1100px] flex flex-col gap-2">
                <p className="text font-semibold">Skills (comma separated)</p>
                <input
                  type="text"
                  placeholder="e.g., EC2, S3, Lambda, CloudFormation"
                  className="h-[45px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <div className="w-[1100px] flex flex-col gap-2">
                <p className="text font-semibold">
                  Resources (one per line: Title | URL | Type)
                </p>
                <textarea
                  type="text"
                  placeholder={`AWS Course | https://example.com | course\nCloud Practitioner Book | https://example.com | book`}
                  className="border border-gray-400 rounded-[10px] px-4 py-2 h-[90px] w-[1100px]"
                ></textarea>
              </div>

              <div className="w-[1100px] flex flex-col gap-2">
                <p className="text font-semibold">Notes</p>
                <textarea
                  type="text"
                  placeholder="Additional notes..."
                  className="border border-gray-400 rounded-[10px] px-4 py-2 h-[90px] w-[1100px]"
                ></textarea>
              </div>

              <div className="w-[1100px] h-[70px] flex justify-between">
                <button className="w-[1000px] h-[40px] bg-[#9810FA] rounded-[10px] text-white hover:bg-purple-700">
                  Create Task
                </button>
                <button
                  onClick={() => setNewitem(false)}
                  className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
            <img src={study} alt="study" className="w-12 h-12"></img>
            <p>No study items found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studytracker;
