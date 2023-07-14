import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

let store = (set) => ({
  userInf: {},

  addUserInfo: (userInfo) => {
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    set({ userInf: { ...userInfo, date } })
  },
  deleteUserInfo: () => set({ userInf: {} }),
})

store = devtools(store)
store = persist(store, { name:'userInfo'})

const useStore = create(store)


export default useStore