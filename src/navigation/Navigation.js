import style from './Navigation.module.css';

function Navigation() {
  return (
    <div className = {style.navigation}>
      <a href="">Главная</a>
      <a href="">Скиллы</a>
      <a href="">Проекты</a>
      <a href="">Контакты</a>
    </div>
  );
}

export default Navigation;
