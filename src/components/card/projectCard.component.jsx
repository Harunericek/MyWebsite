const ProjectCard = (props) => {
  return (
    <div>
      <div id={props.id} className={props.containerClass}>
        <img src={props.ImgSrc} alt={props.alt} className={props.imgClass} />
      </div>
    </div>
  );
};

export default ProjectCard;
