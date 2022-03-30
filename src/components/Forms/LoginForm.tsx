import React, {FC} from 'react';
import style from './LoginForm.module.scss'
import {Button, FormControl, TextField} from '@mui/material';
import {useInput} from '../../hooks/validateHooks'

const LoginForm:FC = () => {
  const email = useInput('', {isEmail: true, minLength: 5, isEmpty: true})
  const password = useInput('', {minLength: 5, maxLength: 20, isEmpty: true})
  return (
    <FormControl fullWidth={true} margin='normal'>
      <TextField
        label="Email" variant="outlined" margin='normal'
        value={email.value}
        error={email.isDirty && email.isError}
        helperText={email.isDirty && email.isError ? email.textError : ''}
        onChange={e => email.onChange(e)}
        onBlur={() => email.onBlur()}
      />
      <TextField
        label="Password" variant="outlined" margin='normal' type='password'
        value={password.value}
        error={password.isDirty && password.isError}
        helperText={password.isDirty && password.isError ? password.textError : ''}
        onChange={e => password.onChange(e)}
        onBlur={() => password.onBlur()}
      />
      <div className={style.bottomForm}>
        <div className={style.text}>Забыли пароль?</div>
        <div>
          <Button
            variant="contained"
            disabled={email.isError || password.isError}
          >
            Вход
          </Button>
        </div>
      </div>
    </FormControl>
  );
};

export default LoginForm;