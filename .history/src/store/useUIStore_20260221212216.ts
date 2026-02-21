import { create } from "zustand";

interface UIState {
  isCartDrawerOpen: boolean;
  isSidebarOpen: boolean;
  activeModal: string | null;
  toggleCartDrawer: (open?: boolean) => void;
  toggleSidebar: (open?: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartDrawerOpen: false,
  isSidebarOpen: false,
  activeModal: null,
  toggleCartDrawer: (open) =>
    set((state) => ({ isCartDrawerOpen: open ?? !state.isCartDrawerOpen })),
  toggleSidebar: (open) =>
    set((state) => ({ isSidebarOpen: open ?? !state.isSidebarOpen })),
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
}));
