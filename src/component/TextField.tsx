import React, { useContext }from "react";

import { Info } from "../types";
import { InfoContext } from "../App";

const TextField: React.FC<{
  source: keyof Info;
  label: string;
}> = ({ source, label }) => {
  const { value, setValue } = useContext(InfoContext);
  
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
