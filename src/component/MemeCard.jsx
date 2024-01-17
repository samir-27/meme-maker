import React from 'react';
import { useNavigate } from 'react-router';

const MemeCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/edit/${data.id}`)}>
      <div className='mx-auto border-4 border-gray-600 p-2 rounded-lg shadow-2xl bg-white hover:scale-110 transition-transform duration-300 cursor-pointer'>
        <img className='object-contain w-96 lg:h-96 md:h-56 sm:h-56' key={data.id} src={data.url} alt={data.name} />
        <h1 className='text-center lg:text-2xl md:text-xl sm:text-lg text-gray-600 font-semibold font-serif'>{data.name}</h1>
      </div>
    </div>
  );
}

export default MemeCard;