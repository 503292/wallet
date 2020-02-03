import React, { useState } from 'react';
import LogPage from '../../components/LoginPage/loginPage';
import RegistrationPage from '../../components/RegistationPage/registrationPage';

const LoginPage = () => {
  const [registration, setRegistration] = useState(false);

  const goToRegistration = () => setRegistration(true);
  const returnToLogin = () => setRegistration(false);

  return (
    <>
      {registration ? (
        <RegistrationPage onClick={returnToLogin} />
      ) : (
        <LogPage onClick={goToRegistration} />
      )}

      {/* <RegistrationPage /> */}
    </>
  );
};

export default LoginPage;
