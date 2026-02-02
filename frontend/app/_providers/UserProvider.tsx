'use client'

import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'

import { createUserStore, type UserStore as UserStoreData } from "@/store/user-store"


type UserStoreApi = ReturnType<typeof createUserStore>


export const UserStoreContext = createContext<UserStoreApi | null>(null)

export const UserStoreProvider = ({ children, initialUser }: { children: React.ReactNode, initialUser: any }) => {
    const storeRef = useRef<UserStoreApi>(null) 

    if (!storeRef.current) {
        storeRef.current = createUserStore(initialUser)
    }

    return (
        <UserStoreContext.Provider value={storeRef.current}>
            {children}
        </UserStoreContext.Provider>
    )
}

export const useUserStore = <T,>(selector: (state: UserStoreData) => T): T => {
    const context = useContext(UserStoreContext) 

    if (!context) {
        throw new Error('useUserStore must be used within UserStoreProvider')
    }
    return useStore(context, selector)
}
