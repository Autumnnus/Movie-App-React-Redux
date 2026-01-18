import PropTypes from "prop-types";
import { FiEdit2, FiLock, FiMail, FiShield } from "react-icons/fi";

const UserProfile = ({ matchedUserID }) => {
  return (
    <div className="max-w-xl mx-auto p-10 bg-[#2e1c2b] border border-[#893168]/20 rounded-xl shadow-2xl mt-12">
      <div className="flex flex-col items-center mb-10">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
            alt="Profile Cover"
            className="w-32 h-32 rounded-3xl object-cover border-2 border-[#893168]/40 p-1 group-hover:border-[#893168] transition-all"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#893168] rounded-lg flex items-center justify-center text-white shadow-lg cursor-pointer">
            <FiEdit2 size={14} />
          </div>
        </div>
        <h2 className="text-2xl font-black text-white mt-6 tracking-tight">
          {matchedUserID?.username || "Cinematic Enthusiast"}
        </h2>
        <p className="text-[#893168] text-xs font-black uppercase tracking-[0.2em] mt-1">
          Prime Member
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-5 p-4 bg-[#050404]/40 rounded-lg border border-white/5 group hover:border-[#893168]/20 transition-all">
          <div className="w-10 h-10 bg-[#893168]/10 rounded-lg flex items-center justify-center text-[#893168]">
            <FiMail size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
              Email Identity
            </p>
            <p className="text-gray-200 font-bold">
              {matchedUserID?.email || "not-available@stream.com"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-4 bg-[#050404]/40 rounded-lg border border-white/5 group hover:border-[#893168]/20 transition-all">
          <div className="w-10 h-10 bg-[#893168]/10 rounded-lg flex items-center justify-center text-[#893168]">
            <FiLock size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
              Security Access
            </p>
            <p className="text-gray-200 font-bold">••••••••••••</p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-4 bg-[#050404]/40 rounded-lg border border-white/5 group hover:border-[#893168]/20 transition-all">
          <div className="w-10 h-10 bg-[#893168]/10 rounded-lg flex items-center justify-center text-[#893168]">
            <FiShield size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
              Clearance Rank
            </p>
            <p className="text-gray-200 font-bold uppercase tracking-wider">
              {matchedUserID?.role || "Streamer"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 text-center">
        <button className="text-[10px] font-black text-gray-600 hover:text-red-500 uppercase tracking-[0.2em] transition-colors">
          Terminate Access & Delete Profile
        </button>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  matchedUserID: PropTypes.object,
};

export default UserProfile;
