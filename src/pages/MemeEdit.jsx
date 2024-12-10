import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Text from '../component/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const MemeEdit = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [count, setCount] = useState(0);

  const memeRef = useRef();

  useEffect(() => {
    const apiUrl = `https://api.imgflip.com/get_memes`;
    axios
      .get(apiUrl)
      .then((response) => {
        const meme = response.data.data.memes.find((meme) => meme.id === id);
        setMeme(meme);
      })
      .catch((error) => {
        console.error('Error fetching meme:', error);
      });
  }, [id]);

  const addText = () => {
    setCount(count + 1);
  };

  const handleDownload = () => {
    exportComponentAsJPEG(memeRef);
  };

  return (
    <div className="flex flex-col items-center max-w-screen mt-12">
      {meme && (
        <div ref={memeRef} className='lg:h-128 md:h-128 sm:h-96 h-80 m-12 border-2 border-gray-6'>
          <img className='w-full h-full object-contain' src={meme.url} alt={meme.name} />
          {Array(count).fill(0).map((_, index) => <Text key={index} />)}
          <div className="flex flex-col items-center space-y-2 sm:space-y-0">
            <button
              onClick={addText}
              className="bg-gray-600 px-4 py-2 rounded text-lg text-white m-2"
            >
              Add Text
            </button>
            <button
              onClick={handleDownload}
              className="bg-gray-600 px-4 py-2 rounded text-lg text-white m-2"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeEdit;
