import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,
    setAuthUser: (user) => set({ authUser: user }),
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({authUser: res.data});
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({authUser: null});
        }finally {
            set({isCheckingAuth: false});
        }
    },
}));