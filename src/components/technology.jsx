import Data from  '../data.json'
import {useState,useEffect} from 'react'
import Title from './title'

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
   <div className='h-full min-h-[730px] flex text-white flex-col items-center bg-no-repeat bg-cover bg-crewmobile w-full pb-[50px]
    sm:min-h-[800px]
    md:px-[50px]
    lg:min-h-0
    lg2:min-h-[580px]'>
    
     <Title num="03" text="SPACE LAUNCH 101"/>

      <div className='lg:w-full lg:h-full  lg:gap-[10px] lg:flex lg:flex-row-reverse lg:items-center'>

        {/* image */}
        <div className=' w-full my-[20px] h-[170px] border-b-2 border-white-600 md:mt-[50px] 
          sm:h-[300px]
          md:h-[310px]
          lg:w-[50%]'>
          <img className='w-[100%] h-full' src = {image} alt="crew_member"/>
        </div>
        <div className='lg:w-1/2 lg:flex'>

          {/* nav */}
          <div className=" w-full h-[20px] flex justify-center gap-[30px]
            md:mt-[20px] 
            lg:w-[120px] lg:flex-col lg:h-full lg:px-[0px] lg:justify-center">
            {
              btns.map((btn,index)=>
              index === tech?
              <button key={index} onClick={()=>{selectTechnology(index)}} className='text-[black] bg-white w-[40px] h-[40px] mt-[14px] text-[16px] font-bellefair rounded-[50%] md:h-[60px] md:w-[60px] md:text-[24px]'>{btn}</button>:
              <button key={index} onClick={()=>{selectTechnology(index)}} className='text-white border-white border-[1px] bg-transparent w-[40px] h-[40px] mt-[14px] text-[16px] font-bellefair rounded-[50%] md:h-[60px] md:w-[60px] md:text-[24px]'>{btn}</button>
              )
            }
          </div>

          {/* details */}
          <div className='w-full flex justify-center flex-col items-center'>
            <div className='mt-[55px] font-barlow text-[14px] text-center tracking-[2.36px] 
              sm:text-[20px]
              md:mt-[100px]
              lg:text-left lg:w-full lg:mt-[0px]'>THE TERMINOLOGY...</div>
            <div className="font-bellefair text-[24px] mt-[5px] text-center 
              sm:text-[30px]
              md:text-[40px]
              lg:text-left lg:w-full lg:text-[32px]">{upperName}</div>
            <p className='w-full px-[28px] tracking-[0px] text-center text-grey mt-[15px] font-barlow leading-[25px] 
              md:text-[16px] md:tracking-[28] md:w-[80%]
              lg:text-left lg:w-full lg:p-[0px] lg:pr-[10px] lg:text-[18px]'>{description}</p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Technology