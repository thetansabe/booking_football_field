import create from 'zustand'

export const regInfoStore = create((set) => ({
  regInfo: {sex: '', dob: '', phone:'', email: '', description: '',address: '', fullName: '', username: '', password: ''},
  updateRegInfo: (newInfo) => set((state) => ({ regInfo: newInfo }))
}))