import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

let store = (set) => ({
  userInfo: {},

  addUserInfo: (userInfo) => {
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    set({ userInfo: { ...userInfo, date } })
  },
  deleteUserInfo: () => set({ userInf: {} }),
})

store = devtools(store)
store = persist(store, { name:'userInfo'})

const useStore = create(store)


export default useStore