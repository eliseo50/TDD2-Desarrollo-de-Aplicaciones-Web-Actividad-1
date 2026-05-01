import type { ItemCardProps } from "../components/ItemCard";
import type { Item } from "../types/Item";

export type ItemList = Record<string, Item>;
export type AsyncStatus = "idle" | "loading" | "error";

export interface TaskStore {
  tasksList: ItemList;
  status: AsyncStatus;
  error: string | null;
  initialize: () => Promise<void>;
  addTask: (task: ItemCardProps) => Promise<void>;
  addTasks: (tasks: ItemCardProps[]) => void;
  removeTask: (id: string) => Promise<void>;
}

export interface GoalStore {
  goalsList: ItemList;
  status: AsyncStatus;
  error: string | null;
  initialize: () => Promise<void>;
  addGoal: (goal: ItemCardProps) => Promise<void>;
  addGoals: (goals: ItemCardProps[]) => void;
  removeGoal: (id: string) => Promise<void>;
}
