import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className="mx-auto w-full max-w-7xl">
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Sai Kiran Manchala
                    <span className="hidden sm:block text-4xl">-Full Stack Developer</span>
                </h2>
            </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96" src="https://cdn.pixabay.com/photo/2016/03/31/18/26/coding-1294361_1280.png" alt="image1" />
           
        </div>
    </aside>    

    <div className="grid  place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src="https://cdn.pixabay.com/photo/2017/02/03/05/32/man-2034538_640.png" alt="image2" />
    </div>

    <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Nen Evvaniki Vinaa...</h1>
</div>
  )
}

export default User