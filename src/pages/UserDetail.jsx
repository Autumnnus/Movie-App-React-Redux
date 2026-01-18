import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Navbar/Header";
import InvalidPage from "../components/User/Auth/InvalidPage";
import UserProfile from "../components/User/Auth/UserProfile";

const UserDetail = () => {
  const auth = useSelector((state) => state.auth);
  const { user: allUsers } = useSelector((state) => state.user);

  const location = useLocation();
  let loc = location.pathname.split("/")[2];

  const matchedUser = allUsers.find(
    (dt) => dt.id.toString() === auth.userID?.toString(),
  );

  return (
    <div className="min-h-screen bg-[#050404]">
      <Header />
      {auth.userID?.toString() === loc?.toString() && auth.token ? (
        <UserProfile matchedUserID={matchedUser} />
      ) : (
        <InvalidPage />
      )}
    </div>
  );
};

export default UserDetail;
