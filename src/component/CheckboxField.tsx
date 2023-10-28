import useInput from "../hooks/useInput";

import { InputBaseProps, Source } from "../types";

type CheckboxFieldProps = {
  type: InputBaseProps;
  source: Source<boolean>;
  label: string;
  validate: Array<any>
}

const CheckboxField = ({ type, label, source, validate }: CheckboxFieldProps) => {
  const { error, value, onChange } = useInput<boolean>({
    source,
    validate
  });

  return (
    <>
      {label}
      <input
        type={type}      
        value={value.toString()}
        onChange={(e) => onChange(e.target.checked)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default CheckboxField;
