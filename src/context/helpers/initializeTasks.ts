import type { ItemList } from "../types";
import { itemActions, ITEMS } from "../../api/api";
import type { Item } from "../../types/Item";

export async function initializeTasks(store: {
  setState: (state: { tasksList: ItemList }) => void;
}) {
  const tasks = (await itemActions.getAll(ITEMS.TASK)) as Item[];
  const tasksList: ItemList = Object.fromEntries(
    tasks.map((task) => [task.id, task]),
  );
  store.setState({ tasksList });
}
