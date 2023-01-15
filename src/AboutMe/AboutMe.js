
import styleContainer from '../common/styles/Container.module.css';
import style from './AboutMe.module.css';

function AboutMe() {
  return (
    <div className = {style.aboutMe}>

        <div className = {styleContainer.container}>
          
          <div className = {style.text}>
            <span>Hi There</span>
            <h1>I am Alexandr Korovaichenko</h1>
            <p>frontend developer</p>
          </div>

          <div className = {style.photo}>

          </div>

        </div>



    </div>
  );
}

export default AboutMe;
