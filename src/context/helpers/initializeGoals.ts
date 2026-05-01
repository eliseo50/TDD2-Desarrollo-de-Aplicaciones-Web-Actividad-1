import type { ItemList } from "../types";
import { itemActions, ITEMS } from "../../api/api";
import type { Item } from "../../types/Item";

export async function initializeGoals(store: {
  setState: (state: { goalsList: ItemList }) => void;
}) {
  const goals = (await itemActions.getAll(ITEMS.GOAL)) as Item[];
  const goalsList: ItemList = Object.fromEntries(
    goals.map((goal) => [goal.id, goal]),
  );
  store.setState({ goalsList });
}
