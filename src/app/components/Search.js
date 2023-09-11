'use client'

import { useContext } from "react";
import { SearchContext } from "../context/search";

//components 
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import Image from "next/image";

export default function Search() {
  const {searchActive } = useContext(SearchContext);

  return (
    <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]':'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} 
      hidden xl:block w-full relative shadow-lg `}>
      <div className={`flex h-full ${searchActive && 'container mx-auto'} `}>
        <DateSelection />
        <HoursSelection />
        <LocationSelection/>
        {/* Search btn */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
        <div className="flex items-center px-6">
          {/**
            <Image src={'/icons/wsp-icon.png'} width={126} height={32} alt='Upro Logo'/>

            <Image src={'/icons/callcenter-icon.png'} width={60} height={32} alt='Upro Logo'/>  */}
          </div>
          <button className={`${searchActive ? 'btn btn-sm btn-accent xl:w-[164px]': 'btn btn-lg btn-accent xl:w-[184px]'}`}>Contacto</button>
        </div>
      </div>
    </div>
  )
}