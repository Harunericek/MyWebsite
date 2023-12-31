import "./contact.styles.css";
import { motion } from "framer-motion";
import ContactTitle from "./contactTitle.component";
import ContactMain from "./contactMain.component";

const Contact = () => {
  return (
    <div>
      <main className="titleContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
        >
          <ContactTitle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
          }}
        >
          <ContactMain />
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
