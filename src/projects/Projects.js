
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';

function Projects() {
  return (

    <div className = {style.projectsBlock}>

        <div className = {`${styleContainer.container} ${style.projectsContainer}`} >
            <h2 className={style.title}>Projects</h2>
            <div className={style.projects}>
              <Project title = {"ToDo List"}    description = {"use a button and change it with appropriate styles"} />
              <Project title = {"React"} description = {"use a button and change it with appropriate styles"} />
            </div>
        </div>

    </div>

  );
}

export default Projects;