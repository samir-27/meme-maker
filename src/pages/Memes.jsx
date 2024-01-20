import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemeCard from '../component/MemeCard';

const Memes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then((response) => {
        setMemes(response.data.data.memes);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  }, []);

  return (
    <div className='bg-gray-100 mt-12'>
      <div className="container py-24 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12">
        {memes.map((data) => (
          <MemeCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Memes;
