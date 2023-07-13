import PropTypes from 'prop-types';

Text.propTypes = {
  buttonClickHandler: PropTypes.node.isRequired,
};
function SideButton({ buttonClickHandler }) {
  return (
    <div className="bg-orange-400 divide-gray-300 divide-y-2 text-center flex flex-col">
      <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('÷'); }}>&#247;</button>
      <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('x'); }}>&#215;</button>
      <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('-'); }}>&#8722;</button>
      <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('+'); }}>&#43;</button>
      <button type="button" className="px-4 py-10" onClick={() => { buttonClickHandler('='); }}>&#61;</button>
    </div>
  );
}

export default SideButton;
