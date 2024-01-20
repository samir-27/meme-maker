import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import img1 from '../assets/funny.webp';

const Jokes = () => {
  const [jokes, setJokes] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
      setJokes(response.data);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMemeClick = () => {
    navigate('/memes');
  };

  const handleImageClick = () => {
    fetchData();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-8 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img
            onClick={handleImageClick}
            className="cursor-pointer w-full md:w-128 h-auto"
            src={img1}
            alt=""
          />
        </div>
        <div className="text-white mt-8">
          {loading ? (
            <p>Loading...</p>
          ) : jokes ? (
            <div>
              <h1 className="text-3xl mb-4">
                {jokes.type === 'twopart' ? jokes.setup : jokes.joke}
              </h1>
              {jokes.type === 'twopart' && (
                <h2 className="text-3xl text-yellow-300 mb-6">
                  {jokes.delivery}
                </h2>
              )}
            </div>
          ) : (
            <p>Error loading joke.</p>
          )}
          <p className="text-gray-400 mb-6">Click on the image for the next joke</p>
          <button
            onClick={handleMemeClick}
            className="w-full bg-white hover:bg-yellow-500 text-gray-800 font-bold py-3 rounded-lg transition duration-300"
          >
            Let's Create Meme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
