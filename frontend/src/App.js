import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import UserDetail from './components/UserDetail';
import { useState } from 'react';

function App() {
  let [userData,setuserData]  =useState("")
  let [urldata,seturldata]  =useState('')
  return (
    <>
    <Navbar userData={userData} setuserData={setuserData} seturldata={seturldata}/>
    <UserDetail urldata={urldata}/>
    </>
  );
}

export default App;
