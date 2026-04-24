import { create } from "zustand";
import { addItem, addItems, removeItem } from "./helpers";

import type { ItemCardProps } from "../components/ItemCard";
import type { TaskStore } from "./types";

export const useTaskStore = create<TaskStore>((set) => ({
  tasksList: {},
  addTask: (task) =>
    set((state) => {
      const newTasks = addItem({ item: task, currentItems: state.tasksList });
      return { tasksList: newTasks };
    }),
  removeTask: (id) =>
    set((state) => {
      const newTasks = removeItem({ id, currentItems: state.tasksList });
      return { tasksList: newTasks };
    }),
  addTasks: (tasks: ItemCardProps[]) =>
    set((state) => {
      const newTasks = addItems({
        items: tasks,
        currentItems: state.tasksList,
      });
      return { tasksList: newTasks };
    }),
}));
