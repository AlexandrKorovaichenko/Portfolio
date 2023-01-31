
import styleContainer from '../common/styles/Container.module.scss';
import style from './Contacts.module.scss';

function Contacts() {
  return (

    <div className = {style.contactsBlock}>

        <div className = {`${styleContainer.container} ${style.contactsContainer}`} >

          <h3>Контакты</h3>
          <form name="contacts">
            <input type="text" />
            <input type="text" />
            <textarea rows="4"/>
            <button>Отправить</button>
          </form>
        </div>

    </div>

  );
}

export default Contacts;
