import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="flex justify-between my-6 mx-60">
        <h1 className="text-6xl">Math Magicians</h1>
        <nav className="flex justify-evenly divide-x-4 divide-gray-700 text-2xl text-blue-500 underline">
          <Link to="/" className="p-4">Home</Link>
          <Link to="calculator" className="p-4">Calculator</Link>
          <Link to="quotes" className="p-4">Quote</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
