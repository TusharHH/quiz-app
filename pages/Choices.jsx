import gratImg from '../media/gratitude wall.png'
import quizImg from '../media/quiz3.jpg'

import { Link } from'react-router-dom'

import './LandingPage.css'

function Choice() {

    return (
        <>
            {/* global-container */}
            <div className="w-full h-[100vh] bg-yellow-300 flex items-center justify-center p-5">
                {/* blue container */}
                <div className='bg-sky-300 h-full w-full flex items-center justify-center border-4 border-black rounded-3xl p-5'>
                    {/* second yellow container  */}
                    <div className='bg-yellow-300 border-black border-4 h-full w-full rounded-3xl p-5'>
                        {/* content container  */}
                        <div className=' bg-white h-full w-full border-black  border-4 rounded-3xl flex justify-center items-center'>
                            <div className='heading flex flex-col items-center gap-16'>
                                <h1 className='text-4xl font-bold '>Choose Activity</h1>
                                {/* choices-container */}
                                <div className="container mx-20 flex flex-row gap-20 justify-center">
                                    {/* Gratitude Wall */}
                                    <Link to='/wall'>
                                    <div className="bg-sky-200 text-black px-8 py-10 rounded-xl shadow-xl hover:scale-105 duration-150 hover:shadow-2xl cursor-pointer space-y-5 w-[500px]" >
                                        <img src={gratImg} alt="" className='w-full' />
                                        <h1 className="text-4xl font-bold">Gratitude Wall</h1>
                                        <p className="text-2xl">Heartfelt messages from the students of TYBCA 2024 to you.</p>
                                    </div>
                                    </Link>
                                    <Link to='/Quiz'>
                                        <div className="bg-yellow-200 text-black px-8 py-10 rounded-xl shadow-xl hover:scale-105 duration-150 hover:shadow-2xl cursor-pointer space-y-5 w-[500px]">
                                            <img src={quizImg} alt="" className='w-full' />
                                            <h1 className="text-4xl font-bold">Quiz</h1>
                                            <p className="text-2xl">Some fun activites to lighten the mood.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choice;