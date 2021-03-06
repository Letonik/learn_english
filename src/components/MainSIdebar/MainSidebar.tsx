import React, {FC} from 'react';
import style from './MainSidebar.module.scss'
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";

const MainSidebar: FC = () => {
  return (
    <>
      <div className={style.logo}>
        <Logo/>
      </div>
      <div className={style.navigation}>
        <Navigation/>
      </div>
    </>
  );
};

export default MainSidebar;