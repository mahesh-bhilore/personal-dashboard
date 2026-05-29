import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signinform";
import { Signup } from "./components/signupform";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Task from "./components/task";
import Main from "./components/main"
import Expenses from "./components/expenses"
import Studytracker from "./components/studytracker";
import Goals from "./components/goals&habits";
import Wallet from "./components/wallet";
import Todos from "./components/todos";
import Reports from "./components/reports";
import Notes from "./components/notes";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/task" element={<Task/>} />
              <Route path="/expenses" element={<Expenses/>} />
              <Route path="/studytracker" element={<Studytracker/>} />
              <Route path="/goals&habits" element={<Goals/>} />
              <Route path="/wallet" element={<Wallet/>} />
              <Route path="/todos" element={<Todos/>} />
              <Route path="/reports" element={<Reports/>} />
              <Route path="/notes" element={<Notes/>} />
        </Route>
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
