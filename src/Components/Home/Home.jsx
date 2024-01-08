import React from "react";
import Home_Img from '../Images/home-img.jpg'
import { Link } from "react-router-dom";
import PublicIcon from '@mui/icons-material/Public';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
function Home() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-center sm:text-left text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Welcome to
              <span className="text-3xl font-bold tracking-tight text-orange-600 md:text-4xl lg:text-6xl">
                {" "}
                Taste Trove
              </span>
              - Your Culinary Adventure Begins Here! 🍽️✨
            </h1>

            <h1 className="mt-10 text-xl text-center sm:text-left tracking-tight text-black md:text-2xl lg:text-3xl">
              Discover a World of Delightful Recipes
            </h1>
            <p className="mt-6 text-center sm:text-left text-base text-gray-700">
              Are you ready to embark on culinary journey filled with
              mouthwatering recipes & delightful culinary experiences? Look no
              further than Taste Trove, your go-to destination for a diverse
              collection of recipes that cater to all tastes & skill levels.
            </p>
            <div className="flex gap-8 justify-center sm:justify-start">
            <Link
              to="/about"
                >
              <div className="mt-12 flex gap-4 justify-center lg:w-40 rounded-lg bg-black px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <button  type="button" className=" ">
                About-Us
              </button>{" "}
              
            </div>
            </Link>
            <Link
              to="/favourite"
                >
              <div className="mt-12 flex gap-4 justify-center lg:w-40 rounded-lg bg-orange-700 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <button  type="button" className=" ">
                Favourite
              </button>{" "}
              
            </div>
            </Link>
            </div>
            
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover border rounded-xl lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={Home_Img}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
      <h1 className="text-xl text-center mb-16 font-bold tracking-tight text-black md:text-2xl lg:text-3xl">
            What We 
            <span className="text-xl font-bold tracking-tight text-orange-600 md:text-2xl lg:text-3xl">
              {" "} Offer 
            </span>
              </h1>
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          
          <div>
            
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-9 w-9 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <PublicIcon/>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
            Extensive Recipe Collection
            </h3>
            <p className="mt-4 text-sm text-gray-600">
            Dive into a vast array of recipes spanning various cuisines, skill levels, and dietary preferences. Whether you're a seasoned chef or a cooking novice, we have something special for everyone. </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <ReceiptLongIcon/>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
            Detailed Ingredient Lists
            </h3>
            <p className="mt-4 text-sm text-gray-600">
            Each recipe comes with a detailed list of ingredients, making it easy for you to gather what you need. No more guessing – our recipes provide clarity and simplicity.

          </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <FoodBankIcon/>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
            Cooking Made Simple
            </h3>
            <p className="mt-4 text-sm text-gray-600">
            Follow step-by-step instructions that simplify the cooking process, ensuring your dishes turn out perfect every time. Our user-friendly platform makes it easy for anyone to whip up delicious meals.

          </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <MobileFriendlyIcon/>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
            User-Friendly Interface
            </h3>
            <p className="mt-4 text-sm text-gray-600">
            Enjoy a seamless and enjoyable experience with our user-friendly platform. Navigate effortlessly through our extensive recipe collection and find inspiration for your next culinary masterpiece.

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
