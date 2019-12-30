import { useState } from "react";

type IPropsManageUsers = {
  items?: string[];
  countStart?: number;
  isItemEqual?: (a: string, b: string) => boolean;
};

export function useManageItems({
  items: originalItems = [
    "Alice",
    "Bob",
    "John",
    "Liza",
    "Mike",
    "Mary",
    "Tom",
    "Sarah",
    "Mark",
    "Nancy"
  ],
  countStart = 4,
  isItemEqual = (a, b) => a === b
}: IPropsManageUsers = {}) {
  const [items, setItems] = useState(originalItems.slice(0, countStart));
  function addItem() {
    setItems(items => {
      const newItem = originalItems.find(item => !items.includes(item));
      if (newItem) {
        return [newItem, ...items];
      }
      return items;
    });
  }
  function removeItem(itemToRemove: string) {
    setItems(items => items.filter(item => !isItemEqual(itemToRemove, item)));
  }
  return { items, addItem, removeItem };
}
