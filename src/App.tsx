import { useState } from "react";

import TextField from "./component/TextField";
import Form from "./component/Form";
import CheckboxField from "./component/CheckboxField";

import { Info } from "./types";

function App() {
  const [info, setInfo] = useState<Info>({
    name: "",
    confirm: false,
  });

  const onSubmit = () => {
    if (info.confirm) {
      window.alert(`name: ${info.name}`);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        value={info}
        source="name"
        setValue={setInfo}
        label="이름"
      />
      <CheckboxField
        value={info}
        source="confirm"
        setValue={setInfo}
        label="위 내용이 제출됩니다 동의하십니까?"
      />
    </Form>
  );
}

export default App;
