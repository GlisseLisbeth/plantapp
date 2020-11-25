import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activePlant, startDeleting, startUploading, startSavePlant } from '../../actions/plants';

const Plant = () => {

  const dispatch = useDispatch();
  const { active:plant } = useSelector(state => state.plants);
  
  const [formValues, handleInputChange, reset] = useForm(plant);
  const { description, name, id } = formValues;

  const activeId = useRef(plant.id);

  useEffect(() => {

    if (plant.id !== activeId.current) {
      reset(plant);
      activeId.current = plant.id
    }

  }, [plant, reset])

  useEffect(() => {

    dispatch(activePlant(formValues.id, { ...formValues }));

  }, [formValues, dispatch])

  const handlePictureClick = () => {
      document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  }

  const handleDelete = () => {
    dispatch(startDeleting(id));
  }

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(startSavePlant(plant));
  }

  return (
    <div className="flex md:h-screen h-auto md:w-full w-4/5 m-auto flex-col">

      <div className="flex justify-end  bg-green-300 text-gray-700 px-2 py-4">

        <div className="space-x-4">
          <button
            className="btn shadow-inner bg-green-900 text-white px-4 py-2 mx-0 mb-2 outline-none focus:shadow-outline"
            onClick={handleSave}
          >
            Guardar
                </button>
        </div>
      </div>

      <div className="flex flex-col md:h-full p-4 relative">

        <input
          type="text"
          placeholder="Ingrese nombre de la planta"
          className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:pl-0 pl-2"
          autoComplete="off"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Ingrese descripción de la planta"
          className="appearance-none border-0 border-b rounded-none border-gray-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:pl-0 pl-2"
          name="description"
          value={description}
          onChange={handleInputChange}
        ></textarea>
        <div className="md:mt-8 mt-20">
          <input
            id="fileSelector"
            type="file"
            name="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            className="btn shadow-inner bg-green-900 text-white px-4 py-2 mx-0 mb-2 outline-none focus:shadow-outline"
            onClick={handlePictureClick}
          >
            Cargar Imagen
                    </button>
        </div>
        {
          (plant.url)
          && (
            <div className="absolute bottom-0 md:w-96 w-42">
              <img
                className="shadow"
                src={plant.url}
                alt="imagen"
              />
            </div>
          )
        }


      </div>
      <button
        className="btn shadow-inner bg-red-400 text-white px-4 py-2 m-4 mb-2 outline-none focus:shadow-outline"
        onClick={handleDelete}
      >
        Eliminar
            </button>

    </div>
  )
}

export default Plant;