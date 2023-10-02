import "../project.styles.css";
import "../../home/home.styles.css";
import secondProjectImg from "../../../pictures/EricekClothing.JPG";
import ProjectCard from "../../../card/projectCard.component";
import ProjectCardText from "../../../card/projectCardText.component";
import { useMediaQuery } from "react-responsive";

const FirstProject = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const customStyle = {
    transform: "scale(0.5)",
  };

  const firstTextPart =
    "This is an excerpt from my project, in which I developed a customized E-commerce platform for a renowned retailer.";
  const secondTextPart =
    "This platform enabled efficient product presentation and increased sales through a user-friendly online store. State-of-the-art payment gateways and security measures were integrated to protect customer and transaction data.";
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="container-card-project-desktop">
          <div className="contentProjectDesktop">
            <ProjectCardText
              classes="contentProjectDesktop"
              stylesTF1={{ fontSize: "30px" }}
              textField1={firstTextPart}
              stylesTF2={{ fontSize: "25px" }}
              textField2={secondTextPart}
            />
          </div>
          <a href="https://ericekclothingshop.vercel.app" target="blank">
            <ProjectCard
              id="secondProjectColor"
              containerClass="card-rectangle-project"
              imgClass="imgPositionAndStyleStaticDesktopProject1"
              ImgSrc={secondProjectImg}
              alt="firstProject"
            />
          </a>
        </div>
      )}
      {isMobile && (
        <div className="container-card-project-mobile">
          <a href="https://ericekclothingshop.vercel.app" target="blank">
            <ProjectCard
              id="secondProjectColor"
              containerClass="card-square-mobile-project"
              imgClass="imgPositionAndStyleStaticMobileProject1"
              ImgSrc={secondProjectImg}
              alt="firstProject"
            />
          </a>
          <div className="contentProjectMobile">
            <ProjectCardText
              classes="contentProjectMobile"
              stylesTF1={{ fontSize: "25px", fontWeight: "bold" }}
              textField1={firstTextPart}
              stylesTF2={{ fontSize: "20px" }}
              textField2={secondTextPart}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstProject;
