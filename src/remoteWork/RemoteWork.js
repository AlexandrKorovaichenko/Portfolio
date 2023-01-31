
import style from './RemoteWork.module.scss';

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
