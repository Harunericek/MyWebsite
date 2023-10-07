import { motion } from "framer-motion";
import "./home.styles.css";

const HomeTitle = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="titleDesktop">
          <span>Hi. I´m Harun</span>
          <br />
          <span>A Developer.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="subtitle-desktop">
          <span>
            I have a strong passion for crafting engaging
            <br /> inclusive, and user-focused experiences.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeTitle;
