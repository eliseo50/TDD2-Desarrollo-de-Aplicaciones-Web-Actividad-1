import { create } from "zustand";
import { addItem, addItems, removeItem } from "./helpers";

import type { ItemCardProps } from "../components/ItemCard";
import type { GoalStore } from "./types";

export const useGoalsStore = create<GoalStore>((set) => ({
  goalsList: {},
  addGoal: (goal) =>
    set((state) => {
      const newGoals = addItem({ item: goal, currentItems: state.goalsList });
      return { goalsList: newGoals };
    }),
  removeGoal: (id) =>
    set((state) => {
      const newGoals = removeItem({ id, currentItems: state.goalsList });
      return { goalsList: newGoals };
    }),
  addGoals: (goals: ItemCardProps[]) =>
    set((state) => {
      const newGoals = addItems({
        items: goals,
        currentItems: state.goalsList,
      });
      return { goalsList: newGoals };
    }),
}));
