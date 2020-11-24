import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from '../actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  }

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-sm m-auto shadow-md">
        <h1 className="text-center text-2xl text-black font light">Iniciar Sesión</h1>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
              </label>
            <input
              className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Ingrese email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
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
              placeholder="Ingrese password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 rounded w-full mt-5 p-2 text-white capitalize hover:cursor-pointer"
              value="Iniciar Sesión"
            />
          </div>
          <Link
            to="/auth/register"
            className="text-gray-700 text-xs underline"
          >
            Registrarse
            </Link>
        </form>
        <div className="mb-4">
          <h1 className="text-center text-gray-700 text-xs">o iniciar sesión en un clic</h1>
          <div className="px-8 pt-6 pb-8 mb-4 md:flex md:space-x-4">
            <button
              className="sm:block md:inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-500 rounded w-full mt-5 p-2 capitalize hover:cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <span className="text-white font-semibold">Google</span>
            </button>
            <button
              className="sm:block md:inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-500 rounded w-full mt-5 p-2 capitalize hover:cursor-pointer"
              onClick={handleFacebookLogin}
            >
              <span className="text-white font-semibold">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;