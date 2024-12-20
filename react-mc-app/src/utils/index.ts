export const setItems = (itemName: string, item: any) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};
export const getItems = (itemName: string) => {
  const response = localStorage.getItem(itemName);
  if (response) return JSON.parse(response);
  return false;
};
export const removeItems = (itemName: string) => {
  localStorage.removeItem(itemName);
};
