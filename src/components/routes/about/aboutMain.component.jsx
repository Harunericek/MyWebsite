import { useMediaQuery } from "react-responsive";
import Me from "../../pictures/Me.JPG";

const AboutMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      {isMobile && (
        <div className="mainSectionMobile">
          <div className="imgCardMobile">
            <img className="imgMobile" alt="me" src={Me} />
            <div className="imgCardBottom">
              <span className="imgCardBottomTitle">
                Harun Ericek - Frontend Developer
              </span>
            </div>
          </div>
          <div className="subtitleMobile">
            <h2>
              As a dedicated freelancer in development, I have the privilege of
              shaping my professional work from the comfort of home.
            </h2>
            <h3>
              In January 2022, my journey into programming began. Focusing on
              frontend design using ReactJS and CSS, I create appealing,
              user-friendly websites. Driven by growth, I continuously refine my
              skills to provide innovative solutions for digital challenges.
            </h3>
          </div>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div className="mainSectionDesktop">
          <div className="imgCardDesktop">
            <img className="imgDesktop" alt="me" src={Me} />
            <div className="imgCardBottom">
              <span className="imgCardBottomTitle">
                Harun Ericek - Frontend Developer
              </span>
            </div>
          </div>
          <div className="subtitleDesktop">
            <span style={{ fontSize: "40px" }}>
              As a dedicated freelancer in development, I have the privilege of
              shaping my professional work from the comfort of home.
            </span>
            <br />
            <span style={{ fontSize: "25px" }}>
              In January 2022, my journey into programming began. Focusing on
              frontend design using ReactJS and CSS, I create appealing,
              user-friendly websites.
              <br />
              <br />
              Driven by growth, I continuously refine my skills to provide
              innovative solutions for digital challenges.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMain;
