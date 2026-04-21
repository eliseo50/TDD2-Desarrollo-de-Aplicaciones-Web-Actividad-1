import { useState, useMemo } from "react";
import type { ItemCardProps } from "../components/ItemCard";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Record<string, ItemCardProps>>({});
  const [goals, setGoals] = useState<Record<string, ItemCardProps>>({});
  const [activeTab, setActiveTab] = useState("goals");

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const addTask = (task: ItemCardProps) => {
    setTasks((prevTasks) => ({ ...prevTasks, [task.id]: task }));
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => {
      const newTasks = { ...prevTasks };
      delete newTasks[id];
      return newTasks;
    });
  };

  const addGoal = (goal: ItemCardProps) => {
    setGoals((prevGoals) => ({ ...prevGoals, [goal.id]: goal }));
  };

  const removeGoal = (id: string) => {
    setGoals((prevGoals) => {
      const newGoals = { ...prevGoals };
      delete newGoals[id];
      return newGoals;
    });
  };

  const value = useMemo(
    () => ({
      tasks,
      goals,
      addTask,
      removeTask,
      addGoal,
      removeGoal,
      activeTab,
      changeActiveTab,
    }),
    [tasks, goals, activeTab],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
