import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-teal-500">Hein Thant Zaw</h1>
            <h1 className="text-3xl font-bold text-white">Dev & BA</h1>
            <p className="py-6">Junior Web Developer</p>
            {/* <div className=" mb-5 justify-items-center">
              <img
                src={
                  "https://freesvg.org/img/Gerald-G-Man-Face-5-World-Label-1.png"
                }
                alt=""
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              />
            </div> */}
            <Link to="/aboutMe">
              <button className="btn btn-outline btn-secondary">
                Journey Begin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
