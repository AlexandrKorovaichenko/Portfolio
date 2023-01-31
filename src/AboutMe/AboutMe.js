
import style from './AboutMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import samuraiImg from './../assets/image/samurai2.jpg'

function AboutMe() {
  
  return (

    <div className = {style.aboutMe}>

        <div className = {styleContainer.container}>
          
          <div className = {style.text}>
            <span>Hi There!</span>
            <h1>I am Alexandr Korovaichenko</h1>
            <p>junior frontend developer</p>
          </div>

          <div className = {style.photo}>
            <img src = {samuraiImg}/>
          </div>

        </div>



    </div>
  );
}

export default AboutMe;
