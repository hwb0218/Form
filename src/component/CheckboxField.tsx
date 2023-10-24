import { useContext } from "react";

import { InfoContext } from "../App";

import { Info } from "../types";

type CheckboxFieldProps = {
  source: keyof Info;
  label: string;
}

const CheckboxField = ({ label, source }: CheckboxFieldProps) => {
  const { value, setValue } = useContext(InfoContext);

  return (
    <>
      {label}
      <input
        onChange={(e) => setValue({ ...value, [source]: e.target.value })}
        value={value[source].toString()}
        type={"checkbox"}
      />
    </>
  );
};

export default CheckboxField;
