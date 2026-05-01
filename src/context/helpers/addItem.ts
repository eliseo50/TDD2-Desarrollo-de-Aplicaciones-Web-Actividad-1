import type { ItemList } from "../types";
import { itemActions } from "../../api/api";
import type { ItemActionTypes } from "../../api/api";
import type { ItemCardProps } from "../../components/ItemCard";

export async function addItem({
  item,
  currentItems,
  type,
}: {
  item: ItemCardProps;
  currentItems: ItemList;
  type: ItemActionTypes;
}) {
  const serverItem = await itemActions.add(type, item);
  return { ...currentItems, [serverItem.id]: serverItem };
}
