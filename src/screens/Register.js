import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { setError, removeError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';


const Register = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(setError('Nombre es requerido'))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Correo no es valido'))
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password debe tener al menos 6 caracteres'))
      return false
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-sm m-auto shadow-md">
        <h1 className="text-center text-2xl text-black font light">Registrarse</h1>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow.md px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
              {
                msgError &&
                (
                  <div className="">
                    { msgError}
                  </div>
                )
              }
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Nombre
              </label>
                <input
                  className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Ingrese nombre"
                  name="name"
                  autoComplete="off"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
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
                  name="password"
                  value={password}
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
                  placeholder="Confirmar Password"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 rounded w-full mt-5 p-2 text-white capitalize hover:cursor-pointer"
                  value="Registrarse"
                />
              </div>
              <Link
                to="/auth/login"
                className="text-gray-700 text-xs underline"
              >
                Iniciar Sesión
            </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;