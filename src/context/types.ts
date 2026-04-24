import type { ItemCardProps } from "../components/ItemCard";

export type ItemList = Record<string, ItemCardProps>;
export interface TaskStore {
  tasksList: ItemList;
  addTask: (task: ItemCardProps) => void;
  addTasks: (tasks: ItemCardProps[]) => void;
  removeTask: (id: string) => void;
}
export interface GoalStore {
  goalsList: ItemList;
  addGoal: (goal: ItemCardProps) => void;
  addGoals: (goals: ItemCardProps[]) => void;
  removeGoal: (id: string) => void;
}
