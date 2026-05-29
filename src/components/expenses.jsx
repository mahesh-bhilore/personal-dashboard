import React from "react";
import greendoller from "../assets/greendoller.svg";
import uptread from "../assets/uptread.svg";
import downtread from "../assets/downtread.svg";
import cutround from "../assets/cutround.svg";
import doller from "../assets/doller.svg";
import exporticon from "../assets/exporticon.svg";
import plus from "../assets/plus.svg";
import blackplus from "../assets/blackplus.svg";
import { useState } from "react";

const Expenses = () => {
  const [Newtransaction, setNewtransaction] = useState(false);
  const [Recurring, setRecurring] = useState(false);

  return (
    <>
      <div className="p-6 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1200px] flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={greendoller}
                alt="doller"
                className="h-[32px] w-[32px]"
              />
            </div>
            <div>
              <h1 className="text font-semibold text-2xl w-[227.1px] h-[32px]">
                Dashboard Overview
              </h1>
              <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
                Your productivity and financial insights
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[15px]">
              List
            </button>
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[15px]">
              Analytics
            </button>
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[15px]">
              Budget
            </button>
            <button className="px-4 py-2 rounded-[10px] bg-[#E5E7EB] text font-semibold text-[15px]">
              Recurring
            </button>
          </div>
        </div>

        <div className="h-[140px] w-[1200px] flex justify-between">
          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#00C950] flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={uptread} alt="uptread" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">$0.00</p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Income
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#E7000B]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={downtread} alt="downtread" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">$0.00</p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Expenses
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#2B7FFF]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={doller} alt="doller" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">$0.00</p>
              <p className="w-[120.88px] h-[20px] text text-[12.9px]">
                Net month
              </p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Balance
            </span>
          </div>

          <div className="h-[140px] w-[288.2px] rounded-[14px] bg-[#AD46FF]  flex justify-between p-4">
            <div className="flex flex-col pt-3 gap-1 text-white">
              <img src={cutround} alt="cutround" className="h-6 w-6"></img>
              <p className="w-[40.94px] h-[39.2px] text text-[28px]">$0.00</p>
              <p className="w-[101.16px] h-[20px] text text-[12.9px]">of $0</p>
            </div>
            <span className="text-white  text-[14px] flex justify-center pt-3">
              Budget Left
            </span>
          </div>
        </div>

        <div className=" w-[1200px] p-6 flex flex-col justify-between rounded-[14px] drop-shadow-lg bg-[#FFFFFF] gap-6">
          <div className="flex justify-between">
            <div className="flex gap-2 text text-[15px] font-semibold">
              <button className="px-4 py-2 bg-[#F3F4F6] rounded-[10px]">
                Week
              </button>
              <button className="px-4 py-2 bg-[#F3F4F6] rounded-[10px]">
                Month
              </button>
              <button className="px-4 py-2 bg-[#F3F4F6] rounded-[10px]">
                Year
              </button>
              <button className="px-4 py-2 bg-[#F3F4F6] rounded-[10px]">
                Custom
              </button>
            </div>
            <button className="bg-[#155DFC] w-[107px] h-[40px] flex rounded-[10px] items-center justify-center gap-3">
              <img src={exporticon} alt="exporticon" className="h-5 w-5"></img>
              <p className="text-white">Export</p>
            </button>
          </div>

          <div className="flex justify-between">
            <select className="w-[374px] h-[40px] rounded-[10px] border border-gray-400 px-4 outline-green-500">
              <option>All Transactions</option>
              <option>Income Only </option>
              <option>Expenses Only</option>
            </select>

            <select className="w-[374px] h-[40px] rounded-[10px] border border-gray-400 px-4 outline-green-500">
              <option>All Categories</option>
              <option>Food & Dining</option>
              <option>Transportation</option>
              <option>Shopping</option>
              <option>Entertainment</option>
              <option>Bills & Utilities</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Travel</option>
              <option>Insurance</option>
              <option>Other</option>
              <option>Salary</option>
              <option>Freelance</option>
              <option>Business</option>
              <option>Investment</option>
              <option>Gift</option>
              <option>Bonus</option>
            </select>

            <button
              onClick={() => setNewtransaction(!Newtransaction)}
              className="w-[374px] h-[40px] rounded-[10px] border border-gray-400 flex justify-center items-center gap-2 bg-[#00A63E]"
            >
              <img src={plus} alt="plus"></img>
              <p className="text-white">Add Transaction</p>
            </button>
          </div>

          {Newtransaction && (
            <div className="w-[1150px] border border-green-400 bg-[#F0FDF4] rounded-[14px] flex flex-col px-4 py-3 gap-5">
              <span className="flex gap-2">
                <img src={blackplus} alt="plus"></img>
                <p className="text font-semibold">New Transaction</p>
              </span>

              <div className="flex justify-between items-center w-[1100px]">
                <button className="w-[543px] h-[42px] rounded-[10px] border border-gray-400 bg-[#F3F4F6]">
                  Income
                </button>
                <button className="w-[543px] h-[42px] rounded-[10px] border border-gray-400 bg-[#F3F4F6]">
                  Expense
                </button>
              </div>

              <div className="flex justify-between items-center w-[1100px]">
                <input
                  type="text"
                  placeholder="Title..."
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400"
                ></input>
                <input
                  type="number"
                  placeholder="Amount..."
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <div className="flex justify-between items-center w-[1100px]">
                <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                  <option>Select Category</option>
                  <option>Salary</option>
                  <option>Freelance</option>
                  <option>Business</option>
                  <option>Investment</option>
                  <option>Gift</option>
                  <option>Bonus</option>
                </select>
                <input
                  type="text"
                  placeholder="Subcategory (optional)..."
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400"
                ></input>
              </div>

              <div className="flex justify-between items-center w-[1100px]">
                <input
                  type="date"
                  className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 "
                ></input>
                <select className="w-[543px] h-[42px] px-4 rounded-[10px] border border-gray-400 ">
                  <option>Payment Method</option>
                  <option>Cash</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Bank Transfer</option>
                  <option>Other</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Tags (comma separated)..."
                className="w-[1100px] h-[42px] rounded-[10px] border border-gray-400 px-4"
              ></input>

              <span className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  onClick={() => setRecurring(!Recurring)}
                ></input>
                <span>Recurring transaction</span>
                {Recurring && (
                  <select className="px-4 py-2 border border-gray-400 rounded-[10px]">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                )}
              </span>

              <textarea
                type="text"
                placeholder="Notes (optional)..."
                className="border border-gray-400 rounded-[10px] px-4 py-2 h-[70px] w-[1100px]"
              ></textarea>

              <div className="w-[1100px] h-[70px] flex justify-between">
                <button className="w-[1000px] h-[40px] bg-[#00A63E] rounded-[10px] text-white hover:bg-green-700">
                  Create Task
                </button>
                <button
                  onClick={() => setNewtransaction(false)}
                  className="w-[79px] h-[40px] bg-[#D1D5DC] rounded-[10px] text text-[14.3px] font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 h-[200px] text font-extralight">
            <img src={doller} alt="doller" className="w-12 h-12"></img>
            <p>No transactions found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
