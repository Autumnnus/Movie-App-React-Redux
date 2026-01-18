import { FiAlertTriangle, FiTrash2, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { warningModalFunc } from "../../redux/modalSlice";
import { deleteProductFunc } from "../../redux/productSlice";

const WarningModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let loc = location?.search.split("=")[1];

  const deleteProduct = () => {
    if (loc) {
      dispatch(deleteProductFunc(loc));
    }
    dispatch(warningModalFunc());
    navigate(`/`);
  };

  const cancelFunc = () => {
    dispatch(warningModalFunc());
    navigate(`/`);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div
        className="fixed inset-0 bg-[#050404]/90 backdrop-blur-sm"
        onClick={cancelFunc}
      />
      <div className="relative w-full max-w-sm bg-[#2e1c2b] border border-[#893168]/20 rounded-xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
          <FiAlertTriangle size={32} />
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-2">
          Delete Masterpiece?
        </h3>
        <p className="text-gray-500 text-sm mb-8">
          This action will permanently remove the cinematic title from your
          catalog.
        </p>

        <div className="flex gap-3">
          <button
            className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
            onClick={deleteProduct}
          >
            <FiTrash2 size={14} /> Confirm
          </button>
          <button
            className="flex-1 px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] text-gray-400 hover:text-white text-xs font-black uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2"
            onClick={cancelFunc}
          >
            <FiX size={14} /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
