import FirstProject from "./myProjects/firstProject.component";
import SecondProject from "./myProjects/secondProject.component";
const ProjectMain = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <SecondProject />
      <FirstProject />
    </div>
  );
};

export default ProjectMain;
