function SideButton() {
  return (
    <div className="bg-orange-400 divide-gray-300 divide-y-2 text-center flex flex-col">
      <button type="button" className="px-4 py-10">&#247;</button>
      <button type="button" className="px-4 py-10">&#215;</button>
      <button type="button" className="px-4 py-10">&#8722;</button>
      <button type="button" className="px-4 py-10">&#43;</button>
      <button type="button" className="px-4 py-10">&#61;</button>
    </div>
  );
}

export default SideButton;
