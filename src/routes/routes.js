import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistationPage/registrationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

export default {
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  REGISTER_PAGE: {
    path: '/register',
    component: RegistrationPage,
  },
  DASHBORD_PAGE: {
    path: '/',
    component: DashboardPage,
  },
};
