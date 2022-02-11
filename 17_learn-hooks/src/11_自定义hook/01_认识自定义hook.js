import React, { useEffect } from "react";

const Home = (props) => {
  useLoggingLife("Home");
  return <h2>Home</h2>;
};
const Profile = (props) => {
  useLoggingLife("Profile");
  return <h2>Profile</h2>;
};

export default function CustomHookDemo01() {
  useLoggingLife("CustomHookDemo01");
  return (
    <div>
      <h2>CustomHookDemo01</h2>
      <Home></Home>
      <Profile></Profile>
    </div>
  );
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`);
    return () => {
      console.log(`${name}组件被销毁`);
    };
  }, []);
}
