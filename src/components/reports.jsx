import React from "react";
import blacknotes from "../assets/blacknotes.svg";
import date from "../assets/date.svg";
import download from "../assets/download.svg"
import expensesummary from "../assets/expensesummary.svg"
import income from "../assets/income.svg"
import budget from "../assets/budget.svg"
import tax from "../assets/tax.svg"
import bluenotes from "../assets/bluenotes.svg"

const Reports = () => {
  return (
    <>
      <div className="p-8 flex flex-col gap-6 overflow-y-auto overflow-hidden bg-gray-50">
        <span>
          <p className="text font-bold text-[23px]">Reports & Analytics</p>
          <p className="text font-extralight text-[15px]">
            Generate detailed financial reports
          </p>
        </span>
        <div className=" flex justify-between">
          <div className="w-[288px] h-[100px] rounded-[14px] bg-gradient-to-br from-[#9810FA] to-[#F6339A] text text-white p-5">
            <p className="text text-[13px] font-extralight">
              Reports Generated
            </p>
            <p className="text text-[28px] font-bold">24</p>
          </div>
          <div className="w-[288px] h-[100px] rounded-[14px] bg-gradient-to-br from-[#155DFC] to-[#00B8DB] text text-white p-5">
            <p className="text text-[13px] font-extralight">This Month</p>
            <p className="text text-[28px] font-bold">$2,340</p>
          </div>
          <div className="w-[288px] h-[100px] rounded-[14px] bg-gradient-to-br from-[#00A63E] to-[#00BC7D] text text-white p-5">
            <p className="text text-[13px] font-extralight">Avg Monthly</p>
            <p className="text text-[28px] font-bold">$2,450</p>
          </div>
          <div className="w-[288px] h-[100px] rounded-[14px] bg-gradient-to-br from-[#F54900] to-[#FB2C36] text text-white p-5">
            <p className="text text-[13px] font-extralight">Categories</p>
            <p className="text text-[28px] font-bold">8</p>
          </div>
        </div>
        <div className="w-[1200px] rounded-2xl bg-[#FFFFFF] border border-gray-200 p-6 flex flex-col gap-6">
          <span className="flex items-center gap-2 ">
            <img className="w-5 h-5" src={blacknotes} alt="blacknotes" />
            <p className=" text text-[17px] font-semibold">
              Generate New Report
            </p>
          </span>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text font-semibold">Report Period</p>
              <select
                className="bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px] px-6"
                name=""
                id=""
              >
                <option>Monthly Report</option>
                <option>Yearly Report</option>
                <option>Quarterly Report</option>
                <option>Custom Date Range</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text font-semibold">Format</p>
              <select
                className="bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px] px-6"
                name=""
                id=""
              >
                <option>PDF Document</option>
                <option>Excel Spreadsheet</option>
                <option>CSV File</option>
                <option>JSON Data</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text font-semibold">From Date</p>
              <div className="flex items-center gap-4 bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px] px-6">
                <img className="w-5 h-5" src={date} alt="date" />
                <input
                  type="date"
                  className="bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px]"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text font-semibold">To Date</p>
              <div className="flex items-center gap-4 bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px] px-6">
                <img className="w-5 h-5" src={date} alt="date" />
                <input
                  type="date"
                  className="bg-[#F3F3F5] rounded-[14px] w-[563px] h-[48px]"
                ></input>
              </div>
            </div>
          </div>

          <button className="w-[1150px] h-[50px] bg-[#030213] rounded-[14px] flex items-center justify-center gap-2">

            <img src={download} alt="download"></img>
            <p className="text-white">Generate Report</p>

          </button>
        </div>

        <h1 className="text font-semibold text-[18px]">Report Templates</h1>

        <div className="flex justify-between">
            <button className="w-[590px] border border-gray-200 bg-[#FFFFFF] rounded-[14px] flex items-start p-5 gap-4">
                <img src={expensesummary}></img>
                <div className="text text-left flex flex-col gap-4">
                    <span>
                        <p className="text font-semibold">Expense Summary Report</p>
                        <p className="text font-light">Detailed breakdown of all expenses by category</p>
                    </span>    
                   
                    <h2 className="text font-semibold">Use Template →</h2>
                </div>
            </button>

            <button className="w-[590px] border border-gray-200 bg-[#FFFFFF] rounded-[14px] flex items-start p-5 gap-4">
                <img src={income}></img>
                <div className="text text-left flex flex-col gap-4">
                    <span>
                        <p className="text font-semibold">Income vs Expense Report</p>
                        <p className="text font-light">Compare income and expenses over time</p>
                    </span>    
                   
                    <h2 className="text font-semibold">Use Template →</h2>
                </div>
            </button>
        </div>

        <div className="flex justify-between">
            <button className="w-[590px] border border-gray-200 bg-[#FFFFFF] rounded-[14px] flex items-start p-5 gap-4">
                <img src={budget}></img>
                <div className="text text-left flex flex-col gap-4">
                    <span>
                        <p className="text font-semibold">Budget Performance Report</p>
                        <p className="text font-light">Track budget adherence and variances</p>
                    </span>    
                   
                    <h2 className="text font-semibold">Use Template →</h2>
                </div>
            </button>

            <button className="w-[590px] border border-gray-200 bg-[#FFFFFF] rounded-[14px] flex items-start p-5 gap-4">
                <img src={tax}></img>
                <div className="text text-left flex flex-col gap-4">
                    <span>
                        <p className="text font-semibold">Tax Summary Report</p>
                        <p className="text font-light">Prepare data for tax filing purposes</p>
                    </span>    
                   
                    <h2 className="text font-semibold">Use Template →</h2>
                </div>
            </button>
        </div>

        <div className="w-[1200px] rounded-2xl bg-[#FFFFFF] border border-gray-200 flex flex-col">
                <div className="h-[75px] border-b border-gray-200 flex items-center px-4 text text-[17px] font-semibold">Recent Reports</div>
                <div className="h-[90px] flex justify-between items-center px-4 border-b border-gray-200 hover:bg-gray-100">
                    <div className="flex gap-4">
                        <img src={bluenotes}></img>
                        <span className="flex flex-col gap-1">
                            <p className="text font-semibold">April 2026 Expense Report.pdf</p>
                            <span className="flex items-center gap-3">
                                <p>2026-05-01</p>
                                <span className="flex items-center justify-between">•</span>
                                <p>2.3 MB</p>
                                <button className="bg-gray-200 px-2 py-0.5 rounded text text-[12px]">PDF</button>

                            </span>
                        </span>

                    </div>
                    <button className="flex bg-gray-300 rounded-[10px] h-[40px] p-2 gap-2">
                        <img src={download}></img>
                        <p>Download</p>
                    </button>
                </div>

                <div className="h-[90px] flex justify-between items-center px-4 border-b border-gray-200 hover:bg-gray-100">
                    <div className="flex gap-4">
                        <img src={bluenotes}></img>
                        <span className="flex flex-col gap-1">
                        <p className="text font-semibold">Q1 2026 Tax Summary.xlsx</p>
                        <span className="flex items-center gap-3">
                                <p>2026-04-01</p>
                                <span className="flex items-center justify-between">•</span>
                                <p>1.8 MB</p>
                                <button className="bg-gray-200 px-2 py-0.5 rounded text text-[12px]">Excel</button>

                            </span>
                        </span>

                    </div>
                    <button className="flex bg-gray-300 rounded-[10px] h-[40px] p-2 gap-2">
                        <img src={download}></img>
                        <p>Download</p>
                    </button>
                </div>

                <div className="h-[90px] flex justify-between items-center px-4 hover:bg-gray-100">
                    <div className="flex gap-4">
                        <img src={bluenotes}></img>
                        <span className="flex flex-col gap-1">
                        <p className="text font-semibold">March Budget Analysis.pdf</p>
                        <span className="flex items-center gap-3">
                                <p>2026-04-05</p>
                                <span className="flex items-center justify-between">•</span>
                                <p>1.5 MB</p>
                                <button className="bg-gray-200 px-2 py-0.5 rounded text text-[12px]">PDF</button>

                            </span>
                        </span>

                    </div>
                    <button className="flex bg-gray-300 rounded-[10px] h-[40px] p-2 gap-2">
                        <img src={download}></img>
                        <p>Download</p>
                    </button>
                </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
