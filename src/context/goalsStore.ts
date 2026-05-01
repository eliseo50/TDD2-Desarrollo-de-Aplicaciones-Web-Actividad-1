import { create } from "zustand";
import { addItem } from "./helpers/addItem";
import { addItems } from "./helpers/addItems";
import { removeItem } from "./helpers/removeItem";
import type { GoalStore } from "./types";
import { itemActions, ITEMS } from "../api/api";
import type { ItemCardProps } from "../components/ItemCard";
import type { Item } from "../types/Item";

export const useGoalsStore = create<GoalStore>((set, get) => ({
  goalsList: {},
  status: "idle",
  error: null,
  initialize: async () => {
    set({ status: "loading" });
    try {
      const goals = (await itemActions.getAll(ITEMS.GOAL)) as Item[];
      const goalsList = Object.fromEntries(goals.map((t) => [t.id, t]));
      set({ goalsList, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Failed to load goals",
      });
    }
  },
  addGoal: async (goal) => {
    set({ status: "loading", error: null });
    try {
      const newGoals = await addItem({
        item: goal,
        currentItems: get().goalsList,
        type: ITEMS.GOAL,
      });
      set({ goalsList: newGoals, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Error adding goal",
      });
    }
  },
  removeGoal: async (id) => {
    set({ status: "loading", error: null });
    try {
      const newGoals = await removeItem({
        id,
        currentItems: get().goalsList,
        type: ITEMS.GOAL,
      });
      set({ goalsList: newGoals, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Error removing goal",
      });
    }
  },
  addGoals: (goals: ItemCardProps[]) =>
    set((state) => {
      const newGoals = addItems({
        items: goals,
        currentItems: state.goalsList,
      });
      return { goalsList: newGoals };
    }),
}));

useGoalsStore.getState().initialize();
