import create from 'zustand'

export const userInfo = create((set) => ({
  info: {},
  updateInfo: (newInfo) => set((state) => ({ info: newInfo }))
}))