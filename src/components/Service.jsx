import React from 'react'
import NavFooter from './NavFooter'

const Service = () => {
  return (
    <>
      <NavFooter>
        <div className="container mx-auto mt-16">
        <div className="grid md:grid-cols-8 sm:grid-cols-12">
        <div className="md:col-span-1"></div>
        <div className="container mx-auto md:col-span-6 sm:col-span-full">
          <h1>hello</h1>
        </div>
        <div className="md:col-span-1"></div>
          </div>
        </div>
      </NavFooter>
    </>
  )
}

export default Service