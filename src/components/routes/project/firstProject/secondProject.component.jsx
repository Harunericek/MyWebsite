import "../project.styles.css";
import "../../home/home.styles.css";
import firstProjectImg from "../../../pictures/Auftragsteilung.JPG";
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
    return <div>
 {isDesktopOrLaptop && (
        <div className="container-card-project-desktop">
          <a href="https://auftragsteilung.vercel.app" target="blank">
            <ProjectCard
              containerClass="card-rectangle-project"
              imgClass="imgPositionAndStyleStaticDesktopProject1"
              ImgSrc={firstProjectImg}
              alt="firstProject"
            />
          </a>
          <div className="contentProjectDesktop">
            <ProjectCardText
              classes="contentProjectDesktop"
              stylesTF1={{ fontSize: "30px" }}
              textField1="This project was developed to simplify daily work routines. The
              software automates the allocation of orders to up to four
              different production lines."
              stylesTF2={{ fontSize: "25px" }}
              textField2="This saves time and resources, prevents bottlenecks, and minimizes
              errors in order assignment. It also allows for adaptation to
              changing production conditions. Overall, this project
              significantly improves work processes and enhances workplace
              productivity."
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="container-card-project-mobile">
          <a href="https://auftragsteilung.vercel.app" target="blank">
            <ProjectCard
              containerClass="card-square-mobile-project"
              imgClass="imgPositionAndStyleStaticMobileProject1"
              ImgSrc={firstProjectImg}
              alt="firstProject"
            />
          </a>
          <div className="contentProjectMobile">
            <ProjectCardText
              classes="contentProjectMobile"
              stylesTF1={{ fontSize: "25px", fontWeight: "bold" }}
              textField1="This project was developed to simplify daily work routines. The
              software automates the allocation of orders to up to four
              different production lines."
              stylesTF2={{ fontSize: "20px" }}
              textField2="This saves time and resources, prevents bottlenecks, and minimizes
              errors in order assignment. It also allows for adaptation to
              changing production conditions. Overall, this project
              significantly improves work processes and enhances workplace
              productivity."
            />
          </div>
        </div>
      )}       
    </div>
}

export default FirstProject;