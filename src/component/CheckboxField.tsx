import { Info } from "../types";

type CheckboxFieldProps = {
  value: Info;
  source: keyof Info;
  setValue: (info: Info) => void;
  label: string;
}

const CheckboxField = ({ 
  label, 
  source, 
  value, 
  setValue 
  }: CheckboxFieldProps) => {
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
