import React, { useState } from "react";
import FieldLi from "../Sign/FieldLi";

const ChangeFieldValue = (props) => {
  const [render, setRender] = useState(false);

  const renderEditing = () => {
    setRender(true);
  };

  const derenderEditing = () => {
    setRender(false);
  };

  return (
    <div
      className="px-3 py-4 rounded"
      onMouseEnter={renderEditing}
      onMouseLeave={derenderEditing}
    >
      {render ? (
        <form>
          <FieldLi
            fieldName={props.fieldName}
            value={props.value}
            onChange={props.onChange}
            inputType={props.inputType}
          />
          <button
            className="p-2 py-1 bg-background rounded-md text-[0.9rem]"
            onClick={props.onClick}
          >
            Change
          </button>
        </form>
      ) : (
        <div className="flex flex-col">
          <span className="pl-1 text-fontPrimary2">{props.fieldName}</span>
          <span className="bg-background p-1 px-2 rounded-md w-auto">
            {props.value}
          </span>
        </div>
      )}
    </div>
  );
  f;
};

export default ChangeFieldValue;
