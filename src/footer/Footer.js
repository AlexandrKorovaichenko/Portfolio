
import styleContainer from '../common/styles/Container.module.css';
import style from './Footer.module.css';

function Footer(){

    return(

        <div className = {style.footerBlock}>

             <div className = {`${styleContainer.container} ${style.footerContainer}`} >
                <h3>Коровайченко Алексндр</h3>
                <div className = {style.socialBlock}>
                    <div className = {style.socialIcons}></div>
                    <div className = {style.socialIcons}></div>
                    <div className = {style.socialIcons}></div>
                    <div className = {style.socialIcons}></div>
                </div>
                <div className = {style.police}>
                    <span><strong>2022</strong>Все права защищены</span>
                </div>
            
            </div>

        </div>

    );

}

export default Footer;