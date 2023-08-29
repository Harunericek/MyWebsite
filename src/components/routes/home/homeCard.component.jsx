import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Card1 from "../../card/card1.component";
import Card2 from "../../card/card2.component";
import "./home.styles.css";

import Iphone from "../../pictures/iphone.png";
import Mac from "../../pictures/macbook.png";

const HomeCard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div>
      {isDesktopOrLaptop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <div>
            <div className="card-container">
              <Card1 className="card-square" ImgSrc1={Iphone} />
              <Card2 className="card-rectangle" ImgSrc2={Mac} />
            </div>
          </div>
        </motion.div>
      )}
      {isMobile && (
        <div className="card-container-mobile">
          <Card1 className="card-square-mobile1" ImgSrc1={Iphone} />
          <Card2 className="card-square-mobile2" ImgSrc2={Mac} />
        </div>
      )}
    </div>
  );
};

export default HomeCard;
