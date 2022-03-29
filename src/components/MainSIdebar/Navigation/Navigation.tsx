import React from 'react';
import style from './Navigation.module.scss'
import {Link, NavLink} from "react-router-dom";

interface IDataActive {
  isActive: boolean
}

const Navigation = () => {

  return (
    <div className={style.navigation}>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')}  to="/">Home</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')} to="/dictionary">Dictionary</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')} to="/training">Training</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')} to="/articles">Articles</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')} to="/profile">Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={(data: IDataActive) => (data.isActive ? style.active : '')} to="/other">Other</NavLink>
      </div>
    </div>
  );
};

export default Navigation;

