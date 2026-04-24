import { useNavigationStore } from "../context/navigationStore";
import { useGoalsStore } from "../context/goalsStore";
import { useTaskStore } from "../context/taskStore";

export function useTasksAndGoals() {
  const { activeTab } = useNavigationStore();
  const { tasksList, addTask, removeTask } = useTaskStore();
  const { goalsList, addGoal, removeGoal } = useGoalsStore();
  const isTasks = activeTab === "tasks";
  const currentItems = isTasks
    ? Object.values(tasksList)
    : Object.values(goalsList);
  const addItem = isTasks ? addTask : addGoal;
  const removeItem = isTasks ? removeTask : removeGoal;
  return { currentItems, addItem, removeItem };
}
