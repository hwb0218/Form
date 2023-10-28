import { createContext, useReducer, useState } from "react";

import Form from "./component/Form";
import TextField from "./component/TextField";
import CheckboxField from "./component/CheckboxField";

import { checked, maxLength, minLength } from "./utils/validation";

import { Info, PartialInfo, ErrorInfo, PartialErrorInfo } from "./types";

const defaultInfo: Info = {
  name: "",
  password: "",
  confirm: false,
}

const defaultErrorInfo = Object.keys(defaultInfo).reduce((acc, key) => {
  return {
    ...acc,
    [key]: '',
  } 
}, {} as ErrorInfo);

export const InfoContext = createContext<{
  value: Info;
  setValue: (v: PartialInfo) => void;
  error: ErrorInfo;
  setError: (e: PartialErrorInfo) => void;
}>({
  value: defaultInfo,
  setValue: (v) => {},
  error: {} as ErrorInfo,
  setError: (e) => {},
});

function App() {
  const [error, setError] = useState<ErrorInfo>(defaultErrorInfo);
  
  const [info, setInfo] = useReducer(
    (prevInfo: Info, partialInfo: PartialInfo) => {
      return {
        ...prevInfo,
        ...partialInfo,
      };
  }, defaultInfo);

  const onSubmit = () => {
    if (Object.values(error).every((err) => err === undefined)) {
      window.alert(`name: ${info.name}`);
    }
  };

  return (
    <InfoContext.Provider value={{ 
      value: info, 
      setValue: setInfo, 
      error, 
      setError: (e) => setError((prevError) => ({ ...prevError, ...e })) 
    }}>
    <Form onSubmit={onSubmit}>
      <TextField
        type="text"
        source="name"
        label="이름"
        validate={[minLength(2), maxLength(6)]}
      />
      <TextField
        type="password"
        source="password"
        label="패스워드"
        validate={[minLength(6), maxLength(12)]}
      />
      <CheckboxField
        type="checkbox"
        source="confirm"
        label="위 내용이 제출됩니다 동의하십니까?"
        validate={[checked]}
      />
    </Form>
    </InfoContext.Provider>
  );
}

export default App;
