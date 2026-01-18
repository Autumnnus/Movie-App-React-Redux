import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modalFunc } from "../../redux/modalSlice";
import { createProductFunc, updateProductFunc } from "../../redux/productSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const [movieInfo, setMovieInfo] = useState({
    name: "",
    category: "",
    description: "",
    url: "",
    director: "",
    imdbRating: "",
    date: "",
    duration: "",
    trailerUrl: "",
    id: "",
  });

  const location = useLocation();
  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      const foundProduct = product.find(
        (pr) => pr.id.toString() === loc.toString(),
      );
      if (foundProduct) {
        setMovieInfo(foundProduct);
      }
    }
  }, [loc, product]);

  const onchangeFunc = (e, type) => {
    if (type === "url") {
      setMovieInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setMovieInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    if (loc) {
      dispatch(updateProductFunc({ ...movieInfo, id: loc }));
    } else {
      const newId =
        product.length > 0
          ? (Math.max(...product.map((p) => parseInt(p.id))) + 1).toString()
          : "1";
      dispatch(createProductFunc({ ...movieInfo, id: newId }));
    }
    dispatch(modalFunc());
    navigate("/");
  };

  const closeModal = () => {
    dispatch(modalFunc());
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#050404]/90 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="relative w-full max-w-2xl bg-[#2e1c2b] border border-[#893168]/20 rounded-xl p-8 shadow-2xl my-auto">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            {loc ? "Edit Cinematic Title" : "Launch New Masterpiece"}
          </h2>
          <button
            onClick={closeModal}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-colors"
          >
            <IoIosClose size={36} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Title
              </label>
              <input
                className="input-field"
                value={movieInfo.name}
                type="text"
                placeholder="e.g. Inception"
                name="name"
                onChange={(e) => onchangeFunc(e, "name")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Category
              </label>
              <input
                className="input-field"
                value={movieInfo.category}
                type="text"
                placeholder="e.g. Sci-Fi"
                name="category"
                onChange={(e) => onchangeFunc(e, "category")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  Year
                </label>
                <input
                  className="input-field"
                  value={movieInfo.date}
                  type="text"
                  placeholder="2024"
                  name="date"
                  onChange={(e) => onchangeFunc(e, "date")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  Rating
                </label>
                <input
                  className="input-field"
                  value={movieInfo.imdbRating}
                  type="text"
                  placeholder="8.5"
                  name="imdbRating"
                  onChange={(e) => onchangeFunc(e, "imdbRating")}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Director
              </label>
              <input
                className="input-field"
                value={movieInfo.director}
                type="text"
                placeholder="Christopher Nolan"
                name="director"
                onChange={(e) => onchangeFunc(e, "director")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Trailer URL
              </label>
              <input
                className="input-field"
                value={movieInfo.trailerUrl}
                type="text"
                placeholder="https://youtube.com/..."
                name="trailerUrl"
                onChange={(e) => onchangeFunc(e, "trailerUrl")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Poster Image
              </label>
              <input
                className="input-field bg-transparent border-dashed border-2 border-white/10"
                type="file"
                name="url"
                onChange={(e) => onchangeFunc(e, "url")}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-1.5">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
            Synopsis
          </label>
          <textarea
            className="input-field min-h-[100px] resize-none"
            value={movieInfo.description}
            placeholder="Write a brief summary of the movie..."
            name="description"
            onChange={(e) => onchangeFunc(e, "description")}
          />
        </div>

        <button
          className="btn-primary w-full mt-8 shadow-[0_8px_24px_-4px_rgba(137,49,104,0.4)]"
          onClick={buttonFunc}
        >
          {loc ? "Commit Changes" : "Launch Title"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
