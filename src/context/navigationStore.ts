import { create } from "zustand";

type ActiveTab = "tasks" | "goals";

interface NavigationStore {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeTab: "tasks",
  setActiveTab: (tab: ActiveTab) => set({ activeTab: tab }),
}));
