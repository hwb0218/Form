import { createContext, useReducer } from "react";

import Form from "./component/Form";
import TextField from "./component/TextField";
import CheckboxField from "./component/CheckboxField";

import { maxLength, minLength } from "./utils/validation";

import { Info, PartialInfo } from "./types";

const defaultInfo: Info = {
  name: "",
  password: "",
  confirm: false,
}

export const InfoContext = createContext({
  value: defaultInfo,
  setValue: (v: PartialInfo) => {},
});

function App() {
  // const [info, setInfo] = useState<Info>(defaultInfo);
  const [info, setInfo] = useReducer(
    (prevInfo: Info, partialInfo: PartialInfo) => {
      return {
        ...prevInfo,
        ...partialInfo,
      };
  }, defaultInfo);

  const onSubmit = () => {
    if (info.confirm) {
      window.alert(`name: ${info.name}`);
    }
  };

  return (
    <InfoContext.Provider value={{ value: info, setValue: setInfo }}>
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
        source="confirm"
        label="위 내용이 제출됩니다 동의하십니까?"
      />
    </Form>
    </InfoContext.Provider>
  );
}

export default App;
