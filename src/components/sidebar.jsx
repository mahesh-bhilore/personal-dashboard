import React from "react";
import dashboard from "../assets/dashboard.svg";
import cross from "../assets/cross.svg";
import task from "../assets/task.svg";
import expense from "../assets/expense.svg";
import study from "../assets/study.svg";
import goals from "../assets/goals.svg";
import wallet from "../assets/wallet.svg";
import todos from "../assets/todos.svg";
import reports from "../assets/reports.svg";
import logout from "../assets/logout.svg";
import notes from "../assets/notes.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const currentUser =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

  return (
    <>
      <div className="md:w-[256px] md:h-[728px] w-[140px] h-[700px] border-r  border-gray-300">
        <div className="md:w-[255.2px] md:h-[68.8px] w-full h-[70px] border-b border-gray-300 flex items-center justify-between p-2 md:p-4">
          <div className="flex items-center gap-2 h-[28px]">
            <img src={dashboard} alt="dashboard" className="md:h-6 md:w-6 h-5 w-5" />
            <h1 className="text text-black font-medium md:text-lg text-[14px]">Dashboard</h1>
          </div>
          <img src={cross} alt="cross" className="md:h-5 md:w-5 h- w-4" />
        </div>

        <div className="md:w-[255.2px] md:h-[530px] w-full h-[450px] p-4 flex flex-col gap-2">
          <Link to="/dashboard">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={dashboard} alt="dashboard" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Dashboard</span>
            </button>
          </Link>

          <Link to="/task">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={task} alt="task" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Task</span>
            </button>
          </Link>

          <Link to="/expenses">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={expense} alt="expense" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Expenses</span>
            </button>
          </Link>

          <Link to="/studytracker">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={study} alt="study" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Study Tracker</span>
            </button>
          </Link>

          <Link to="/goals&habits">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[120px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={goals} alt="goals" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Goals & Habits</span>
            </button>
          </Link>

          <Link to="/wallet">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={wallet} alt="wallet" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Wallet</span>
            </button>
          </Link>

          <Link to="/todos">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={todos} alt="todos" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Todos</span>
            </button>
          </Link>

          <Link to="/reports">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={reports} alt="reports" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Reports</span>
            </button>
          </Link>

          <Link to="/notes">
            <button className="md:h-[48px] md:w-[223.2px] h-[40px] w-[100px] flex items-center md:p-4 gap-2 rounded-[14px]  text text-[#364153] font-semibold hover:bg-[#EFF6FF]">
              <img src={notes} alt="notes" className="md:h-5 md:w-5 h-3 w-3" />
              <span className="text-[12px] md:text-[16px]">Notes</span>
            </button>
          </Link>
        </div>

        <div className="w-[255.2px] h-[124px] border-t  border-gray-300  p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text text-[14px]">{currentUser?.Name}</p>
            <p className="text font-extralight text-[12px]">{currentUser?.Email}</p>
          </div>
          <Link to="/signin">
            <button className="flex p-4 gap-2 items-center cursor-pointer">
              <img src={logout} alt="logout" />
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
