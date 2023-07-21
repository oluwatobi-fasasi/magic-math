import PropTypes from 'prop-types';

Text.propTypes = {
  buttonClickHandler: PropTypes.node.isRequired,
};
function Mainbutton({ buttonClickHandler }) {
  return (
    <div className="bg-stone-200 divide-gray-300 divide-y-2">
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('AC'); }}>AC</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('+/-'); }}>+/-</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('%'); }}>%</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('7'); }}>7</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('8'); }}>8</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('9'); }}>9</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('4'); }}>4</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('5'); }}>5</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('6'); }}>6</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('1'); }}>1</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('2'); }}>2</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('3'); }}>3</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="col-span-2 px-4 py-10" onClick={() => { buttonClickHandler('0'); }}>0</button>
        <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('.'); }}>.</button>
      </div>
    </div>
  );
}

export default Mainbutton;
