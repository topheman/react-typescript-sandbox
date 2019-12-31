import { renderHook, act } from "@testing-library/react-hooks";

import { useManageItems, DEFAULT_ORIGINAL_ITEMS } from "./hooks";

describe("utils/hooks/useManageItems", () => {
  it("[Defaults] should return the default list, truncated at 4 items", () => {
    const { result } = renderHook(() =>
      useManageItems({ items: DEFAULT_ORIGINAL_ITEMS })
    );
    expect(result.current.items).toStrictEqual([
      "Alice",
      "Bob",
      "John",
      "Liza"
    ]);
  });
  it("[Defaults] {countStart: 2}, should return 2 items from default list", () => {
    const { result } = renderHook(() =>
      useManageItems({ items: DEFAULT_ORIGINAL_ITEMS, countStart: 2 })
    );
    expect(result.current.items).toStrictEqual(["Alice", "Bob"]);
  });
  it("[Defaults] {items: [...]} should return a truncated version of the overridden items list", () => {
    const { result } = renderHook(() =>
      useManageItems({
        items: ["toto", "tata", "titi", "tutu", "tete", "tyty"]
      })
    );
    expect(result.current.items).toStrictEqual([
      "toto",
      "tata",
      "titi",
      "tutu"
    ]);
  });
  it("`addItem()` should add the next item in the list at the top", () => {
    const { result } = renderHook(() =>
      useManageItems({ items: DEFAULT_ORIGINAL_ITEMS })
    );
    expect(result.current.items).toStrictEqual([
      "Alice",
      "Bob",
      "John",
      "Liza"
    ]);
    act(() => {
      result.current.addItem();
    });
    expect(result.current.items).toStrictEqual([
      "Mike",
      "Alice",
      "Bob",
      "John",
      "Liza"
    ]);
  });
  it("`removeItem(item)` should remove an item", () => {
    const { result } = renderHook(() =>
      useManageItems({ items: DEFAULT_ORIGINAL_ITEMS })
    );
    expect(result.current.items).toStrictEqual([
      "Alice",
      "Bob",
      "John",
      "Liza"
    ]);
    act(() => {
      result.current.removeItem("John");
    });
    expect(result.current.items).toStrictEqual(["Alice", "Bob", "Liza"]);
  });
});
