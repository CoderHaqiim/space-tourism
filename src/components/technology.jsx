import Data from  '../data.json'
import {useState,useEffect} from 'react'

function Technology() {
    const{technology} = Data
    const[tech,setTech] = useState(0)
    const {name,images,description} = technology[tech]
    const [image,setImage] = useState(images.landscape)
    const upperName = name.toUpperCase()

    const btns = [1,2,3]

    useEffect(()=>{
      setImage(images.landscape)
    },[tech])
    
    const selectTechnology=(index)=>{
      setTech(index)
    }

  return (
   <div className='flex text-white  flex-col items-center bg-no-repeat bg-cover bg-crewmobile w-[100%] h-[100vh] pt-[70px]'>
      <div className="h-[50px] w-[100%] flex justify-between px-[80px] text-white items-center md:justify-start md:mt-[50px] md:px-[40px] md:text-[20px] md:tracking-[3.38px]"> 
        <div className="font-barlow text-grey flex items-center justify-center md:text-[20px] md:mr-[20px]">03</div>
        <div className="font-barlow tracking-[2.7px] text-[16px] flex items-center justify-center md:text-[20px]">SPACE LAUNCH 101</div>
      </div>
      <div className=' w-full my-[20px] h-[170px] border-b-2 border-white-600 md:mt-[50px] md:h-[310px]'>
        <img className='w-[100%] h-[100%]' src = {image} alt="crew_member"/>
      </div>

      <div className=" w-full h-[20px] flex justify-between px-[110px] md:mt-[20px] md:w-[210px] md:p-[0px]">
        {
          btns.map((btn,index)=>
          index === tech?
          <button key={index} onClick={()=>{selectTechnology(index)}} className='text-black bg-white w-[40px] h-[40px] mt-[14px] text-[16px] font-bellefair rounded-[50%] md:h-[60px] md:w-[60px] md:text-[24px]'>{btn}</button>:
          <button key={index} onClick={()=>{selectTechnology(index)}} className='text-white border-white border-[1px] bg-transparent w-[40px] h-[40px] mt-[14px] text-[16px] font-bellefair rounded-[50%] md:h-[60px] md:w-[60px] md:text-[24px]'>{btn}</button>
          )
        }
      </div>
      <div className='mt-[55px] font-barlow text-[14px] tracking-[2.36px] md:text-[16px] md:mt-[100px]'>THE TERMINOLOGY...</div>
      <div className="font-bellefair text-[24px] mt-[5px] md:text-[40px]">{upperName}</div>
      <p className='w-full px-[28px] tracking-[0px] text-center text-grey mt-[15px] font-barlow leading-[25px] md:text-[16px] md:tracking-[28] md:w-[80%]'>{description}</p>
   </div>
  )
}

export default Technology