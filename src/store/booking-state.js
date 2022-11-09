import create from 'zustand'

export const fieldBookingStatusStore = create((set) => ({
  bookingStatus: '',
  updateStatus: (newStatus) => set((state) => ({ bookingStatus: newStatus })),
  removeAllBears: () => set({ bookingStatus: '' }),
}))