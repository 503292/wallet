export default function authorizationChecker(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 7) {
    errors.password = 'Password should be at least 7 characters long';
  }

  if (!values.passConfirm) {
    errors.passConfirm = 'Required';
  } else if (values.passConfirm !== values.password) {
    errors.passConfirm = 'Passwords do not match';
  }
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
}
