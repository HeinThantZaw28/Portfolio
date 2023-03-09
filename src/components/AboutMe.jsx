import React from "react";
import NavFooter from "./NavFooter";

const AboutMe = () => {
  return (
    <>
      <NavFooter>
        <div className="container mx-auto mt-16">
          <div className="grid md:grid-cols-8 sm:grid-cols-12">
            <div className="md:col-span-1"></div>
            <div className="container mx-auto md:col-span-6 sm:col-span-full">
              <h1 className="text-3xl mb-2 text-white ml-2">About Me</h1>
              <div className="px-4 py-2">
                <img
                  src="https://tokyo-nextjs.vercel.app/img/slider/1.jpg"
                  alt=""
                  className="w-screen h-auto md:rounded-md"
                />

                <h1 className="text-2xl text-white">Hein Thant Zaw</h1>
                <h1 className="mb-2">Web Developer</h1>
                <hr />
              </div>

              <div className=" text-justify indent-5 mb-2 py-4 px-2">
                <p>
                  Hi, my name is Adriano Smith and I began using WordPress when
                  it first began. I’ve spent most of my waking hours for the
                  last ten years designing, programming and operating WordPress
                  sites.
                </p>
                <p>
                  One of my specialties is taking an idea from scratch and
                  creating a full-fledged platform. I go beyond to produce sites
                  with a unique, outstanding, contemporary look-and-feel. With
                  extensive knowledge of web mechanics, I’m able to optimize
                  complex integrations to require little-to-no maintenance while
                  running on their own for years.
                </p>
                <hr />
              </div>

              <div className=" text-sm md:grid md:grid-cols-12 mt-2 sm:block py-4 px-2">
                <div className="md:col-span-6 flex">
                  <div className="justify-between text-white mr-2">
                    <h1>Birthday :</h1>
                    <h1>Age :</h1>
                    <h1>Address :</h1>
                    <h1>Email :</h1>
                    <h1>Phone :</h1>
                  </div>
                  <div>
                    <h1>28.12.2000</h1>
                    <h1>22</h1>
                    <h2>ThiriMyaing 9th St, Hlaing Tsp, Yangon</h2>
                    <h1>heinthantzaw52@gmail.com</h1>
                    <h1>959 966 624 040</h1>
                  </div>
                </div>
                <div className="md:col-span-6 flex">
                  <div className="justify-between text-white">
                    <h1>Nationality :</h1>
                    <h1>Study :</h1>
                    <h1>Degree :</h1>
                    <h1>Interest :</h1>
                    <h1>Freelance :</h1>
                  </div>
                  <div>
                    <h1>Myanamr</h1>
                    <h1>Information Business Technology</h1>
                    <h1>BSC, Hons</h1>
                    <h1>Web Development</h1>
                    <h1>Available</h1>
                  </div>
                </div>
              </div>
              <div className="text-sm md:grid md:grid-cols-12 sm:block mt-2 bg-slate-900 rounded mx-1 py-4 px-2">
                <div className="md:col-span-6 mb-3">
                  <h1 className=" text-2xl text-white mb-2">
                    Programming Skills
                  </h1>
                  <div>
                    <label htmlFor="" className="text-white">
                      CSS
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-white">
                      PHP
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-white">
                      JavaScripts
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-white">
                      React-Js
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-white">
                      Tailwind_CSS
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[70%]"></div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h1 className=" text-2xl text-white mb-2">Other Skills</h1>
                  <div>
                    <label htmlFor="" className="text-white">
                      English
                    </label>
                    <div class=" w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm md:grid md:grid-cols-12 sm:block mt-2 rounded py-4 px-2 gap-x-4">
                <div className="md:col-span-6 border border-slate-700 rounded px-3 py-2 mb-3">
                  <h1 className="text-2xl text-white">Education</h1>
                  <div>
                    <h1 className="text-lg text-white">
                      Scottish Qualification Authority
                    </h1>
                    <div className="pl-2">
                      <p>Diploma In Computing</p>
                      <p>2018-2019</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg text-white">
                      University of Greenwich
                    </h1>
                    <div className="pl-2">
                      <p>Business Information Technology</p>
                      <p>2019-2020</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 border border-slate-700 rounded px-3 py-2 mb-3">
                  <h1 className="text-2xl text-white">Experience</h1>
                  <h1 className="text-lg text-white">Web Developer</h1>
                  <div className="pl-2">
                    <p>Frontend Developer</p>
                    <p>2022-2023</p>
                  </div>
                </div>
              </div>
              <div className="text-sm md:grid md:grid-cols-12 sm:block mt-2 rounded py-4 px-2 gap-x-4">
                <div className="md:col-span-6">

                </div>
                <div className="md:col-span-6">
                  
                </div>
              </div>
            </div>
            <div className="md:col-span-1"></div>
          </div>
        </div>
      </NavFooter>
    </>
  );
};

export default AboutMe;
