import React, {FC, useState} from 'react';
import style from './Authorization.module.scss'
import LoginForm from "../components/Forms/LoginForm";
import RegistrationForm from "../components/Forms/RegistrationForm";

const Authorization: FC = () => {
  const [typeForm, setTypeForm] = useState('login')

  const changeTypeForm = (type: 'login'|'registration'):void => {
    (type !== typeForm) && setTypeForm(type)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.nav}>
        <div
          className={`${style.navItem} ${typeForm === 'login' && style.navActive}`}
          onClick={() => changeTypeForm('login')}
        >
          Вход
        </div>
        <div
          className={`${style.navItem} ${typeForm === 'registration' && style.navActive}`}
          onClick={() => changeTypeForm('registration')}
        >
          Регистрация
        </div>
      </div>
      {typeForm === 'login' && <LoginForm/>}
      {typeForm === 'registration' && <RegistrationForm/>}
    </div>
  );
};

export default Authorization;