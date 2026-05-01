import type { ItemList } from "../types";
import { itemActions } from "../../api/api";
import type { ItemActionTypes } from "../../api/api";

export async function removeItem({
  id,
  currentItems,
  type,
}: {
  id: string;
  currentItems: ItemList;
  type: ItemActionTypes;
}) {
  const removedItem = await itemActions.remove(type, id);
  if (!removedItem) {
    throw new Error("Item not found");
  }
  const newItems = { ...currentItems };
  delete newItems[id];
  return newItems;
}
