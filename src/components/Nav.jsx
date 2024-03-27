import {useState,useEffect} from 'react'
import Logo from "../assets/shared/logo.svg"
import Hamburger from "../assets/shared/icon-hamburger.svg"
import { Link } from 'react-router-dom'

function Nav({setMenuDown,menuDown}) {
  const links = [{
    num: '00',
    title:'HOME',
    page:'/',
    id:1
  },
  {
    num: '01',
    title:'DESTINATION',
    page:'/destination',
    id:2
  },
  {
    num:'02',
    title:'CREW',
    page:'/crew',
    id:3
  },
  {
    num:'03',
    title:'TECHNOLOGY',
    page:'/technology',
    id:4
  }
]

  const setMenuState = () => {
    !menuDown && setMenuDown(true)
  }

  return (
    <div className='nav w-full h-[88px] fixed top-[0px]
    flex justify-between p-[24px] items-center md:p-[0px] md:pl-[39px] md:h-[96px] 
    lg:pl-[55px] lg:pt-[35px] lg-pr-[0px]'>
      <div className="logo w-[40px] h-[40px] md:h-[48px] md:w-[48px]">
        <img className='w-[100%] block h-[100%]' src= {Logo} alt="My logo" />
      </div>
      <button onClick={setMenuState} className="hamburger w-[24px] h-[21px] block md:hidden">
        <img className='w-[100%] pointer-events-none h-[100%]' src= {Hamburger} alt="My logo" />
      </button>
      <div className="navlist w-[450px] h-full bg-[#ffffff0e] hidden 
      md:flex
      lg:w-[830px] lg:h-[96px]">
        <ul className=' ul w-full h-full justify-between flex px-[50px]
        lg:px-[150px]'>
            {
              links.map(link=>
                <Link key={link.id} to ={link.page}>
                  <li className='w-auto h-[100%] text-white font-barlow flex items-center text-[14px] tracking-[2.36px] border-white hover:border-b-[2px]
                    lg:text-[16px]'>
                      {link.title}
                  </li>
                </Link>)
            }
        </ul>
      </div>
    </div>
  )
}

export default Nav