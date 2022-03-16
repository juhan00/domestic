import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChangeValue = (value) => {
    console.log(value);
    setValue(value);
  };

  return [value, onChangeValue, setValue];
}
