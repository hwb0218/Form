import React from "react";

import { Info } from "../types";

const TextField: React.FC<{
  value: Info;
  source: keyof Info;
  setValue: (info: Info) => void;
  label: string;
}> = ({ value, source, setValue, label }) => {
  return (
    <>
      <label htmlFor="label">{label}</label>
      <input 
        id="label" 
        onChange={(e) => setValue({ ...value, [source]: e.target.value})} 
        value={value[source] as string} 
      />
    </>
  );
};

export default TextField;
