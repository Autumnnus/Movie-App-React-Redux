import { useSelector } from "react-redux";
import Header from "../components/Navbar/Header";
import UserProfile from "../components/User/Auth/UserProfile";
import Login from "../components/User/Login";
import SignUp from "../components/User/SignUp";

const User = () => {
  const { loginMode } = useSelector((state) => state.user);
  const { user: allUsers } = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const matchedUser = allUsers.find(
    (u) => u.id.toString() === auth.userID?.toString(),
  );

  return (
    <div className="min-h-screen bg-[#050404]">
      <Header />
      <div className="container mx-auto">
        {loginMode && !auth.token && <Login />}
        {!loginMode && !auth.token && <SignUp />}
        {auth.token && <UserProfile matchedUserID={matchedUser} />}
      </div>
    </div>
  );
};

export default User;
