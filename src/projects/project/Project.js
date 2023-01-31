
import style from './Project.module.scss';

function Project(props) {
  return (
    <div className = {style.project}>
      
      <div className = {style.icon}>
        <img src={props.img} style = {props.style}/>
      </div>

      <div className={style.projectInfo}>
          <h3 className={style.projectTitle}>{props.title}</h3>
          <span className={style.description}>{props.description}</span>
      </div>

      <button className={style.viewBut}>Смотреть</button>
          
    </div>
  );
}

export default Project;