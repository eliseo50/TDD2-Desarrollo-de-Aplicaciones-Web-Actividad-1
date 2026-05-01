import { itemActions } from "../../api/api";
import type { ItemActionTypes } from "../../api/api";

export async function getItems(type: ItemActionTypes) {
  return await itemActions.getAll(type);
}
