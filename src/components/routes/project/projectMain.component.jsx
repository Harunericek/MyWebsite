import { useMediaQuery } from "react-responsive";
import firstProjectImg from "../../Bilder/Auftragsteilung.JPG";
import "./project.styles.css";
import "../home/styles/home.styles.css";
import ProjectCard from "../../Card/projectCard.component";

const ProjectMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const customStyle = {
    transform: "scale(0.5)",
  };
  return (
    <div>
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
            <span style={{ fontSize: "30px" }}>
              This project was developed to simplify daily work routines. The
              software automates the allocation of orders to up to four
              different production lines.
            </span>
            <span style={{ fontSize: "25px" }}>
              This saves time and resources, prevents bottlenecks, and minimizes
              errors in order assignment. It also allows for adaptation to
              changing production conditions. Overall, this project
              significantly improves work processes and enhances workplace
              productivity.
            </span>
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
            <h2>
              This project was developed to simplify daily work routines. The
              software automates the allocation of orders to up to four
              different production lines.
            </h2>
            <h3>
              This saves time and resources, prevents bottlenecks, and minimizes
              errors in order assignment. It also allows for adaptation to
              changing production conditions. Overall, this project
              significantly improves work processes and enhances workplace
              productivity.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectMain;
