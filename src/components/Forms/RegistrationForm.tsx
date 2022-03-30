import React, {FC} from 'react';
import style from './RegistrationForm.module.scss'
import {Button, FormControl, TextField} from '@mui/material';
import {useInput} from '../../hooks/validateHooks'

const RegistrationForm:FC = () => {
  const email = useInput('', {isEmail: true, minLength: 5, isEmpty: true})
  const name = useInput('', { maxLength: 20, isEmpty: true})
  const phone = useInput('', {minLength: 5, maxLength: 20, isEmpty: true})
  const password = useInput('', {minLength: 5, maxLength: 20, isEmpty: true})
  const confirmPassword = useInput('', {confirmPassword: password.value, minLength: 5, maxLength: 20, isEmpty: true})
  return (
    <FormControl fullWidth={true} margin='normal'>
      <TextField
        label="Name" variant="outlined" margin='normal'
        value={name.value}
        error={name.isDirty && name.isError}
        helperText={name.isDirty && name.isError ? name.textError : ''}
        onChange={e => name.onChange(e)}
        onBlur={() => name.onBlur()}
      />
      <TextField
        label="Email" variant="outlined" margin='normal'
        value={email.value}
        error={email.isDirty && email.isError}
        helperText={email.isDirty && email.isError ? email.textError : ''}
        onChange={e => email.onChange(e)}
        onBlur={() => email.onBlur()}
      />
      <TextField
        label="Phone" variant="outlined" margin='normal'
        value={phone.value}
        error={phone.isDirty && phone.isError}
        helperText={phone.isDirty && phone.isError ? phone.textError : ''}
        onChange={e => phone.onChange(e)}
        onBlur={() => phone.onBlur()}
      />
      <TextField
        label="Password" variant="outlined" margin='normal' type='password'
        value={password.value}
        error={password.isDirty && password.isError}
        helperText={password.isDirty && password.isError ? password.textError : ''}
        onChange={e => password.onChange(e)}
        onBlur={() => password.onBlur()}
      />
      <TextField
        label="Confirm Password" variant="outlined" margin='normal' type='password'
        value={confirmPassword.value}
        error={confirmPassword.isDirty && confirmPassword.isError}
        helperText={confirmPassword.isDirty && confirmPassword.isError ? confirmPassword.textError : ''}
        onChange={e => confirmPassword.onChange(e)}
        onBlur={() => confirmPassword.onBlur()}
      />
      <div className={style.btn}>
          <Button
            variant="contained"
            disabled={email.isError || phone.isError || name.isError || password.isError || confirmPassword.isError}
          >
            Отправить
          </Button>
      </div>
    </FormControl>
  );
};

export default RegistrationForm;