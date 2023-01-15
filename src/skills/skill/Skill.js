
import style from './Skill.module.css';
import styleContainer from '../../common/styles/Container.module.css';

function Skill(props) {
  return (
    <div className = {style.skill}>
      <div className = {style.icon}></div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}

export default Skill;