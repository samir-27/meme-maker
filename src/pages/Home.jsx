import React, { useEffect, useState } from 'react';
import img1 from '../assets/funny.webp';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router';

const Jokes = () => {
    const [jokes, setJokes] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
            setJokes(response.data);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };
    const handleMemeCLick = () => {
        navigate('/memes')
    }

    const handleImageClick = () => {
        fetchData();
    };

    return (
        <div className='bg-gray-900 h-screen'>
            <div className="grid grid-cols-2 gap-4">
                <div className='mt-20 flex flex-col justify-center items-center'>
                    <img onClick={handleImageClick} className='h-128 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer' src={img1} alt="" />
                </div>
                <div className='text-white flex flex-col justify-center h-90vh mt-20'>
                    <div>
                        {jokes && (
                            <div>
                                <h1 className='text-4xl'>{jokes.type === 'twopart' ? jokes.setup : jokes.joke}</h1>
                                {jokes.type === 'twopart' && <h2 className='text-4xl text-yellow-300'>{jokes.delivery}</h2>}
                            </div>
                        )}
                    </div>
                    <p className='my-6'>click on emoji for next joke</p>
                    <button onClick={handleMemeCLick} className='mt-4 w-56 bg-white hover:bg-yellow-500 font-bold p-3 rounded-lg text-gray-600 hover:text-white'>Let's Create Meme</button>
                </div>
            </div>
        </div>
    );
};

export default Jokes;
