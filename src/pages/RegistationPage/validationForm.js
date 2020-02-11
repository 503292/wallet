import { useState, useEffect } from 'react';

function ValidationForm(initialState, validate, authenticateUser) {
  const [values, useValues] = useState(initialState);
  const [errors, setErrors] = useState({ email: '' });
  const [isSubmiting, setSubmiting] = useState(true);
  // const [firebaseError, setFirebaseError] = useState(false);

  useEffect(() => {
    if (isSubmiting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // authenticateUser();
        setSubmiting(false);
      } else {
        setSubmiting(true);
      }
    }
  }, [authenticateUser, errors, isSubmiting]);

  function onBlur() {
    const errorValidation = validate(values);
    setErrors(errorValidation);
  }

  async function handleChange(e) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // useValues(values => prevValues + 1);
    const errorValidation = validate(values);
    setErrors(errorValidation);
  }

  return {
    values,
    handleChange,
    onBlur,
    errors,
    isSubmiting,
    // firebaseError,
  };
}

// const mapDispatchToProps = {
//   onRegistration: authOperations.registration,
// };

export default ValidationForm;
