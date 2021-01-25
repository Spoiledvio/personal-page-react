import './Skills.scss';
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import scss from "../Images/scss.png"
import react from "../Images/react.png"
import ts from "../Images/ts.png"

function Skills() {
  return (
    <div className="block_myskills">
      <div className="text_skills">
        <h1>My Skills</h1>
      </div>
      <div className="block_skills">
        <div className="image_block">
          <img src={html} alt="html"/>
        </div>
        <div className="image_block">
          <img src={react} alt="react"/>
        </div>
        <div className="image_block">
          <img src={css} alt="css"/>
        </div>
        <div className="image_block">
          <img src={js} alt="js"/>
        </div>
        <div className="image_block">
          <img src={scss} alt="scss"/>
        </div>
        <div className="image_block">
          <img src={ts} alt="ts"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
