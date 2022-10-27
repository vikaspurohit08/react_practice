import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    updateValue: updateName,
    inputHasError: isNameInputInvalid,
    enteredValueIsValid: enteredNameIsValid,
    inputBlurHandler: nameInputBlurHandler,
    resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    updateValue: updateEmail,
    inputHasError: isEmailInputInvalid,
    enteredValueIsValid: enteredEmailIsValid,
    inputBlurHandler: emailInputBlurHandler,
    resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsNameInputTouched(true);
    setIsEmailInputTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log("name", enteredName);
    console.log("email", enteredEmail);
    resetNameInput();
    resetEmailInput();
    setIsEmailInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          onBlur={nameInputBlurHandler}
          onChange={updateName}
          id="name"
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          value={enteredEmail}
          type="email"
          onBlur={emailInputBlurHandler}
          onChange={updateEmail}
          id="email"
        />
      </div>
      {isNameInputInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      {isEmailInputInvalid && <p className="error-text">Email must be valid</p>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
