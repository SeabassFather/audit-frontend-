import React from 'react';

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h2 className="text-2xl mb-4 text-center font-semibold">Admin Login</h2>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4" type="text" placeholder="Username" />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-6" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
