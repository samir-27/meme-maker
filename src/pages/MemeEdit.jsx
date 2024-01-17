import React, { useEffect, useState, createRef } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Text from '../component/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const MemeEdit = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

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

  return (
    <div className=" flex flex-col items-center">
      <div className='mt-12'>
        {meme && (
          <div ref={memeRef} className='w-full h-128 m-12 border-2 border-gray-6'>
            <img className='w-full h-full object-contain' src={meme.url} alt={meme.name} />
            {Array(count).fill(0).map((e, index) => <Text key={index} />)}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
        <button
          onClick={addText}
          className="bg-gray-600 px-4 py-2 rounded text-lg text-white m-2"
        >
          Add Text
        </button>
        <button
          onClick={() => {
            exportComponentAsJPEG(memeRef);
          }}
          className="bg-gray-600 px-4 py-2 rounded text-lg text-white m-2"
        >
          Download
        </button>
      </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default MemeEdit;
