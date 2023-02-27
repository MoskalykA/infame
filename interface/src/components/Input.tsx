import { FC } from "react";

interface InputProps {
  label: string;
  onChange: Function;
  placeholder: string;
}

const Input: FC<InputProps> = ({ label, onChange, placeholder }) => {
  return (
    <>
      <label className="text-white font-primary">{label}</label>

      <input
        onChange={(e) => onChange(e)}
        className="text-black rounded-lg p-2 font-primary"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
