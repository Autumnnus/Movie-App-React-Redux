import { BiLogOut, BiMoviePlay, BiPlus, BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/authSlice";
import { modalFunc } from "../../redux/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const signOutFunc = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userID");
    dispatch(signOut());
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050404] border-b border-white/5 px-8 py-5 flex items-center justify-between">
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => navigate("/")}
      >
        <div className="w-10 h-10 bg-[#893168] rounded-md flex items-center justify-center transition-transform group-hover:rotate-6">
          <BiMoviePlay size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Cine<span className="text-[#893168]">Stream</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(modalFunc())}
            className="flex items-center gap-2 px-4 py-2 bg-[#2e1c2b] border border-[#893168]/20 rounded-md text-sm font-bold text-gray-300 hover:text-white transition-colors"
          >
            <BiPlus size={18} />
            Add Movie
          </button>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          {auth.token ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(`/users/${auth.userID}`)}
                className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                <BiUserCircle size={20} />
                Profile
              </button>
              <button
                onClick={signOutFunc}
                className="flex items-center gap-2 text-sm font-bold text-red-500/80 hover:text-red-400 transition-colors"
              >
                <BiLogOut size={20} />
                Exit
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("users/?login")}
              className="flex items-center gap-2 text-sm font-bold text-[#893168] hover:text-white transition-colors"
            >
              <BiUserCircle size={20} />
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
