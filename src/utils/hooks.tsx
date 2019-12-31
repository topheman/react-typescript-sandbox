import { useState } from "react";

export const DEFAULT_ORIGINAL_ITEMS = [
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
];

type IPropsManageUsers<T> = {
  items: T[];
  countStart?: number;
  isItemEqual?: (a: T, b: T) => boolean;
};

export function useManageItems<T>({
  items: originalItems,
  countStart = 4,
  isItemEqual = (a, b) => a === b
}: IPropsManageUsers<T>) {
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
  function removeItem(itemToRemove: T) {
    setItems(items => items.filter(item => !isItemEqual(itemToRemove, item)));
  }
  return { items, addItem, removeItem };
}
