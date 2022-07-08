import React from "react";

const FieldLi = ({ fieldName, inputType }) => {
  return (
    <li className="flex flex-col justify-center items-start mb-[1.5rem]">
      <label className="text-fontPrimary">{fieldName}</label>
      <input
        className="w-[20rem] bg-background rounded-[0.3rem] h-[2rem] border-[1px] border-[#a3a3a3] max500:max-w-[15rem] max500:min-w-5rem max500:w-[70vw] focus-within:bg-focusInput pl-[0.5rem]"
        type={inputType}
        placeholder={fieldName}
      />
    </li>
  );
};

export default FieldLi;
