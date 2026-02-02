import { PlayerResponse } from '@/models/generated.schemas'
import { createStore } from 'zustand/vanilla'

export type UserStore = {
  user: PlayerResponse | null
  setUser: (user: any) => void
}

export const createUserStore = (initUser: any = null) => {
  return createStore<UserStore>((set) => ({
    user: initUser,
    setUser: (user) => set({ user }),
  }))
}