import React from "react";
import plus from "../assets/plus.svg";
import phone from "../assets/phone.svg";
import card from "../assets/card.svg";
import sendmoney from "../assets/sendmoney.svg";
import request from "../assets/request.svg";
import qr from "../assets/qr.svg";
import paybill from "../assets/paybill.svg";

const Wallet = () => {
  return (
    <>
      <div className="  px-6 py-8 flex flex-col gap-8 overflow-y-auto overflow-hidden bg-gray-50">
        <div className="h-[52px] w-[1230px] flex justify-between">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text font-semibold text-2xl w-[227.1px] h-[32px]">
              Wallet
            </h1>
            <h3 className="text  text-[#65514a] text-[14px] w-[238.62px] h-[20px]">
              Manage your cards and payments
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-[128.21px] h-[40px] rounded-[10px] bg-[#030213] text font-semibold text-[16px] text-[#FFFFFF] flex items-center justify-center gap-1">
              <img src={plus} alt="plus" className="h-5 w-5"></img>
              <p className="text text-[16px]">Add Card</p>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-[320px] h-[284px] flex flex-col gap-6 px-6 py-6 bg-gradient-to-br from-[#9810FA] to-[#F6339A] rounded-[16px]">
            <div className="flex justify-between">
              <span>
                <p className="text text-white font-extralight text-[13px]">
                  Credit Card
                </p>
                <p className="text text-white font-semibold text-[15px]">
                  Chase Freedom
                </p>
              </span>
              <img src={phone} alt="phone" className="w-8 h-8"></img>
            </div>

            <div className=" flex flex-col text-white">
              <p className="text font-extralight text-[13px]">
                Current Balance
              </p>
              <p className="text font-bold text-[28px]">$2,340.5</p>
              <p className="text font-extralight text-[13px]">Limit: $5,000</p>
            </div>

            <div className="flex justify-between">
              <span className="text-white">
                <p className="text text-[14px] font-extralight">Card Number</p>
                <p className="text text-lg font-mono">.... .... .... 4242</p>
              </span>
              <img src={card} alt="card" className="w-[48px] h-[48px]"></img>
            </div>
          </div>

          <div className="w-[320px] h-[284px] flex flex-col gap-6 px-6 py-6 bg-gradient-to-br from-[#155DFC] to-[#00B8DB] rounded-[16px]">
            <div className="flex justify-between">
              <span>
                <p className="text text-white font-extralight text-[13px]">
                  Debit Card
                </p>
                <p className="text text-white font-semibold text-[15px]">
                  Bank of America
                </p>
              </span>
              <img src={phone} alt="phone" className="w-8 h-8"></img>
            </div>

            <div className=" flex flex-col text-white">
              <p className="text font-extralight text-[13px]">
                Current Balance
              </p>
              <p className="text font-bold text-[28px]">$8,950.25</p>
            </div>

            <div className="flex justify-between">
              <span className="text-white">
                <p className="text text-[14px] font-extralight">Card Number</p>
                <p className="text text-lg font-mono">.... .... .... 8765</p>
              </span>
              <img src={card} alt="card" className="w-[48px] h-[48px]"></img>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-[288px] h-[141px] flex flex-col justify-center items-center gap-3 bg-[#FFFFFF] rounded-[16px] border border-gray-400">
            <img src={sendmoney} alt="sendmoney"></img>
            <span className="text text-[#0A0A0A] font-semibold text-[15px]">
              Send Money
            </span>
          </div>

          <div className="w-[288px] h-[141px] flex flex-col justify-center items-center gap-3 bg-[#FFFFFF] rounded-[16px] border border-gray-400">
            <img src={request} alt="request"></img>
            <span className="text text-[#0A0A0A] font-semibold text-[15px]">
              Request
            </span>
          </div>

          <div className="w-[288px] h-[141px] flex flex-col justify-center items-center gap-3 bg-[#FFFFFF] rounded-[16px] border border-gray-400">
            <img src={qr} alt="QR"></img>
            <span className="text text-[#0A0A0A] font-semibold text-[15px]">
              QR Pay
            </span>
          </div>

          <div className="w-[288px] h-[141px] flex flex-col justify-center items-center gap-3 bg-[#FFFFFF] rounded-[16px] border border-gray-400">
            <img src={paybill} alt="paybill"></img>
            <span className="text text-[#0A0A0A] font-semibold text-[15px]">
              Pay Bills
            </span>
          </div>
        </div>

        <div className=" bg-[#ffffff] p-6 rounded-[16px] border stroke-[#000000]/10">
          <div className="flex justify-between  text text-[#0A0A0A] font-semibold ">
            <p>Recent Transactions</p>
            <p>View All</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
