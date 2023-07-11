import MainButton from './MainButton';
import Screen from './Screen';
import SideButton from './SideButton';

function Calculator() {
  return (
    <>
      <Screen />
      <div className="grid grid-cols-4">
        <div className="col-span-3"><MainButton /></div>
        <div><SideButton /></div>
      </div>
    </>
  );
}

export default Calculator;
