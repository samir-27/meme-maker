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
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="mt-12 w-full max-w-screen-lg">
        {meme && (
          <>
            <div ref={memeRef} className="w-full px-5 mt-8 sm:mt-12">
              <img
                className="lg:max-w-128 md:w-128 max-h-128 w-auto h-auto object-contain mx-auto border-2 border-gray-600 mb-4"
                src={meme.url}
                alt={meme.name}
              />
              {Array(count).fill(0).map((e, index) => (
                <Text key={index} />
              ))}
            </div>
            <div className="sm:flex sm:flex-col sm:items-center sm:space-y-2 sm:mt-4">
              <div className="sm:flex flex-row sm:justify-center sm:items-center sm:space-y-0 flex flex-col">
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

          </>
        )}
      </div>
    </div>
  );
};

export default MemeEdit;
