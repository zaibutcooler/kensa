import { create } from "zustand"

interface useModal {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useModal = create<useModal>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
