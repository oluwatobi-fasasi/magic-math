function Mainbutton() {
  return (
    <div className="bg-stone-200 divide-gray-300 divide-y-2">
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10">AC</button>
        <button type="button" className="px-4 py-10">+/-</button>
        <button type="button" className="px-4 py-10">%</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10">7</button>
        <button type="button" className="px-4 py-10">8</button>
        <button type="button" className="px-4 py-10">9</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10">4</button>
        <button type="button" className="px-4 py-10">5</button>
        <button type="button" className="px-4 py-10">6</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="px-4 py-10">1</button>
        <button type="button" className="px-4 py-10">2</button>
        <button type="button" className="px-4 py-10">3</button>
      </div>
      <div className="grid grid-cols-3 text-center divide-x-2 divide-gray-300">
        <button type="button" className="col-span-2 px-4 py-10">0</button>
        <button type="button" className="px-4 py-10">.</button>
      </div>
    </div>
  );
}

export default Mainbutton;
