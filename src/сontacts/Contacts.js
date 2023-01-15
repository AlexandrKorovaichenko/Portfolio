
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.css';

function Contacts() {
  return (

    <div className = {style.contactsBlock}>

        <div className = {`${styleContainer.container} ${style.contactsContainer}`} >

          <h3>Контакты</h3>
          <form name="contacts">
            <input type="text" />
            <input type="text" />
            <textarea />
            <button>Отправить</button>
          </form>
        </div>

    </div>

  );
}

export default Contacts;
