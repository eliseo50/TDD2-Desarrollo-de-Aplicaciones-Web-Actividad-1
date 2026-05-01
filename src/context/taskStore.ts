import { create } from "zustand";
import { addItem } from "./helpers/addItem";
import { addItems } from "./helpers/addItems";
import { removeItem } from "./helpers/removeItem";

import type { ItemCardProps } from "../components/ItemCard";
import type { TaskStore } from "./types";
import { itemActions, ITEMS } from "../api/api";
import type { Item } from "../types/Item";

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasksList: {},
  status: "idle",
  error: null,
  initialize: async () => {
    set({ status: "loading" });
    try {
      const tasks = (await itemActions.getAll(ITEMS.TASK)) as Item[];
      const tasksList = Object.fromEntries(tasks.map((t) => [t.id, t]));
      set({ tasksList, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Failed to load tasks",
      });
    }
  },
  addTask: async (task) => {
    set({ status: "loading", error: null });
    try {
      const newTasks = await addItem({
        item: task,
        currentItems: get().tasksList,
        type: ITEMS.TASK,
      });
      set({ tasksList: newTasks, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Error adding task",
      });
    }
  },
  removeTask: async (id) => {
    set({ status: "loading", error: null });
    try {
      const newTasks = await removeItem({
        id,
        currentItems: get().tasksList,
        type: ITEMS.TASK,
      });
      set({ tasksList: newTasks, status: "idle", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Error removing task",
      });
    }
  },
  addTasks: (tasks: ItemCardProps[]) =>
    set((state) => {
      const newTasks = addItems({
        items: tasks,
        currentItems: state.tasksList,
      });
      return { tasksList: newTasks };
    }),
}));

useTaskStore.getState().initialize();
