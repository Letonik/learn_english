import React from 'react';
import style from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={style.logo}>
      ENG<span className={style.my}>MY</span>
    </div>
  );
};

export default Logo;