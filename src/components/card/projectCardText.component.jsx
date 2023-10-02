const ProjectCardText = ({
  stylesTF1,
  stylesTF2,
  classes,
  textField1,
  textField2,
}) => {
  return (
    <div>
      <div className={classes}>
        <span style={stylesTF1}>{textField1}</span>
        <br />
        <span style={stylesTF2}>{textField2}</span>
      </div>
    </div>
  );
};

export default ProjectCardText;
