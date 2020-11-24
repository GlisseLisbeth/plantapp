import React from 'react';

const Login = () => {
  return (
    <div className="bg-red-300">
      <h1 className="textCenter text-2xl text-black font light">Login</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form className="bg-white rounded shadow.md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Usuario"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password Usuario"
              />
              <input
                type="submit"
                className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 rounded w-full mt-5 p-2 text-white capitalize hover:cursor-pointer"
                value="Iniciar Sesión"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;