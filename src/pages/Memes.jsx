import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {memes.map((data) => (
        <img key={data.id} src={data.url} alt={data.name} />
      ))}
    </div>
  );
};

export default Memes;
