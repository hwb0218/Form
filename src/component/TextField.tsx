import { FC, useState, useContext, useEffect } from "react";

import { InfoContext } from "../App";

import { InputBaseProps, Source, PartialInfo } from "../types";

const TextField: FC<{
  type: InputBaseProps
  source: Source<string>;
  label: string;
  validate: any;
}> = ({ source, label, validate, type }) => {
  const { value, setValue } = useContext(InfoContext);
  const [error, setError] = useState<string>('');
  
  useEffect(() => {
    const errors: (string | null)[] = validate.map(
      (validateFunc: any) => value[source] 
      ? validateFunc(value[source]) 
      : null
    );
    const err = errors.find((error) => error);
    setError(err || '');
  }, [value[source]]);

  return (
    <>
      <label htmlFor="label">{label}</label>
      <input 
        type={type}
        id="label" 
        onChange={(e) => setValue({ [source]: e.target.value } as PartialInfo)} 
        value={value[source] as string} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default TextField;
