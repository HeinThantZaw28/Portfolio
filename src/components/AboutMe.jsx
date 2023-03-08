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
              <h1 className="text-3xl mb-2 text-white">About Me</h1>

              <img
                src="https://tokyo-nextjs.vercel.app/img/slider/1.jpg"
                alt=""
                className="w-screen h-auto md:rounded-md"
              />

              <h1 className="text-2xl text-white">Hein Thant Zaw</h1>
              <h1 className="mb-2">Web Developer</h1>

              <hr />

              <div className=" text-justify indent-5 mb-2">
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
              </div>
              <hr />
              <div className=" text-sm md:grid md:grid-cols-12 mt-2 sm:block">
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
              <div className="text-sm md:grid md:grid-cols-12 sm:block mt-2 bg-slate-900 rounded ml-1 mr-1 py-4 px-2">
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
              <div className="text-sm md:grid md:grid-cols-12 sm:block mt-2 bg-slate-900 rounded ml-1 mr-1 py-4 px-2">
                <div className="md:col-span-6 mb-3">
                  <h1 className=" text-2xl text-white mb-2">Education</h1>

                  <ul className="steps steps-vertical text-sm">
                    <li className="step step-primary">
                      <div className="flex justify-between gap-4">
                        <p className="">2018-2019</p>
                        <div className="block text-white text-justify">
                          <p>SQA Education,Scotland</p>
                          <p>Diploma in Computing</p>
                        </div>
                      </div>
                    </li>
                    <li className="step step-primary">
                      <div className="flex justify-between gap-4">
                        <p className="">2019-2020</p>
                        <div className="block text-white text-justify">
                          <p>University of Greenwich</p>
                          <p>Business Information Technology</p>
                        </div>
                      </div>
                    </li>
                    <li className="step step-primary"></li>
                  </ul>
                </div>
                <div className="md:col-span-6 mb-3">
                  <h1 className=" text-2xl text-white mb-2">Experiences</h1>
                  <ul className="steps steps-vertical text-justify">
                    <li className="step step-primary">
                      <div className="flex justify-between gap-4">
                        <p className="">2022-now</p>
                        <div className="block text-white text-justify">
                          <p>A Bank</p>
                          <p>Front-end Web Developer</p>
                        </div>
                      </div>
                    </li>
                    <li className="step step-primary"></li>
                  </ul>
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
