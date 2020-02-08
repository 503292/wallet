import { useState, useEffect } from 'react';

function ValidationForm(initialState, validate) {
  const [values, useValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmiting, setSubmiting] = useState(false);

  useEffect(() => {
    if (isSubmiting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmiting(false);
      } else {
        setSubmiting(false);
      }
    }
  }, [errors, isSubmiting]);

  function handleChange(e) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function onBlur() {
    const errorValidation = validate(values);
    setErrors(errorValidation);
  }

  const addUser = e => {
    e.preventDefault();
    const errorValidation = validate(values);
    setErrors(errorValidation);
    setSubmiting(true);
    // console.log(values.email, values.pass, values.passConfirm, values.name);
  };

  return { addUser, values, handleChange, onBlur, errors, isSubmiting };
}

export default ValidationForm;
