import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../Features/component/pages/Login';
import Register from '../Features/component/pages/Register';
import Forgotpassword from '../Features/component/pages/Forgotpassword';
import Landingpage from '../Features/component/pages/landingpage';
import Dashboard from '../Layouts/Dashboard';
import Account from '../Pages/Account';
import Task from '../Pages/Task';
import Team from '../Pages/Team';
import Minidash from '../Pages/minidash';

const Routepath = () => {
  return (
    <Routes>
       <Route path="/" element={<Landingpage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpassword"  element={<Forgotpassword/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}>
         <Route path='minidash' element={<Minidash/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='task' element={<Task/>}/>
        <Route path='team' element={<Team/>}/>
       </Route>
    </Routes>
  );
};

export default Routepath;
