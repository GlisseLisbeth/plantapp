import React from 'react';
import Sidebar from '../components/administration/Sidebar';
import NothingSelected from '../components/administration/NothingSelected';
import Plant from '../components/plant/Plant';
import { useSelector } from 'react-redux';

const Administration = () => {

  const { active } = useSelector(state => state.plants);

  return (
    <div className="flex">
      <Sidebar/>
      <main className="w-4/5">
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