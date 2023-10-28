import { FC } from "react";

import useInput from "../hooks/useInput";

import { InputBaseProps, Source } from "../types";


const TextField: FC<{
  type: InputBaseProps
  source: Source<string>;
  label: string;
  validate: any;
}> = ({ source, label, validate, type }) => {
  const { error, value, onChange } = useInput<string>({
    source,
    validate
  });

  return (
    <>
      <label htmlFor="label">{label}</label>
      <input 
        type={type}
        id="label" 
        defaultValue={""}
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default TextField;
