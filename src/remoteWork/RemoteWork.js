
import styleContainer from '../common/styles/Container.module.css';
import style from './RemoteWork.module.css';

function RemoteWork() {
  return (
    <div className = {style.remoteWork}>
        
        <div className = {style.containerRemoteWork}>
          <h2>Рассматриваю удаленную работу</h2>
          <button>Предложить</button>
        </div>

    </div>
  );
}

export default RemoteWork;
