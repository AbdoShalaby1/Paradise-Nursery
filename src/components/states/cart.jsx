import { createSlice, configureStore } from "@reduxjs/toolkit";

// Create the cart slice
const cart = createSlice({
  name: "cart",
  initialState: { items: [], inCart: {} },
  reducers: {
    addItem: (state, action) => {
      if (!state.inCart[action.payload.name]) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.inCart[action.payload.name] = true;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
      state.inCart[action.payload.name] = false;
    },
    clearCart: (state) => {
      state.items = [];
      state.inCart = {};
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.name !== item.name);
          state.inCart[item.name] = false;
        }
      }
    },
  },
});

// Export actions
export const {
  addItem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cart.actions;

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export default store;
