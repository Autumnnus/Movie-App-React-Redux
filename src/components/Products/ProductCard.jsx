import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BiDotsVerticalRounded,
  BiEditAlt,
  BiPlay,
  BiTrash,
} from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalFunc } from "../../redux/modalSlice";
import { deleteProductFunc } from "../../redux/productSlice";

const ProductCard = ({ pr }) => {
  ProductCard.propTypes = {
    pr: PropTypes.shape({
      id: PropTypes.any.isRequired,
      url: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  };
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${pr?.id}`);
  };

  return (
    <div className="w-full relative card-surface rounded-lg overflow-hidden flex flex-col h-[480px] group">
      <div className="h-2/3 overflow-hidden relative">
        <img
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          src={
            pr?.url ||
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500"
          }
          alt={pr?.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3">
          <span className="bg-[#893168] text-white text-[10px] tracking-widest px-2.5 py-1 rounded font-bold uppercase">
            {pr?.category || "General"}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => navigate(`/detail/${pr?.id}`)}
            className="w-14 h-14 bg-[#893168] rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300"
          >
            <BiPlay size={32} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500 font-bold">
              {pr?.date || "2024"}
            </span>
            <div className="flex items-center gap-1.5">
              <AiFillStar className="text-yellow-500" size={14} />
              <span className="text-xs text-gray-400 font-bold">
                {pr?.rating || "8.5"}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#eaeaea] leading-tight mb-2 line-clamp-1">
            {pr?.name}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-3 h-15">
            {pr?.description ||
              "Experience a cinematic journey like no other in this masterpiece."}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-white/5">
          <button
            onClick={() => navigate(`/detail/${pr?.id}`)}
            className="w-full h-10 rounded bg-[#1a1a1a] hover:bg-[#893168] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            View Details
          </button>
        </div>
      </div>

      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={() => setOpenEdit(!openEdit)}
          className="w-8 h-8 flex items-center justify-center rounded bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
        >
          <BiDotsVerticalRounded size={18} />
        </button>
      </div>

      {openEdit && (
        <div className="absolute top-12 right-3 w-36 bg-[#2e1c2b] border border-[#893168]/30 p-1.5 z-20 shadow-2xl rounded">
          <button
            onClick={updateFunc}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-[#4a1942] rounded transition-colors font-medium"
          >
            <BiEditAlt size={16} />
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(deleteProductFunc(pr?.id));
              setOpenEdit(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded transition-colors font-medium"
          >
            <BiTrash size={16} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
