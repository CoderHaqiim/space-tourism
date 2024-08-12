import {useState,useEffect} from 'react'
import Logo from "../assets/shared/logo.svg"
import Hamburger from "../assets/shared/icon-hamburger.svg"
import { Link } from 'react-router-dom'

function Nav({setMenuDown,menuDown}) {
  const [color,setColor] = useState('colorless')
  const [selected, setSelected] = useState(1)

  const selectNav = (id) =>{
    setSelected(id)
  }
  
  onscroll = () =>{
    if(scrollY > 0){
      setColor('colored')
    }else{
      setColor('colorless')
    }
  }
  
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
    <div className={`${color == "colored"? "bg-[#110f13ee]" : "bg-[transparent]"} m-auto nav z-[20] w-full h-[88px] max-w-[1500px] fixed top-[0px] flex justify-between items-center px-[10px]
      md:p-[10px] md:pl-[39px] md:h-[96px] 
      lg:h-[50px]
      xl:pl-[55px]  xl-pr-[0px]`}>
        
      <div className="logo w-[40px] h-[40px]">
        <img className='w-[100%] block h-[100%]' src= {Logo} alt="My logo" />
      </div>
      <button onClick={setMenuState} className="hamburger w-[24px] h-[21px] block md:hidden">
        <img className='w-full pointer-events-none h-[100%]' src= {Hamburger} alt="My logo" />
      </button>
      <div className="navlist w-[450px] h-full bg-[#ffffff0e] hidden 
      md:flex
      lg:w-[830px]">
        <ul className='ul w-full h-full justify-between flex px-[50px]
        lg:px-[150px]'>
            {
              links.map(link=>
                <Link key={link.id} to={link.page} onClick={()=>{selectNav(link.id)}}>
                  <li className={`${link.id === selected? "border-b-[2px] border-white":"border-[transparent]"} w-auto h-[100%] text-white font-barlow flex justify-center items-center text-[14px] tracking-[2.36px] hover:border-[#FFFFFF20] hover:border-b-[2px]
                    xl:text-[16px]`}>
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