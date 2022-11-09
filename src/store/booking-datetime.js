import create from 'zustand'

const todayRaw = new Date();

export const fieldBookingDateTime = create((set) => ({
  gDate: todayRaw,
  gToTime: todayRaw,
  gFromTime: todayRaw,

  updateDate: (newDate) => set((state) => ({ gDate: newDate })),
  updateFromTime: (newFromTime) => set((state) => ({ gFromTime: newFromTime })),
  updateToTime: (newToDate) => set((state) => ({ gToTime: newToDate }))
}))