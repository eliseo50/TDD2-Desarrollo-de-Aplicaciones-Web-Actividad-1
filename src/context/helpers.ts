import type { ItemCardProps } from "../components/ItemCard";

type ItemList = Record<string, ItemCardProps>;

export function removeItem({
  id,
  currentItems,
}: {
  id: string;
  currentItems: ItemList;
}) {
  const newTasks = { ...currentItems };
  delete newTasks[id];
  return newTasks;
}

export function addItem({
  item,
  currentItems,
}: {
  item: ItemCardProps;
  currentItems: ItemList;
}) {
  return { ...currentItems, [item.id]: item };
}

export function addItems({
  items,
  currentItems,
}: {
  items: ItemCardProps[];
  currentItems: ItemList;
}) {
  const newTasks = { ...currentItems };
  items.forEach((item) => {
    newTasks[item.id] = item;
  });
  return newTasks;
}
