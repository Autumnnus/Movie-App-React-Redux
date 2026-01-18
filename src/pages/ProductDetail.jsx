import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Detail from "../components/Products/Detail";

const ProductDetail = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const foundProduct = product.find(
    (item) => item.id.toString() === id.toString(),
  );

  if (!foundProduct) {
    return (
      <div className="min-h-screen bg-[#050404]">
        <Header />
        <div className="flex flex-col items-center justify-center py-40">
          <h2 className="text-2xl font-bold text-gray-500">Movie not found.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050404]">
      <Header />
      <Detail pr={foundProduct} />
    </div>
  );
};

export default ProductDetail;
