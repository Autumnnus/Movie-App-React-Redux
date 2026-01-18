import { useState } from "react";
import { FiChevronLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserFunc, toggleLoginMode } from "../../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onchangeFunc = (e) => {
    setSignUpInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const signUpFunc = () => {
    if (signUpInfo.username && signUpInfo.email && signUpInfo.password) {
      dispatch(registerUserFunc(signUpInfo));
      dispatch(toggleLoginMode());
      navigate("/users?login");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#050404]">
      <div className="bg-[#2e1c2b] p-10 border border-[#893168]/20 rounded-xl w-full max-w-md shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-1 w-[2px] bg-[#893168] mb-4" />
          <h2 className="text-3xl font-black text-white tracking-tighter">
            Join the Stream
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Create your professional movie profile
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <FiUser /> Full Identity
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="John Wick"
              onChange={onchangeFunc}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <FiMail /> E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="name@stream.com"
              onChange={onchangeFunc}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <FiLock /> Secure Password
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
            className="btn-primary w-full py-3.5 mt-4 shadow-[0_8px_24px_-4px_rgba(137,49,104,0.4)]"
            onClick={signUpFunc}
          >
            Create Account
          </button>

          <button
            className="w-full text-gray-400 hover:text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-4"
            onClick={() => {
              dispatch(toggleLoginMode());
              navigate("/users?login");
            }}
          >
            <FiChevronLeft /> Return to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
