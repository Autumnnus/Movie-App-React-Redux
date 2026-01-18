import { createSlice } from "@reduxjs/toolkit";

const getInitialProducts = () => {
  const localData = localStorage.getItem("cineStream_products");
  if (localData) return JSON.parse(localData);

  const defaultProducts = [
    {
      id: "1",
      name: "Inception",
      category: "Sci-Fi",
      date: "2010",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
      rating: "8.8",
      director: "Christopher Nolan",
      duration: "2.5",
      trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
      id: "2",
      name: "The Dark Knight",
      category: "Action",
      date: "2008",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
      url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
      rating: "9.0",
      director: "Christopher Nolan",
      duration: "2.6",
      trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
  ];
  localStorage.setItem("cineStream_products", JSON.stringify(defaultProducts));
  return defaultProducts;
};

const initialState = {
  product: getInitialProducts(),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductFunc: (state, action) => {
      state.product = [...state.product, action.payload];
      localStorage.setItem(
        "cineStream_products",
        JSON.stringify(state.product),
      );
    },
    updateProductFunc: (state, action) => {
      state.product = state.product.map((product) =>
        product.id.toString() === action.payload.id.toString()
          ? { ...product, ...action.payload }
          : product,
      );
      localStorage.setItem(
        "cineStream_products",
        JSON.stringify(state.product),
      );
    },
    deleteProductFunc: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id.toString() !== action.payload.toString(),
      );
      localStorage.setItem(
        "cineStream_products",
        JSON.stringify(state.product),
      );
    },
  },
});

export const { createProductFunc, updateProductFunc, deleteProductFunc } =
  productSlice.actions;

export default productSlice.reducer;
