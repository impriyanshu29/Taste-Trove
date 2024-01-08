import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../Context/SearchContext";
import { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function Receipe_Item() {
  const { id } = useParams();
  const { receipeDetail, setRecipeDetail,handleFavourite } = useContext(UserContext);
  console.log(id);

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(
        ` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();

      if (data?.data) {
        setRecipeDetail(data?.data);
      }
      console.log(receipeDetail);
    }
    getDetails();
  }, []);

  const convertToUpperCase = (data) => {
    return data
      ?.split(" ")
      .map((item) => item?.charAt(0).toUpperCase() + item?.slice(1))
      .join(" ");
  };

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6  md:space-y-0 md:flex md:gap-4 lg:items-center lg:gap-12">
          <div className="md:5/12 m-auto align-middle lg:w-5/12 object-cover ">
            <img
              className="rounded-2xl   p-auto w-11/12 h-auto "
              src={receipeDetail?.recipe?.image_url}
            />
          </div>
          <div className="md:7/12  m-auto lg:w-6/12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {convertToUpperCase(receipeDetail?.recipe?.title)}
              </h2>
              <p className="ml-1 mt-1 text-sm text-gray-800">
                By:- {receipeDetail?.recipe?.publisher}
              </p>
            </div>

            <div>
              <h2 className="mt-5 ml-1 text-xl">
                <span>
                  <strong>Ingredients :-</strong>
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {receipeDetail?.recipe?.ingredients?.map((item, index) => (
                    <div key={index}>
                      <span>
                        {" "}
                        {/* The dot (.) adds separation between the number and the ingredient details */}
                        {index + 1} ) {item.quantity} {item.unit}{" "}
                        {item.description}{" "}
                      </span>
                    </div>
                  ))}
                </div>
              </h2>
              <div className="mt-4 ml-1 text-blue-600 font-light text-lg ">
                <span >
                  <strong>
                    <a
                      href={receipeDetail?.recipe?.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Instructions{" "}
                    </a>
                  </strong>
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 justify-center lg:w-40 rounded-lg bg-orange-700 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <button onClick={()=>handleFavourite(receipeDetail?.recipe)} type="button" className=" ">
                Favourite
              </button>{" "}
              <FavoriteBorderIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipe_Item;
