import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <div style={{ backgroundColor: "#F79696" }}>
        <div>Drag the square around: mouse pointer lags behind</div>
        <svg viewBox="0 0 100 100" width="500" height="500">
          <motion.rect
            width="10"
            height="10"
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.2}
          />
        </svg>
      </div>
      <div style={{ backgroundColor: "#D7F4B8" }}>
        <div>Expected behaviour:</div>
        <svg viewBox="0 0 500 500" width="500" height="500">
          <motion.rect width="50" height="50" drag />
        </svg>
      </div>
    </>
  );
}
