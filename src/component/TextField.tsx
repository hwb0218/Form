import React, { useContext } from "react";

import { InfoContext } from "../App";

import { Source } from "../types";

const TextField: React.FC<{
  source: Source<string>;
  label: string;
}> = ({ source, label }) => {
  const { value, setValue } = useContext(InfoContext);
  
  return (
    <>
      <label htmlFor="label">{label}</label>
      <input 
        id="label" 
        onChange={(e) => setValue({ [source]: e.target.value })} 
        value={value[source] as string} 
      />
    </>
  );
};

export default TextField;
