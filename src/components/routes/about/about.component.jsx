import "./about.styles.css";
import { motion } from "framer-motion";
import AboutTitle from "./aboutTitle.component";
import AboutMain from "./aboutMain.component";

const About = () => {
  return (
    <div>
      <main id="titleContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
        >
          <AboutTitle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
          }}
        >
          <AboutMain />
        </motion.div>
      </main>
    </div>
  );
};

export default About;
