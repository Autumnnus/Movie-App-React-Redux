import { FiFilm, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import WarningModal from "./WarningModal";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const { product: productData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const warningModal = useSelector((state) => state.modal.warningModal);

  return (
    <main className="container mx-auto px-10 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#893168] font-bold text-sm uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-[#893168]"></span>
            Trending Now
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter">
            Movie Catalog
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Explore {productData?.length || 0} carefully selected cinematic
            titles.
          </p>
        </div>

        <button
          onClick={() => dispatch(modalFunc())}
          className="flex items-center gap-2 bg-[#893168] hover:bg-[#4a1942] px-6 py-3 rounded-md text-white text-sm font-bold transition-all shadow-lg shadow-[#893168]/20"
        >
          <FiPlus size={18} />
          Append New Movie
        </button>
      </div>

      {modal && <Modal />}
      {warningModal && <WarningModal />}

      {productData?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {productData.map((pr, i) => (
            <ProductCard key={pr.id || i} pr={pr}></ProductCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-white/5 rounded-2xl text-center">
          <div className="w-24 h-24 bg-[#2e1c2b] rounded-full flex items-center justify-center mb-8">
            <FiFilm size={40} className="text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-300">Theater is empty</h2>
          <p className="text-gray-500 mt-2 max-w-sm font-medium">
            No movies are currently listed in the catalog. Start by adding your
            first cinematic masterpiece.
          </p>
        </div>
      )}
    </main>
  );
};

export default Products;
