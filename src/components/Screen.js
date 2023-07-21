import PropTypes from 'prop-types';

Text.propTypes = {
  show: PropTypes.node.isRequired,
};
function Screen({ show }) {
  return (
    <div className="bg-slate-500 h-48 flex flex-col justify-center">
      <h1 className="text-6xl self-end text-white">{show.next || show.total}</h1>
    </div>
  );
}

export default Screen;
