import React from "react";
import plus from "../assets/plus.svg";
import correct from "../assets/correct.svg";
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import blackplus from "../assets/blackplus.svg";
import { useState } from "react";

const Task = () => {
  const [Newtask, setNewtask] = useState(false);

  return (
    <>
      <div className="p-6 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={correct} alt="correct" className="h-[32px] w-[32px]" />
            </div>

            <div>
              <h1 className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Task Manager
              </h1>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Organize and track all your tasks
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setNewtask(!Newtask)}
              className="w-[128.21px] h-[40px] rounded-[10px] bg-[#155DFC] text font-semibold text-[16px] text-[#FFFFFF] flex items-center justify-center gap-1"
            >
              <img src={plus} alt="plus" className="h-5 w-5"></img>
              <p className="text text-[16px]">New Task</p>
            </button>
          </div>
        </div>

        <div className=" flex flex-col p-6 justify-between rounded-[14px] drop-shadow-lg bg-[#FFFFFF] gap-4">
          <div className="h-[52px]  flex justify-evenly items-center rounded-[14px] bg-[#FFFFFF]">
            <div className="w-[276px] h-[41px] rounded-[10px] border border-gray-300 flex items-center p-4 gap-2">
              <img src={search} alt="search" className="h-5 w-5"></img>
              <input
                type="text"
                placeholder="Search tasks..."
                className="outline-none"
              ></input>
            </div>

            <div className="w-[276px] h-[41px] rounded-[10px] border border-gray-300">
              <select className="w-[276px] h-[41px] px-4 outline-none">
                <option>All Tasks</option>
                <option>Active</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="w-[276px] h-[41px] rounded-[10px] border border-gray-300">
              <select className="w-[276px] h-[41px] px-4 outline-none">
                <option>All Categories</option>
              </select>
            </div>

            <div className="w-[276px] h-[41px] rounded-[10px] flex items-center p-4 gap-2">
              <img src={filter} alt="filter" className="h-4 w-4"></img>
              <input
                type="text"
                placeholder="0 tasks"
                className="outline-none"
              ></input>
            </div>
          </div>

          {Newtask && (
            <div className=" w-[1170px] rounded-[14px] border drop-shadow-lg border-[#BEDBFF] p-4 bg-[#EFF6FF]">
              <div className=" h-[630px] flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={blackplus} alt="plus" className="h-5 w-5"></img>
                  <p className="text text-[16px] font-semibold">
                    Create New Task
                  </p>
                </div>

                <div className=" h-[50px] rounded-[10px] border border-gray-400  flex items-center">
                  <input
                    type="text"
                    placeholder="Task title..."
                    className="outline-none ml-4 w-[1140px] h-[50px] rounded-[10px]"
                  ></input>
                </div>

                <div className=" h-[110px] flex flex-col gap-2">
                  <textarea
                    type="text"
                    placeholder="Task description..."
                    className=" h-[100px] border border-gray-400 rounded-[10px] px-4 outline-none py-3"
                  ></textarea>
                </div>

                <div className="h-[70px] flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text text-[13.2px] font-semibold">Priority</p>
                    <select className="w-[358px] h-[40px] border border-gray-400 rounded-[10px] px-4 outline-none">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text text-[13.2px] font-semibold">Category</p>
                    <input
                      type="text"
                      placeholder="e.g., Work, Personal"
                      className="w-[358px] h-[40px] border border-gray-400 rounded-[10px] px-4 outline-none"
                    ></input>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text text-[13.2px] font-semibold">Deadline</p>
                    <input
                      type="date"
                      className="w-[358px] h-[40px] border border-gray-400 rounded-[10px] px-4 outline-none"
                    ></input>
                  </div>
                </div>

                <div className=" h-[70px] flex flex-col gap-2">
                  <p className="text text-[13.2px] font-semibold">
                    Tags (comma separated)
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., important, urgent, review"
                    className=" h-[40px] border border-gray-400 rounded-[10px] px-4 outline-none"
                  ></input>
                </div>

                <div className=" h-[110px] flex flex-col gap-2">
                  <p className="text text-[13.2px] font-semibold">
                    Subtasks (one per line)
                  </p>
                  <textarea
                    type="text"
                    placeholder={`Subtask 1\nSubtask 2\nSubtask 3`}
                    className=" h-[100px] border border-gray-400 rounded-[10px] px-4 outline-none"
                  ></textarea>
                </div>

                <div className=" h-[70px] flex justify-between">
                  <button className="w-[1000px] h-[40px] bg-[#00A63E] rounded-[10px] text-white hover:bg-green-700">
                    Create Task
                  </button>
                  <button
                    onClick={() => setNewtask(false)}
                    className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
            <img src={correct} alt="correct" className="w-12 h-12"></img>
            <p>No tasks found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
