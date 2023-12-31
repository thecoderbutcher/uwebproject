"use client"
import Image from 'next/image';
import SearchMobile from './SearchMobile';
import {useMediaQuery } from 'react-responsive';
import {Link} from 'react-scroll'
import { useContext, useEffect, useState } from "react";

//icons
import {BiMenuAltRight,BiX} from 'react-icons/bi';
import { SearchContext } from '../context/search';

export default function Header() {
  const {setSearchActive} = useContext(SearchContext)
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({query:'(min-width: 1300px)'})

  useEffect(() => {
    const handleScroll = () => {
      //header
      setHeader(window.scrollY > 40);
      //search 
      setSearchActive(window.scrollY > 800);
    };

    // add event
    window.addEventListener('scroll', handleScroll);

    //remove event
    return () => { window.removeEventListener('scroll', handleScroll) }
  });

  return (
    <header className={`${header ? 'bg-white shadow-md py-2':'bg-transpaarent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
      <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
        <div className='flex justify-between items-center px-4'>
          { /*logo*/}
          <Link to='home' smooth={desktopMode} spy={true} className='cursor-pointer'>
            <Image src={'/images/escudo.png'} width={41} height={32} alt='Upro Logo'/>
          </Link>
          {/*Nav Open */}
          <div onClick={()=> setNav(!nav)} className='cursor-pointer xl:hidden'>
            {nav ? <BiX className='text-4xl'/> : <BiMenuAltRight className='text-4xl'/> }
          </div>
        </div>
        {/*Regular Nav */}
        <nav className={`
              ${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0':'max-h-0 xl:max-h-max'} 
              flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium 
              xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150
              text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`
            }>
          <Link className='cursor-pointer' to='home' activeClass='active' smooth={desktopMode} spy={true}>Inicio</Link>
          <Link className='cursor-pointer' to='careers' activeClass='active' smooth={desktopMode} spy={true}>Carreras</Link> 
          <Link className='cursor-pointer' to='about' activeClass='active' smooth={desktopMode} spy={true}>About</Link> 
          <Link className='cursor-pointer' to='why' activeClass='active' smooth={desktopMode} spy={true}>Profesionales</Link> 
          <Link className='cursor-pointer' to='testimonial' activeClass='active' smooth={desktopMode} spy={true}>Noticias</Link> 
          <Link className='cursor-pointer' to='contact' activeClass='active' smooth={desktopMode} spy={true}>RRHH</Link> 
          <SearchMobile/>
        </nav>
      </div>
    </header>
  );
}