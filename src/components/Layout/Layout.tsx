import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import MainSidebar from "../MainSIdebar/MainSidebar";
import style from './Layout.module.scss'

const Layout = () => {

  ///////////// FAKE //////////////
  const isAuthorized: boolean = true
  const mainTheme: string = 'white'
  /////////////////////////////////

  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized) {
      return navigate("/authorization");
    }
  }, [isAuthorized]);

  return (
    <div className={`${style.wrapper} ${mainTheme === 'white' ? style.white : style.black}`}>
      <nav>
        <MainSidebar />
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
};


export default Layout;
