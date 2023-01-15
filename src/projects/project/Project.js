
import style from './Project.module.css';

function Project(props) {
  return (
    <div className = {style.project}>
      
      <div className = {style.icon}></div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
      <button>Смотреть</button>

    </div>
  );
}

export default Project;