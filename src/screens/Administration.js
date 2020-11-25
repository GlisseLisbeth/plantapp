import React from 'react';
import Sidebar from '../components/administration/Sidebar';
import NothingSelected from '../components/administration/NothingSelected';
import Plant from '../components/plant/Plant';
import { useSelector } from 'react-redux';

const Administration = () => {

  const { active } = useSelector( state => state.plants) ;
  console.log("Active:" + active);
  return (
    <div className="flex flex-col md:flex-row relative">
      <Sidebar/>
      <main className="md:w-4/6 w-full">
        {
          (active)
            ? (<Plant />)
            : (<NothingSelected />)
        }
      </main>
    </div>
  );
}

export default Administration;