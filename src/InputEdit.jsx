import React, { useEffect, useRef } from "react";

const InputEdit = ({ editInputTextUpdate, editInputText, inputText }) => {

    const refInput = useRef();
    useEffect(() => {
        refInput.current.focus();
        return 
    },[])

  return (
    <div>
      <input
      ref={refInput}
        onKeyUp={editInputTextUpdate}
        onChange={editInputText}
        value={inputText}
        className="border border-gray-300 ps-3"
      />
    </div>
  );
};

export default InputEdit;
