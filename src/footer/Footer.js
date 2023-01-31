
import styleContainer from '../common/styles/Container.module.scss';
import style from './Footer.module.scss';

function Footer(){

    return(

        <div className = {style.footerBlock}>

             <div className = {`${styleContainer.container} ${style.footerContainer}`} >
                <div className = {style.socialBlock}>
                    <div className = {style.socialIcons}></div>
                    <div className = {style.socialIcons}></div>
                    <div className = {style.socialIcons}></div>
                </div>
                <h3>Коровайченко Алексндр</h3>
                <div className = {style.police}>
                    <span><strong>2022 </strong>Все права защищены</span>
                </div>
            
            </div>

        </div>

    );

}

export default Footer;