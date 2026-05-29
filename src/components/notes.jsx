import React from "react";
import notes from "../assets/notes.svg";
import star from "../assets/star.svg";
import categories from "../assets/categories.svg";
import plus from "../assets/plus.svg";
import blacknotes from "../assets/blacknotes.svg";
import blackplus from "../assets/blackplus.svg";
import search from "../assets/search.svg";
import { useState } from "react";

const Notes = () => {
  const [Newnotes, setNewnotes] = useState(false);

  return (
    <>
      <div className="p-8 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1200px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img src={notes} alt="notes" className="h-[32px] w-[32px]" />
            </div>

            <div>
              <span className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Notes & Planning
              </span>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Capture your thoughts and ideas
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNewnotes(!Newnotes)}
              className="px-4 py-2 rounded-[10px] bg-[#009689] text-white font-semibold text-[15px] flex items-center justify-center gap-2"
            >
              <img src={plus} alt="plus" className="h-5 w-5"></img>
              <p className="text text-[16px]">New note</p>
            </button>
          </div>
        </div>

        <div className="h-[140px] w-[1200px] flex justify-between">
          <div className="h-[140px] w-[390px] rounded-[14px] bg-gradient-to-br from-[#00BBA7] to-[#009689] flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={notes} alt="notes" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                All notes
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Total Notes
            </span>
          </div>

          <div className="h-[140px] w-[390px] rounded-[14px] bg-gradient-to-br from-[#2B7FFF] to-[#155DFC]  flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={star} alt="star" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Important notes
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Pinned
            </span>
          </div>

          <div className="h-[140px] w-[390px] rounded-[14px] bg-gradient-to-br from-[#AD46FF] to-[#9810FA]  flex justify-between p-4">
            <div className="flex flex-col pt-3 pl-2 gap-1 text-white">
              <img src={categories} alt="round" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">0</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Organized
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Categories
            </span>
          </div>
        </div>

        <div className="w-[1200px] bg-[#FFFFFF] drop-shadow-lg rounded-[14px] p-6 flex flex-col gap-6">
          <div className=" flex justify-between">
            <div className="flex items-center gap-2 w-[565px] h-[40px] border border-gray-400 px-4 rounded-[10px]">
              <img src={search} alt="search"></img>

              <input
                type="text"
                placeholder="Search notes..."
                className="outline-none"
              ></input>
            </div>

            <select className="w-[565px] h-[40px] border border-gray-400 px-4 rounded-[10px]">
              <option>All Categories</option>
            </select>
          </div>

          {Newnotes && (
            <div className="w-[1150px] bg-[#F0FDFA] flex flex-col gap-4 p-6 border border-[#96F7E4] rounded-[14px]">
              <span className="flex items-center gap-2">
                <img src={blackplus} alt="plus"></img>
                <p className="text text-[17px] font-semibold">Create Note</p>
              </span>

              <input
                type="text"
                placeholder="Note title..."
                className="w-[1100px] h-[40px] border border-gray-400 rounded-[10px] px-4"
              ></input>

              <div className="flex justify-between items-center w-[1100px]">
                <input
                  type="text"
                  placeholder="Category (e.g., Ideas, Goals, Plans)..."
                  className="w-[540px] h-[40px] px-4 rounded-[10px] border border-gray-400"
                ></input>

                <input
                  type="text"
                  placeholder="Tags (comma separated)..."
                  className="w-[540px] h-[40px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <p className="text text-black font-semibold">Note Color</p>

              <span className="flex gap-2">
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#FFFFFF] border-2 border-gray-400"></button>
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#EFF6FF] border-2 border-gray-400"></button>
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#F0FDF4] border-2 border-gray-400"></button>
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#FEFCE8] border-2 border-gray-400"></button>
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#FAF5FF] border-2 border-gray-400"></button>
                <button className="w-[40px] h-[40px] rounded-[10px] bg-[#FDF2F8] border-2 border-gray-400"></button>
              </span>

              <textarea
                type="text"
                placeholder="Note content..."
                className="w-[1100px] h-[150px] border border-gray-400 rounded-[10px] px-4 py-2"
              ></textarea>

              <div className="w-[1100px] h-[70px] flex justify-between">
                <button className="w-[1000px] h-[40px] bg-[#009689] rounded-[10px] text-white">
                  Save
                </button>
                <button
                  onClick={() => setNewnotes(false)}
                  className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
            <img src={blacknotes} alt="notes" className="w-12 h-12"></img>
            <p>No notes found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
