import { useState, createContext } from "react";

import TextField from "./component/TextField";
import Form from "./component/Form";
import CheckboxField from "./component/CheckboxField";

import { Info } from "./types";

const defaultInfo: Info = {
  name: "",
  confirm: false,
}

export const InfoContext = createContext({
  value: defaultInfo,
  setValue: (v: Info) => {},
});

function App() {
  const [info, setInfo] = useState<Info>(defaultInfo);

  const onSubmit = () => {
    if (info.confirm) {
      window.alert(`name: ${info.name}`);
    }
  };

  return (
    <InfoContext.Provider value={{ value: info, setValue: setInfo }}>
    <Form onSubmit={onSubmit}>
      <TextField
        source="name"
        label="이름"
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
