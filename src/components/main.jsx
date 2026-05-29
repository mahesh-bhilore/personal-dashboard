import React from "react";
import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import Dashboard from "./dashboard.jsx";
import Task from "./task.jsx";
import Expenses from "./expenses.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {

    return(

        <>
        <div className="flex h-screen overflow-hidden">
            <div className=" shrink-0">
                <Sidebar/>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="z-50 shrink-0"><Header/></div>
            
                <div className="flex-1 overflow-y-auto min-w-0"><Outlet/></div>
                
            </div>

        </div>

        </>
    )
}

export default Main; 