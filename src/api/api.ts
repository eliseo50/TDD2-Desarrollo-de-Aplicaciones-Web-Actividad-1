import type { Item } from "../types/Item";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function fetchData({
  endpoint,
  method = "GET",
  data,
}: {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: Item | Omit<Item, "id"> | { id: string };
}) {
  const url = `${API_BASE_URL}/${endpoint}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${import.meta.env.VITE_API_KEY || "SECRET_API"}`,
    },
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export const ITEMS = {
  TASK: "Task",
  GOAL: "Goal",
};
export type ItemActionTypes = (typeof ITEMS)[keyof typeof ITEMS];

export const itemActions = {
  getAll: async (type: ItemActionTypes) =>
    await fetchData({ endpoint: `get${type}s` }),
  add: async (type: ItemActionTypes, data: Item) =>
    await fetchData({ endpoint: `add${type}`, data, method: "POST" }),
  remove: async (type: ItemActionTypes, id: string) =>
    await fetchData({
      endpoint: `remove${type}`,
      data: { id },
      method: "DELETE",
    }),
};
