import React, { useState } from 'react';
import MainButton from './MainButton';
import Screen from './Screen';
import SideButton from './SideButton';
import calculate from '../logic/calculate';

function Calculator() {
  const [displayData, setDisplayData] = useState(
    {
      total: 0,
      next: null,
      operation: null,
    },
  );

  const screenData = (buttonClick) => {
    const newValue = calculate(displayData, buttonClick);
    setDisplayData(newValue);
  };
  return (
    <>
      <Screen show={displayData} />
      <div className="grid grid-cols-4">
        <div className="col-span-3"><MainButton buttonClickHandler={screenData} /></div>
        <SideButton buttonClickHandler={screenData} />
      </div>
    </>
  );
}

export default Calculator;
