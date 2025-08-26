import {  Stack } from "rsuite";
import CircleBottom from "../assets/CirclesBottom.svg";
import CircleTop from "../assets/CirclesTop.svg";
import {  useState } from "react";
import {  ToastContainer } from "react-toastify";
import SecondState from "../components/login/secondState";
import FirstState from "../components/login/firstState";

const Login = () => {
const [secondStateOfLogin,setSecondStateOfLogin]=useState(false)
  return (
    <Stack
      className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-indigo-200 via-blue-50 to-purple-50"
      alignItems="center"
      justifyContent="center"
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Decorative SVGs */}
      <img
        className="absolute top-0 right-0  opacity-80  z-10 animate-ping"
        src={CircleTop}
        alt="Top decoration"
      />
      
      <img
        className="absolute bottom-0 left-0 z-10 animate-ping"
        src={CircleBottom}
        alt="Bottom decoration"
      />
{secondStateOfLogin ? <SecondState/> : <FirstState onStateChange={()=>setSecondStateOfLogin(true)}/>}
      
    </Stack>
  );
};

export default Login;