import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [item, setitem] = useState([
    "list item 1",
    "list item 2",
    "list item 3",
  ]);

  function addItem(item) {
    setitem((items) => [...items, `list item  ${item}`]);
  }

  function removeItem(item) {
    setitem((items) => items.filter((i) => i !== item));
  }

  return (
    <div className="p-20">
      <div>
        <button
          className="border rounded w-8 h-8"
          onClick={() => addItem(item.length + 1)}
        >
          Add
        </button>
        <ul>
          <AnimatePresence>
            {item.map((e) => (
              <motion.li
                key={e}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.1 },
                }}
                className="flex justify-between items-center py-2 border-b"
              >
                <span>{e}</span>
                <button
                  className="border rounded w-8 h-8"
                  onClick={() => removeItem(e)}
                >
                  &times;
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

export default App;
