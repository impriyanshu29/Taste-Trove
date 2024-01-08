import React from 'react'
import '../Custome_Color/Color.css'
import cooking from '../Images/IMG-cooking-1.jpg'
function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-20">
                    <div className="md:w-2/5  lg:w-4/12  ">
                        <img className='rounded-2xl' src={cooking}></img>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-orange-600  font-bold md:text-4xl">
                            Explore Culinary Delights with Taste Trove ...
                        </h2>
                        <p className="mt-6 text-gray-800">
                          Welcome to Taste Trove, your go-to destination for a culinary journey filled with delightful recipes and flavorful experiences. Our platform is a treasure trove of diverse recipes curated for food enthusiasts like you. From mouthwatering main courses to delectable desserts, discover a world of gastronomic delights right at your fingertips.Following are key features of Taste Trove :-
                        </p>

                        <p className="mt-4 text-gray-600 ">   
                            <ul className='space-y-4  text-gray-800 list-decimal list-inside'>
                                    <li className='text-base '> <span className='text-black  font-semibold'> Extensive Recipe Collection : </span>
                                    Dive into a vast collection of recipes spanning various cuisines, skill levels, and dietary preferences.</li>
                                    <li className='text-base'> <span className='text-black  font-semibold'> Detailed Ingredient Lists : </span>
                                    Each recipe comes with a detailed list of ingredients, making it easy for you to gather what you need</li>

                                    <li className='text-base'> <span className='text-black  font-semibold'>User-Friendly Interface : </span>
                                    Our user-friendly platform ensures a seamless and enjoyable experience, whether you're a seasoned chef or a novice in the kitchen. </li>
                                
                            </ul>   
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About