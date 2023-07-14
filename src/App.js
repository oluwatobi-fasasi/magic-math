import Calculator from './components/Calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <>
      <Calculator />
      <div className="bg-orange-300 p-7 text-center text-base">
        <Quotes />
      </div>
    </>
  );
}

export default App;
