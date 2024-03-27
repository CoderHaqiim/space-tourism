import React from 'react'
import { useState } from 'react'
import Close from "../assets/shared/icon-close.svg"
import { Link } from 'react-router-dom'

function Menubar ({menuDown,setMenuDown}){
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
  return(
    <>
      {
      menuDown?
      <div className='z-[1000] fixed w-[255px] h-full top-[0px] pt-[116px] right-[0px] bg-[#FFFFFF00] rounder-[15px] backdrop-blur-[50px]'>
        <button onClick={()=>{setMenuDown(false)}} className='w-[19.09pxpx] top-[33.95px] right-[24px] fixed h-[19.09pxpx] '>
          <img className="w-full h-full" src={Close} alt="" />
        </button>
        <ul className='w-full h-[200px] text-white px-[33px] pb-[28px] flex flex-col justify-between'>
          {
            links.map(link=>
              <Link key={link.id} to ={link.page}>
                <li onClick = {()=>{setMenuDown(false)}} className='flex items-start font-barlow text-[16px] tracking-[2.7px] h-[19px] w-full p-[0px]'>
                  <div className="flex h-full font-bold align-top w-[20px] mr-[10px]">{link.num}</div>
                  <div className="flex h-full align-top flex-1">{link.title}</div>
                </li>
              </Link>
          )
          }
        </ul>
      </div>:<></>
      }
    </>
  )
}

export default Menubar