import React from 'react';
import Sidebar from '../components/administration/Sidebar';
import NothingSelected from '../components/administration/NothingSelected';
import Plant from '../components/plant/Plant';
import Entries from '../components/administration/Entries';
import { useSelector } from 'react-redux';
const Administration = () => {

  const { active } = useSelector( state => state.plants) ;

  return (
    <div className="flex flex-col md:flex-row relative">
      <Sidebar/>
      <main className="md:w-4/6 w-full">
        <div class="md:block md:bg-white bg-green-300">
          {(active)
            ? (<Plant />)
            : (<NothingSelected />)
          }
        </div>
        <div class="md:hidden p-5">
          <h1 class="font-bold">List Plants</h1>
          <Entries/>
        </div>
      </main>
    </div>
  );
}

export default Administration;