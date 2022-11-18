import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

function App() {
  const [tag, setTag] = useState(0);

  const texts = [
    `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Quos omnis fugit voluptate, 
    ipsa eligendi est cum nemo earum architecto 
    natusdolorem optio molestias numquam autem 
    consectetur maiores vel magnivero.`,
    `quidem laborum, tempora unde. Vitae iusto 
    laboriosamarchitectoexercitationem!`,
    `optio molestias numquam autem consectetur 
    maiores vel magni vero.`,
    `a`,
    `b`,
    `c`,
    `d`,
  ];

  const ResizablePanel = ({ children }) => {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div style={{ height: "50px" }}>{children}</div>
      </motion.div>
    );
  };

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <ResizablePanel>{texts[tag]}</ResizablePanel>
      <motion.button
        className={"px-8 py-2 bg-slate-700 text-white rounded-[5px]"}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        whileInView={{ scale: 1, transition: { duration: 0.2 } }}
        onClick={() => {
          if (tag >= texts.length - 1) setTag(0);
          else setTag(tag + 1);
        }}
      >
        切换
      </motion.button>
    </MotionConfig>
  );
}

export default App;
