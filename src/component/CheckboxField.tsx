import { useContext } from "react";

import { InfoContext } from "../App";

import { Source } from "../types";

type CheckboxFieldProps = {
  source: Source<boolean>;
  label: string;
}

const CheckboxField = ({ label, source }: CheckboxFieldProps) => {
  const { value, setValue } = useContext(InfoContext);

  return (
    <>
      {label}
      <input
        onChange={(e) => setValue({ [source]: e.target.checked })}
        value={value[source].toString()}
        type={"checkbox"}
      />
    </>
  );
};

export default CheckboxField;
