import type { ItemCardProps } from "../components/ItemCard";

export function isItemValid(data: Partial<ItemCardProps>) {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string")
    errors.push("Nombre inválido");

  if (!data.description || data.description.length > 200)
    errors.push("Descripción inválida");

  const isValidDate = !isNaN(Date.parse(data.date));
  if (!data.date || !isValidDate) errors.push("Fecha inválida");

  return { isValid: errors.length === 0, errors };
}
