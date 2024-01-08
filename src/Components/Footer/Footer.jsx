import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
             <p>
              <span className="text-2xl font-bold text-orange-700">Taste</span>
              { " "}
              <span className="text-2xl font-bold text-gray-800">Trove</span>
              </p> 
            </Link>
          </div>
          <div className="grid grid-cols-2  gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium ">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/favourite" className="hover:underline">
                    Favourite
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/iampriyanshu29"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iampriyanshu29/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {year} -
            <a href="https://www.linkedin.com/in/iampriyanshu29/" className="hover:underline">
              <span className="text-gray-900 font-medium hover:text-orange-700"> Priyanshu Tiwari </span>
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://www.facebook.com/iampriyanshu29" className="text-gray-500 hover:text-orange-700">
              <FacebookIcon/>
            </Link>
            <Link to="https://www.instagram.com/iampriyanshu29" className="text-gray-500 hover:text-orange-700">
                <InstagramIcon/>
            </Link>
            <Link to="https://www.linkedin.com/in/iampriyanshu29/" className="text-gray-500 hover:text-orange-700">
                <LinkedInIcon />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-orange-700">
             <GitHubIcon/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
