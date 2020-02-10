import { useState, useEffect } from 'react';

function ValidationForm(initialState, validate) {
  const [values, useValues] = useState(initialState);
  const [errors, setErrors] = useState({ email: '' });
  const [isSubmiting, setSubmiting] = useState(true);

  useEffect(() => {
    if (isSubmiting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmiting(false);
      } else {
        setSubmiting(true);
      }
    }
  }, [errors, isSubmiting]);

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

  const addUser = e => {
    e.preventDefault();
    const errorValidation = validate(values);
    setErrors(errorValidation);
    setSubmiting(true);
    // onRegistrate(values);
    // console.log(onRegistrate(values), 'url');
    // console.log(values);
  };

  return { addUser, values, handleChange, onBlur, errors, isSubmiting };
}

export default ValidationForm;
