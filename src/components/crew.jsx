import Data from  '../data.json'
import {useEffect, useState} from 'react'

function Crew() {
    const{crew} = Data
    const[crewmember,setCrewmember] = useState(0)
    const {name,images,role,bio} = crew[crewmember]
    const [image,setImage] = useState(images.png)
    const upperRole = role.toUpperCase()
    const upperName = name.toUpperCase()
    const dots = [1,2,3,4]

  
    useEffect(()=>{
      setImage(images.png)
    },[crewmember])

    useEffect(()=>{
      const interval = setInterval(()=>{
        if(crewmember < 3){
          setCrewmember(prev => prev + 1 )
        }else{
          setCrewmember(0)
        }
      },5000)

      return ()=> clearInterval(interval)
    })

  return (
   <div className='flex text-white  flex-col items-center bg-no-repeat bg-cover bg-crewmobile w-[100%] h-[100vh] pt-[100px] overflow-y-hidden'>
     {/* title */}
     <div className="h-[50px] w-[100%] flex justify-between px-[80px] text-white items-center 
      md:justify-start md:mt-[50px] md:px-[40px] md:text-[20px] md:tracking-[3.38px]
      lg:px-[190px]"> 
      <div className="font-barlow text-grey flex items-center justify-center md:text-[20px] md:mr-[20px]">02</div>
      <div className="font-barlow tracking-[2.7px] text-[16px] flex items-center justify-center md:text-[20px]">MEET YOUR CREW</div>
    </div>


      {/*other contents*/}
      <div className='justify-center items-center flex-col flex 
        md:flex-col-reverse md: mt-[20px] md:w-[80%]
        lg:flex-row-reverse lg:items-end lg:mt-[150px]'>
        {/* picture */}
        <div className=' w-[327px] flex justify-center my-[17px] h-[223px] border-b-[0.2px] border-[grey] 
          md:border-b-[0px] md:w-[456.37px] md:h-[572px] md:mt-[50px]
          lg:w-[50%] lg:items-end lg:my-[0px]'>
          <img className='w-auto h-[100%] ml-[18px]' src = {image} alt="crew_member"/>
        </div>

        {/* dots */}
        <div className='flex flex-col
          md:flex-col-reverse
          lg:lg:w-[50%] lg:pb-[100px]'>
          <div className=" w-full h-[10px] flex mt-[16px] justify-between
           md:mt-[40px] md:px-[250px]
           lg:px-[0px] lg:w-[100px]">
            {
              dots.map((dot,index)=>
              index === crewmember? 
              <div key={index} className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[1]"></div>:
              <div key={index} className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.2]"></div>)
            }
          </div>

          {/* information */}
          <div className='flex flex-col justify-center items-center
            lg:items-start'>
            <div className="font-bellefair text-[16px] text-white opacity-[0.5] mt-[40px] 
              md:text-[24px]">{upperRole}</div>
            <div className="font-bellefair text-[24px] md:text-[40px]">{upperName}</div>
            <p className='text-center text-grey text-[15px] mt-[15px] px-[30px] leading-[25px] font-barlow2 
            md:text-[16px]
            lg:text-left lg:px-[0px]'>{bio}</p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Crew