import React from "react";
import { useTransition, animated } from "react-spring";

import { useManageItems, DEFAULT_ORIGINAL_ITEMS } from "../utils/hooks";
import Image from "./Image";

const BasicTransition: React.FC = () => {
  const { items, addItem, removeItem } = useManageItems({
    items: DEFAULT_ORIGINAL_ITEMS
  });

  const transitions = useTransition(items, item => item, {
    from: { transform: "translate(500px, 0px)", opacity: 0 },
    enter: { transform: "translate(0px, 0px)", opacity: 1 },
    leave: { transform: "translate(-500px, 0px)", opacity: 0 }
  });

  return (
    <div>
      <p>
        <button
          type="button"
          disabled={items.length === DEFAULT_ORIGINAL_ITEMS.length}
          onClick={() => addItem()}
        >
          Add item
        </button>
        - Click on image to remove them
      </p>
      <ul style={{ textAlign: "center", paddingLeft: 0 }}>
        {transitions.map(({ item, props, key }) => (
          <animated.li
            style={{ listStyle: "none", cursor: "pointer", ...props }}
            key={key}
            onClick={() => {
              console.log("click", { key, item, props });
              removeItem(item);
            }}
          >
            <Image />
            <p style={{ textAlign: "center" }}>{item}</p>
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

export default BasicTransition;
