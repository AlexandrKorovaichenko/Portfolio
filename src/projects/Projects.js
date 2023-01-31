
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Project from './project/Project';
import Title from '../common/components/Title';
import todoImage from './../assets/image/todo.jpg'
import reactImage from './../assets/image/react.jpg'

function Projects() {

  // const reactImg = {
  //   backgroundImage: `url(${todoImage})`
  // };

  // const todoListsImg = {
  //   backgroundImage: `url(${reactImage})`,
  // };

  return (

    <div className = {style.projectsBlock}>

        <div className = {`${styleContainer.container} ${style.projectsContainer}`} >

            <Title title = {"Projects"}/>

            <div className={style.projects}>

              {/* <Project style = {reactImg} img = {todoImage} title = {"ToDo List"}  description = {"use a button and change it with appropriate styles"} />
              <Project style = {todoListsImg} img = {reactImage}  title = {"Social "} description = {"use a button and change it with appropriate styles"} /> */}

              <Project img = {todoImage} title = {"ToDo List"}  description = {"use a button and change it with appropriate styles"} />
              <Project img = {reactImage}  title = {"Social Network"} description = {"use a button and change it with appropriate styles"} />

            </div>
        </div>

    </div>

  );
}

export default Projects;
