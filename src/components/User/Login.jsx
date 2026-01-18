import { useEffect, useState } from "react";
import { FiChevronRight, FiLock, FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createLocalToken, setUserID } from "../../redux/authSlice";
import { toggleLoginMode, toggleLoginSuccessful } from "../../redux/userSlice";

const Login = () => {
  const { loginSuccessful } = useSelector((state) => state.user);
  const { user: allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const onchangeFunc = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const generateJwtToken = () => {
    const jwtToken = uuidv4().replace(/-/g, "");
    return jwtToken;
  };

  const loginFunc = () => {
    const loginCheck = allUsers.find((dt) => {
      return loginInfo.email === dt.email && loginInfo.password === dt.password;
    });

    if (loginCheck) {
      const jwtToken = generateJwtToken();
      dispatch(createLocalToken(jwtToken));
      dispatch(setUserID(loginCheck.id));
      dispatch(toggleLoginSuccessful());
      navigate(`/`);
      window.location.reload();
    } else {
      alert("Invalid email or password");
    }
  };

  const toggleLoginModeFunc = () => {
    dispatch(toggleLoginMode());
    navigate("/users?signup");
  };

  useEffect(() => {
    if (loginSuccessful) {
      dispatch(toggleLoginSuccessful());
    }
  }, [loginSuccessful, dispatch]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#050404]">
      <div className="bg-[#2e1c2b] p-10 border border-[#893168]/20 rounded-xl w-full max-w-md shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-1 w-[2px] bg-[#893168] mb-4" />
          <h2 className="text-3xl font-black text-white tracking-tighter">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to your CineStream account
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <FiMail /> E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="name@example.com"
              onChange={onchangeFunc}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <FiLock /> Security Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="••••••••"
              onChange={onchangeFunc}
            />
          </div>

          <button
            className="btn-primary w-full py-3.5 mt-4 shadow-[0_8px_24px_-4px_rgba(137,49,104,0.4)] group"
            onClick={loginFunc}
          >
            Authenticate
            <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4 my-8">
            <div className="h-[1px] bg-white/5 flex-1" />
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
              or
            </span>
            <div className="h-[1px] bg-white/5 flex-1" />
          </div>

          <button
            className="w-full text-gray-400 hover:text-white text-sm font-bold transition-colors flex items-center justify-center gap-2"
            onClick={toggleLoginModeFunc}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
