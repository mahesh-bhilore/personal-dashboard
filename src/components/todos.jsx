import React from "react";
import todos from "../assets/todos.svg";
import plus from "../assets/plus.svg";
import correct from "../assets/correct.svg";
import round from "../assets/round.svg";
import blackplus from "../assets/blackplus.svg";
import { useState } from "react";

const Todos = () => {
  const [Newtodo, setNewtodo] = useState(false);

  return (
    <>
      <div className=" p-8 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1200px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={todos} alt="todos" className="h-[32px] w-[32px]" />
            </div>

            <div>
              <span className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Todo List
              </span>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Quick tasks and reminders
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNewtodo(!Newtodo)}
              className="px-4 py-2 rounded-[10px] bg-[#E60076] text-white font-semibold text-[15px] flex items-center justify-center gap-2"
            >
              <img src={plus} alt="plus" className="h-5 w-5"></img>
              <p className="text text-[16px]">New Todo</p>
            </button>
          </div>
        </div>

        <div className="h-[140px] w-[1200px] flex justify-between">
          <div className="h-[140px] w-[390px] rounded-[14px] bg-[#2B7FFF] flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={todos} alt="todo" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                All todos
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Total
            </span>
          </div>

          <div className="h-[140px] w-[390px] rounded-[14px] bg-[#00C950]  flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={correct} alt="correct" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">Done</p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Completed
            </span>
          </div>

          <div className="h-[140px] w-[390px] rounded-[14px] bg-[#F54900]  flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={round} alt="round" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">To Do</p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Pending
            </span>
          </div>
        </div>

        <div className="w-[1200px] bg-[#FFFFFF] drop-shadow-lg rounded-[14px] p-6 flex flex-col gap-6">
          <div className=" flex justify-between">
            <button className="w-[370px] h-[40px] bg-[#F3F4F6] px-4 rounded-[10px]">
              All
            </button>

            <button className="w-[370px] h-[40px] bg-[#F3F4F6] px-4 rounded-[10px]">
              Active
            </button>

            <button className="w-[370px] h-[40px] bg-[#F3F4F6]  px-4 rounded-[10px] ">
              Completed
            </button>
          </div>

          {Newtodo && (
            <div className="w-[1150px] bg-[#FDF2F8] flex flex-col gap-4 p-6 border border-[#FCCEE8] rounded-[14px]">
              <span className="flex items-center gap-2">
                <img src={blackplus} alt="plus"></img>
                <p className="text text-[17px] font-semibold">Create Todo</p>
              </span>

              <input
                type="text"
                placeholder="Todo title..."
                className="w-[1100px] h-[40px] border border-gray-400 rounded-[10px] px-4"
              ></input>
              <textarea
                type="text"
                placeholder="Description (optional)..."
                className="w-[1100px] h-[100px] border border-gray-400 rounded-[10px] px-4 py-2"
              ></textarea>

              <div className="flex justify-between items-center w-[1100px]">
                <select className="w-[350px] h-[40px] px-4 rounded-[10px] border border-gray-400">
                  <option>Low Priority</option>
                  <option>Medium Priority</option>
                  <option>High Priority</option>
                </select>

                <input
                  type="text"
                  placeholder="Category (optional)"
                  className="w-[350px] h-[40px] px-4 rounded-[10px] border border-gray-400"
                ></input>

                <input
                  type="date"
                  className="w-[350px] h-[40px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <div className="w-[1100px] h-[70px] flex justify-between">
                <button className="w-[1000px] h-[40px] bg-[#E60076] rounded-[10px] text-white">
                  Save
                </button>
                <button
                  onClick={() => setNewtodo(false)}
                  className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
            <img src={todos} alt="todo" className="w-12 h-12"></img>
            <p>No todos found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
