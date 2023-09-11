'use client'

import { useContext } from "react";
//components
import Search from "./Search";
import Image from "next/image";
//context
import { SearchContext } from "../context/search.js";

export default function Hero() {
  const {searchActive} = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1">
              <span className="text-accent-default">UPRO</span> Universidad Provincial de Oficios{''}
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">La Universidad de oficios más importante de latinoamérica</p>
            <div className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image src={'/icons/playstore-btn.svg'} width={132} height={36} alt=""/>
              </button>
              <button className="btn-cta">
                <Image src={'/icons/appstore-btn.svg'} width={132} height={36} alt=""/>
              </button>
            </div>
          </div>
          <div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px] :right-[120px] xl:top-48">
            <Image src={'/images/tanque.png'} fill style={{objectFit:'contain'}} alt="" priority/>
          </div>
        </div>
      </div>
      {
        searchActive ? 
          <div className="fixed top-[80px] z-10 w-full max-w-[1920px]"><Search/></div>
          :
          <div className="-mt-12 w-full max-w-[1300px] mx-auto"><Search/></div>
      }
    </section>
  );
}