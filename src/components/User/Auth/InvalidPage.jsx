import { FiAlertOctagon, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const InvalidPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-10 bg-[#050404] text-center">
      <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center text-red-500 mb-8 animate-pulse">
        <FiAlertOctagon size={48} />
      </div>
      <h1 className="text-5xl font-black text-white tracking-tighter mb-4">
        Access Restricted
      </h1>
      <p className="text-gray-500 max-w-sm font-medium mb-10">
        The cinematic sequence you&apos;re attempting to reach is either
        restricted or does not exist in our catalog.
      </p>
      <button
        className="btn-outline flex items-center gap-2 group"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Return to Catalog
      </button>
    </div>
  );
};

export default InvalidPage;
