import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import HomePage from "../components/pages/home";
import LoginPage from "../components/pages/login";
import SignUpPage from "../components/pages/signUp";
import RecoverPasswordPage from "../components/pages/recoverPassword";
import ChangePasswordPage from "../components/pages/changePassword";
import PrivateRoute from "../components/organisms/PrivateRoute";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/reset-password" element={<RecoverPasswordPage />} />
        <Route path="/change-password/:token" element={<ChangePasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
