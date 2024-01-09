import Slider from '@/container/Home/Carousel';
import Stepper from '@/container/Home/Stepper';
import RootLayout from '@/components/layout';
import Sliderpages from '@/container/Home/sliderpages';
import MenuPages from '@/container/Home/MenuPages';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import ProgressBar from '@/container/Home/ProgressBar';
import MenuIcon from '@/container/Home/MenuIcon';
import ShowCard from '@/container/Home/ShowCard';


export default function Home() {


  return (
    <RootLayout>
      <>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
          <div className=" w-max">
            <h1
              className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                 My  Name  Is
              {/* Welcome To Profile */}
            </h1>
            <h1
              className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold mt-5">
                Mr.Chonracaht Intarasut
              {/* Welcome To Profile */}
            </h1>
          </div>
        </div>

        <MenuIcon/>
        <ShowCard/>
        <MenuPages/>
        <ProgressBar/>
        <Stepper />
       
        {/* <Slider /> */}
        <Sliderpages />




      </>
    </RootLayout>
  )
}
