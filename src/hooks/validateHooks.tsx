import React, {useState, useMemo, useEffect,  ChangeEvent} from "react";

interface IValidations {
  isEmpty: boolean
  [propName: string]: any
}
interface IUseValidation {
  isError: boolean
  textError: string
}
interface IUseInput extends IUseValidation {
  value: string
  onChange: (e: any) => void
  onBlur: () => void
  isDirty: boolean
}

const useValidation = (value: string, validations: IValidations): IUseValidation => {

  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [confirmError, setConfirmError] = useState(false)
  const [textError, setTextError] = useState('Поле не может быть пустым')

  const isError = useMemo(():boolean => {
    return (isEmpty || minLengthError || emailError || maxLengthError || confirmError) ? true : false
  }, [isEmpty, minLengthError, maxLengthError, emailError, confirmError])

  useEffect(():void => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {
            setEmpty(false)
          } else {
            setEmpty(true)
            setTextError(`Поле не может быть пустым`)
          }
          break
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError (true)
            setTextError(`Минимальная длина ${validations[validation]} символов`)
          } else {
            setMinLengthError (false)
          }
          break
        case 'maxLength':
          if (value.length > validations[validation]) {
            setMaxLengthError (true)
            setTextError(`Максимальная длина ${validations[validation]} символов`)
          } else {
            setMaxLengthError (false)
          }
          break
        case 'isEmail':
          const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (regexEmail.test(value.toLowerCase())) {
            setEmailError(false)
          } else {
            setEmailError(true)
            setTextError(`Некорректный email`)
          }
          break
        case 'confirmPassword':
          if (value === validations[validation]) {
            setConfirmError(false)
          } else {
            setConfirmError(true)
            setTextError(`Пароли не совпадают`)
          }
          break
      }
    }
  }, [value])
  return {
    isError,
    textError
  }
}


export const useInput = (initialValue: string, validations: IValidations): IUseInput => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value)
  }
  const onBlur = ():void => {
    setDirty(true)
  }
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}