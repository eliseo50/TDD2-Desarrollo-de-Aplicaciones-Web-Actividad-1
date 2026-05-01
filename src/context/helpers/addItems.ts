import type { ItemList } from "../types";
import type { ItemCardProps } from "../../components/ItemCard";

export function addItems({
  items,
  currentItems,
}: {
  items: ItemCardProps[];
  currentItems: ItemList;
}) {
  const newItems = { ...currentItems };
  items.forEach((item) => {
    newItems[item.id] = item;
  });
  return newItems;
}
