export function getItemData(form: HTMLFormElement) {
  const fromData = new FormData(form);
  const itemData = {
    id: String(crypto.randomUUID()),
    name: String(fromData.get("name") ?? "").trim(),
    description: String(fromData.get("description") ?? "").trim(),
    date: String(fromData.get("date") ?? "").trim(),
  };
  return itemData;
}
