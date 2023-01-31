
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/Title';
import js from '../assets/image/js.png';
import react from '../assets/image/react.png';
import css from '../assets/image/css.png';

function Skills() {

  const jsImg = {
    backgroundImage: `url(${js})`
  };

  const reactImg = {
    backgroundImage: `url(${react})`
  };

  const cssImg = {
    backgroundImage: `url(${css})`
  };

  return (
    <div className = {style.skillsBlock}>
        <div className = {`${styleContainer.container} ${style.skillsContainer}`} >
          
            <Title title = {"My Skills"}/>

            <div className={style.skills}>
              <Skill title={"Js"}  style = {jsImg} description = {"use a button and change it with appropriate styles"} />
              <Skill title={"React"} style = {reactImg} description = {"use a button and change it with appropriate styles"} />
              <Skill title={"Css"} style = {cssImg} description = {"use a button and change it with appropriate styles"} />
            </div>

        </div>
    </div>
  );
}

export default Skills;