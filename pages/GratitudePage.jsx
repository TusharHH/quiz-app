import React from "react";
import { Link } from 'react-router-dom';
import "./GratitudePage.css";
import MessageCard from "../components/MessageCard";

class GratitudePage extends React.Component {
    render() {
        return (
            <>
                <div className="w-full h-[100vh] bg-yellow-300 flex items-center justify-center p-5 ">
                    {/* blue container */}
                    <div className='bg-sky-300 h-full w-full flex items-center justify-center border-4 border-black rounded-3xl p-5'>
                        {/* second yellow container  */}
                        <div className='bg-yellow-300 border-black border-4 h-full w-full rounded-3xl p-5'>
                            {/* content container  */}
                            < div className=' bg-white h-full flex flex-col border-black  border-4 rounded-3xl overflow-y-scroll items-center'>
                                {/* nav container  */}
                                <ul className="flex gap-10 my-12">
                                    <li className="text-xl font-bold bg-yellow-200 px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-lg duration-300 cursor-pointer">Gratitude Wall</li>
                                    <Link to="/Quiz">
                                        <li className="text-xl font-bold bg-gray-200 px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-lg duration-300 cursor-pointer">Quiz</li>
                                    </Link>
                                </ul>

                                <MessageCard
                                    name="Tushar"
                                    msg="Thank you for making the lectures worth attending ma'am, thank you for every advice!"
                                />
                                <MessageCard
                                    name="Sirishti"
                                    msg="Thank you for always teaching us gracefully and with patience. ❤️"
                                />
                                <MessageCard
                                    name="Shradha"
                                    msg={`Welcoming us in the first year,
To be saying goodbyes in the last,
The journey has been nothing short of a rollercoaster ride.
From the first programming language to the final line of code,
Your patience and guidance were our constant guide,
Transforming our confusion into moments of pride,
You were always by our side.
We never imagined that saying goodbye
Would weigh so heavily on our hearts,
But with a teacher like you, it's no surprise,
Gratitude runs deep in our hearts
For a mentor like you.
There may be more students in your life
But we will always remain the favourite for you.
Wishing you a very happy Teacher's Day ma'am!
`}
                                />
                                <MessageCard
                                    name="Ronak"
                                    msg="I want to take a moment to express my deepest gratitude for being a constant source of guidance and support throughout my three years in college.
                                From the first year, when you introduced us to C Programming, to the second year with ASP.NET, and finally in the third year where you walked us through the complexities of MERN, you made each subject not only easy to understand but also engaging.
                            Your way of teaching was so clear and thorough that we never needed to refer to external material—you gave us everything we needed to excel.
                            What truly sets you apart is your humble, caring, and patient nature. No other mentor compares to you.
                            You always made time for our doubts, no matter how small, and encouraged us to push our limits with kindness.
                            Your dedication to our growth has been truly remarkable.
                            Thank you for being not just an excellent teacher, but a mentor in the truest sense of the word.
                            You have shaped our academic journey and career paths in ways we will forever be grateful for."
                                />
                                <MessageCard
                                    name="Daniela"
                                    msg="Dear Kirti Ma’am,
                                I wanted to take a moment to express my gratitude for your dedication and passion in teaching and building our base in coding.
                                Your ability to make complex concepts understandable and engaging has truly made a difference in my learning experience.
                                Thank you for your hard work and commitment towards our education."
                                />
                                <MessageCard
                                    name="Scott"
                                    msg="Thank you so much for the sheer amount of patience you have shown us throughout the years."
                                />
                                <MessageCard
                                    name="Aditya Sanap"
                                    msg="You're the #include <wisdom.h> we all need - Happy Teacher's Day!"
                                />
                                <MessageCard
                                    name="Dhruv"
                                    msg="You’re the main() function in the program of our education - Happy Teacher’s Day!"
                                />
                                <MessageCard
                                    name="Aniket"
                                    msg="Thank you for being the 'return 0' to all our doubts - Happy Teacher’s Day!"
                                />
                                <MessageCard
                                    name="Yash"
                                    msg="Thank you for all your help throughout these three years. You’re truly a React-ionary to our learning!"
                                />
                                <MessageCard
                                    name="Thanks"
                                    msg="Mustafa"
                                />
                                <MessageCard
                                    name="Noor"
                                    msg="For the past 2 years you have been the best teacher I could ask for, I have learned the most from you. Thank you so much."
                                />
                                <MessageCard
                                    name="Anjali"
                                    msg="I’ve had the privilege of learning from many teachers throughout my BCA journey, but you stand out as one of the most selfless. You challenge each of us to step out of our comfort zones and strive for excellence. Your genuine desire to see us succeed is truly admirable, and if that’s not the hallmark of a nurturing and motherly teacher, then I don’t know what is. Thank you for everything ma'am!"
                                />
                                <MessageCard
                                    name="Oishee"
                                    msg="Thank you for being such an amazing teacher to us for the past 2 years. We are really glad to have you as our mentor and thank you especially for being so patient with us. Happy teacher's day ma'am!"
                                />
                                <MessageCard
                                    name="Akshay"
                                    msg="From all the taunts and the great advice that I've received from you, I never once doubted your ability as a teacher and a mentor. I'm extremely grateful to have you as my mentor and will most definetly make you proud. ❤️"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default GratitudePage;
