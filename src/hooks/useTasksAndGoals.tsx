import { useNavigationStore } from "../context/navigationStore";
import { useGoalsStore } from "../context/goalsStore";
import { useTaskStore } from "../context/taskStore";

export function useTasksAndGoals() {
  const { activeTab } = useNavigationStore();
  const {
    tasksList,
    addTask,
    removeTask,
    status: taskStatus,
    error: taskError,
  } = useTaskStore();
  const {
    goalsList,
    addGoal,
    removeGoal,
    status: goalStatus,
    error: goalError,
  } = useGoalsStore();
  const isTasks = activeTab === "tasks";
  const currentItems = isTasks
    ? Object.values(tasksList)
    : Object.values(goalsList);
  const addItem = isTasks ? addTask : addGoal;
  const removeItem = isTasks ? removeTask : removeGoal;
  const status = isTasks ? taskStatus : goalStatus;
  const error = isTasks ? taskError : goalError;
  const resetStatus = isTasks
    ? () => useTaskStore.setState({ status: "idle", error: null })
    : () => useGoalsStore.setState({ status: "idle", error: null });
  return { currentItems, addItem, removeItem, status, error, resetStatus };
}
