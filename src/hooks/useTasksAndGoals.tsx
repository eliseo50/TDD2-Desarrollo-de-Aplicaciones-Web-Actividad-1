import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTasksAndGoals() {
  const { tasks, addTask, removeTask, goals, addGoal, removeGoal, activeTab } =
    useContext(TaskContext);
  const isTasks = activeTab === "tasks";
  const currentItems = isTasks ? Object.values(tasks) : Object.values(goals);
  const addItem = isTasks ? addTask : addGoal;
  const removeItem = isTasks ? removeTask : removeGoal;
  return { currentItems, addItem, removeItem };
}
