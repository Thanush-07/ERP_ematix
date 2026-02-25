import { create } from "zustand";

const useNotificationStore = create((set, get) => ({
  toasts: [],
  addToast: (msg, type = "info") => {
    const id = Date.now();
    set((s) => ({ toasts: [...s.toasts, { id, msg, type }] }));
    setTimeout(() => get().removeToast(id), 4000);
  },
  removeToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

export default useNotificationStore;
