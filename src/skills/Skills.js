
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

function Skills() {
  return (
    <div className = {style.skillsBlock}>
        <div className = {`${styleContainer.container} ${style.skillsContainer}`} >
            
            <h2 className={style.title}>Skills</h2>
            
            <div className={style.skills}>
              <Skill title={"Js"}    description = {"use a button and change it with appropriate styles"} />
              <Skill title={"React"} description = {"use a button and change it with appropriate styles"} />
              <Skill title={"Css"}   description = {"use a button and change it with appropriate styles"} />
            </div>

        </div>
    </div>
  );
}

export default Skills;