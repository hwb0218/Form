import { useEffect, useContext } from "react";

import { InfoContext } from "../App";

import { PartialErrorInfo, PartialInfo, Source } from "../types";

type useInputProps<T> = {
  source: Source<T>;
  validate: Array<any>
}

const useInput = <T,>({
  validate,
  source,
}: useInputProps<T>) => {
  const { value, setValue, error, setError } = useContext(InfoContext);
  
  useEffect(() => {
    const errors: string[] = validate.map((validateFunc: any) => {
      if (value[source]) {
        return validateFunc(value[source]);
      }
    });
    
    const err = errors.find((error) => error);
    setError({ [source]: err } as PartialErrorInfo);
  }, [value[source]]);

  const onChange = (v: string | boolean) => {
    setValue({ [source] : v } as PartialInfo);
  }

  return {
    error: error[source],
    value: value[source],
    onChange
  }
}; 

export default useInput;