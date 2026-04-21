import { createContext } from "react";
import type { ItemCardProps } from "../components/ItemCard";

interface TaskContext {
  activeTab: string;
  changeActiveTab: (tab: string) => void;
  tasks: Record<string, ItemCardProps>;
  goals: Record<string, ItemCardProps>;
  addTask: (task: ItemCardProps) => void;
  removeTask: (id: string) => void;
  addGoal: (goal: ItemCardProps) => void;
  removeGoal: (id: string) => void;
}

export const TaskContext = createContext<TaskContext>({
  activeTab: "goals",
  changeActiveTab: () => {},
  tasks: {},
  goals: {},
  addTask: () => {},
  removeTask: () => {},
  addGoal: () => {},
  removeGoal: () => {},
});
