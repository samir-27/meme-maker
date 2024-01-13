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
    <div className='bg-gray-100'>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12">
        {memes.map((data) => (
          <MemeCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Memes;
