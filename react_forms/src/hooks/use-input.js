import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInputBlur, setIsInputBlur] = useState(false);

  const enteredValueIsValid = validateInput(enteredValue);
  const inputHasError = isInputTouched && !enteredValueIsValid;
  const updateValue = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsInputTouched(true);
    setIsInputBlur(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    enteredValue,
    updateValue,
    inputHasError,
    enteredValueIsValid,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
