import React from "react";
import goals from "../assets/goals.svg";
import roundtask from "../assets/roundtask.svg";
import uptread from "../assets/uptread.svg";
import plus from "../assets/plus.svg";
import blackplus from "../assets/blackplus.svg";
import rate from "../assets/rate.svg";
import { useState } from "react";

const Goals = () => {
  const [Goalhabit, setGoalhabit] = useState("Goal");
  const [Newgoal, setNewgoal] = useState(false);
  const [Newhabit, setNewhabit] = useState(false);

  return (
    <>
      <div className=" p-8 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1200px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={goals} alt="goals" className="h-[32px] w-[32px]" />
            </div>
            <div>
              <h1 className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Goals & Habits
              </h1>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Set goals and build better habits
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-[1200px]">
          <button
            onClick={() => setGoalhabit("Goal")}
            className={`flex items-center justify-center rounded-[10px] gap-2 w-[590px] h-[45px] ${Goalhabit === "Goal" ? "bg-[#F54900] text-white" : "bg-[#E5E7EB]"}`}
          >
            <img src={goals} alt="goals"></img>
            <p>Goals (0)</p>
          </button>

          <button
            onClick={() => setGoalhabit("Habit")}
            className={`flex items-center justify-center rounded-[10px] gap-2 w-[590px] h-[45px] ${Goalhabit === "Habit" ? "bg-[#F54900] text-white" : "bg-[#E5E7EB]"} bg-[#E5E7EB] `}
          >
            <img src={roundtask} alt="roundtask"></img>
            <p>Habits (0)</p>
          </button>
        </div>

        {/* Goals page */}

        {Goalhabit === "Goal" && (
          <div className="flex flex-col gap-4">
            <div className="h-[140px] w-[1200px] flex justify-between">
              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#00C950] flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img
                    src={roundtask}
                    alt="roundtask"
                    className="h-6 w-6"
                  ></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    Goals achieved
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  Completed
                </span>
              </div>

              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#2B7FFF]  flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img src={uptread} alt="uptread" className="h-6 w-6"></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    Active goals
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  In Progress
                </span>
              </div>

              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#F54900]  flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img src={goals} alt="goals" className="h-6 w-6"></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0%</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    Average
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  Progress
                </span>
              </div>
            </div>

            <div className="w-[1200px] flex flex-col gap-4 bg-[#FFFFFF] rounded-[14px] drop-shadow-lg p-6">
              <button
                onClick={() => setNewgoal(!Newgoal)}
                className="w-[1150px] bg-[#F54900] flex justify-center items-center gap-2 h-[45px] rounded-[10px]"
              >
                <img src={plus} alt="plus"></img>
                <p className="text-white">New Goal</p>
              </button>

              {Newgoal && (
                <div className="w-[1150px] bg-[#FFF7ED] flex flex-col gap-4 p-6 border border-[#FFD6A7] rounded-[14px]">
                  <span className="flex items-center gap-2">
                    <img src={blackplus} alt="plus"></img>
                    <p className="text text-[17px] font-semibold">
                      Create Goal
                    </p>
                  </span>

                  <input
                    type="text"
                    placeholder="Goal title..."
                    className="w-[1100px] h-[40px] border border-gray-400 rounded-[10px] px-4"
                  ></input>
                  <textarea
                    type="text"
                    placeholder="Goal description..."
                    className="w-[1100px] h-[100px] border border-gray-400 rounded-[10px] px-4 py-2"
                  ></textarea>

                  <div className="flex justify-between items-center w-[1100px]">
                    <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                      <option>Select Category</option>
                      <option>Career</option>
                      <option>Health</option>
                      <option>Finance</option>
                      <option>Education</option>
                      <option>Personal</option>
                      <option>Other</option>
                    </select>

                    <input
                      type="date"
                      className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 "
                    ></input>
                  </div>

                  <div className="w-[1100px] flex flex-col gap-2">
                    <p className="text font-semibold">
                      Milestones (one per line)
                    </p>
                    <textarea
                      type="text"
                      placeholder={`Milestone 1\nMilestone 2\nMilestone 3`}
                      className="border border-gray-400 rounded-[10px] px-4 py-2 h-[90px] w-[1100px]"
                    ></textarea>
                  </div>

                  <div className="w-[1100px] h-[70px] flex justify-between">
                    <button className="w-[1000px] h-[40px] bg-[#F54900] rounded-[10px] text-white hover:bg-purple-700">
                      Save
                    </button>
                    <button
                      onClick={() => setNewgoal(false)}
                      className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
                <img src={goals} alt="goals" className="w-12 h-12"></img>
                <p>No goals yet. Create one to get started!</p>
              </div>
            </div>
          </div>
        )}

        {/* Habit page */}

        {Goalhabit === "Habit" && (
          <div className="flex flex-col gap-4">
            <div className="h-[140px] w-[1200px] flex justify-between">
              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#2B7FFF] flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img
                    src={roundtask}
                    alt="roundtask"
                    className="h-6 w-6"
                  ></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    Total habits
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  Active Habits
                </span>
              </div>

              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#00C950]  flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img src={uptread} alt="uptread" className="h-6 w-6"></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    of 0
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  Completed Today
                </span>
              </div>

              <div className="h-[140px] w-[390px] rounded-[14px] bg-[#F54900]  flex justify-between p-4">
                <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
                  <img src={goals} alt="goals" className="h-6 w-6"></img>
                  <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
                  <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                    days
                  </p>
                </div>
                <span className="text-white  text-[14px] flex justify-center pt-3">
                  Best Streak
                </span>
              </div>
            </div>

            <div className="w-[1200px] flex flex-col gap-4 bg-[#FFFFFF] rounded-[14px] drop-shadow-lg p-6">
              <button
                onClick={() => setNewhabit(!Newhabit)}
                className="w-[1150px] bg-[#F54900] flex justify-center items-center gap-2 h-[45px] rounded-[10px]"
              >
                <img src={plus} alt="plus"></img>
                <p className="text-white">New Habit</p>
              </button>

              {Newhabit && (
                <div className="w-[1150px] bg-[#FFF7ED] flex flex-col gap-4 p-6 border border-[#FFD6A7] rounded-[14px]">
                  <span className="flex items-center gap-2">
                    <img src={blackplus} alt="plus"></img>
                    <p className="text text-[17px] font-semibold">
                      Create Habit
                    </p>
                  </span>

                  <input
                    type="text"
                    placeholder="Habit title..."
                    className="w-[1100px] h-[40px] border border-gray-400 rounded-[10px] px-4"
                  ></input>
                  <textarea
                    type="text"
                    placeholder="Habit description..."
                    className="w-[1100px] h-[100px] border border-gray-400 rounded-[10px] px-4 py-2"
                  ></textarea>

                  <div className="flex justify-between items-center w-[1100px]">
                    <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                      <option>Select Category</option>
                      <option>Health</option>
                      <option>Productivity</option>
                      <option>Learning</option>
                      <option>Fitness</option>
                      <option>Mindfulness</option>
                      <option>Other</option>
                    </select>

                    <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div className="w-[1100px] h-[70px] flex justify-between">
                    <button className="w-[1000px] h-[40px] bg-[#F54900] rounded-[10px] text-white hover:bg-purple-700">
                      Save
                    </button>
                    <button
                      onClick={() => setNewhabit(false)}
                      className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
                <img src={roundtask} alt="task" className="w-12 h-12"></img>
                <p>No habits yet. Create one to get started!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Goals;
