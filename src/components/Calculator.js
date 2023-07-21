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
    <div className="grid grid-cols-2 ml-60 mt-28">
      <p className="text-4xl">
        Let
        {'\''}
        s do some math!
      </p>
      <div className="mr-60">
        <Screen show={displayData} />
        <div className="grid grid-cols-4">
          <div className="col-span-3"><MainButton buttonClickHandler={screenData} /></div>
          <SideButton buttonClickHandler={screenData} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
