import React, { useState } from "react";

const FieldLi = ({ fieldName, inputType, onChange, value }) => {
  return (
    <li className="flex flex-col justify-center items-start mb-[0.5rem]">
      <label className="pl-1 text-fontPrimary2">{fieldName}</label>
      <input
        className="w-[20rem] bg-background rounded-[0.3rem] h-[2rem] border-[1px] border-[#a3a3a3] max500:max-w-[15rem] max500:min-w-5rem max500:w-[70vw] focus-within:bg-focusInput pl-[0.5rem]"
        type={inputType}
        placeholder={fieldName}
        value={value}
        onChange={onChange}
      />
    </li>
  );
};

export default FieldLi;
