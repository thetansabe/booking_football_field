import create from "zustand";

export const cartStore = create((set) => ({
  cart: [],
  updateCart: (newCart) => set((state) => ({ cart: newCart })),
}));
