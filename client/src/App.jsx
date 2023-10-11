import {
  Home,
  Landing,
  Schedule,
  Login,
  ProfileForm,
  Payment,
  Plan,
  ForgotPassgord,
  SignUp,
  Detail,
  Profile,
  MyDates,
} from "./Views";
import DashBoardUsers from "./Views/DashBoard/DashBoardUsers";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail2 from "./Views/Detail/DetailDash";
// import NavBar from "./Components/NavBar/NavBar";
import PostDocs from "./Components/Create/PostDocs/PostDocs";
import PostUsers from "./Components/Create/PostUsers/PostUsers";
import "tailwindcss/tailwind.css";
import { UserAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import DashBoard from "./Views/DashBoard/dashboard";
import Bridge from "./Views/Brige/Bridge";
import DetailUsers from "./Views/Detail/DetailUsers";

const App = () => {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/create" element={<Schedule />} />
        <Route path="/profileForm" element={<ProfileForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/forgotPassword" element={<ForgotPassgord />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail2/:id" element={<Detail2 />} />
        <Route path="/DetailUsers/:id" element={<DetailUsers />} />
        <Route path="/myDates" element={<MyDates />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboardusers" element={<DashBoardUsers />} />

        <Route path="/postdocs" element={<PostDocs />} />
        <Route path="/postusers" element={<PostUsers />} />
        <Route path="/confirm" element={<Bridge />} />
      </Routes>
    </div>
  );
};

export default App;
