import "./project.styles.css";
import { useMediaQuery } from "react-responsive";

const ProjectTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="titleDesktop">
          <span>Projects</span>
        </div>
      )}
      {isMobile && (
        <div className="titleMobile">
          <span>Projects</span>
        </div>
      )}
    </div>
  );
};

export default ProjectTitle;
