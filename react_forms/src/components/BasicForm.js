import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    updateValue: updateFirstName,
    inputHasError: firstNameHasError,
    enteredValueIsValid: enteredFirstNameIsValid,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: lastName,
    updateValue: updatelastName,
    inputHasError: lastNameHasError,
    enteredValueIsValid: enteredLastNameIsValid,
    inputBlurHandler: lastNameInputBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: email,
    updateValue: updateEmail,
    inputHasError: emailHasError,
    enteredValueIsValid: enteredEmailIsValid,
    inputBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    if (!formIsValid) {
      return;
    }
    console.log("values", firstName, lastName, email);

    event.preventDefault();

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameClasses = !firstNameHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameClasses = !lastNameHasError
    ? "form-control"
    : "form-control invalid";

  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={updateFirstName}
            onBlur={firstNameInputBlurHandler}
            id="name"
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={lastName}
            onBlur={lastNameInputBlurHandler}
            onChange={updatelastName}
            id="name"
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          value={email}
          onChange={updateEmail}
          onBlur={emailInputBlurHandler}
          id="name"
        />
      </div>
      {firstNameHasError && (
        <div className="error-text">First Name cannot be empty</div>
      )}
      {lastNameHasError && (
        <div className="error-text">Last Name cannot be empty</div>
      )}
      {emailHasError && <div className="error-text">Email should be valid</div>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
