import { useState, ChangeEventHandler } from "react";

function useInputValue(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setValue(event.target.value);

  return { value, onChange };
}

export default useInputValue;
