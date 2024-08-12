import Data from  '../data.json'
import {useEffect, useState} from 'react'
import Title from './title'

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
      },7000)

      return ()=> clearInterval(interval)
    })

    const changeCrewMember = (dot)=>{
      setCrewmember(dot)
    }

  return (
  <div className=' h-full w-full min-h-[800px] flex text-white flex-col items-center bg-cover bg-crewmobile
   sm:h-full
   md:overflow-y-hidden md:px-[50px]
   lg:min-h-0'>
     {/* title */}
     <Title num="02" text="MEET YOUR CREW"/>


      {/*other contents*/}
      <div className='justify-center w-full items-center flex-col flex 
        md:flex-col-reverse md:w-[80%]
        lg:flex-row-reverse lg:items-end'>
          
        {/* image */}
        <div className=' w-[90%] flex justify-center mt-[10px] h-[223px] border-b-[0.2px] border-[grey] 
          sm:h-[400px]
          md:w-[456.37px] md:h-[572px] md:mt-[50px]
          lg:w-[60%] lg:items-end lg:mt-[0px]
          lg2:h-[450px]'>
          <img className='w-auto h-full
          lg2:w-[70%]' src = {image} alt="crew_member"/>
        </div>

        <div className='flex flex-col w-full
          md:flex-col-reverse
          lg:lg:w-[50%] lg:pb-[100px]'>

             {/* dots */}
          <div className=" w-full h-[10px] items-center flex mt-[16px] justify-center gap-[15px]
           md:mt-[40px] md:px-[250px]
           lg:px-[0px] lg:w-[100px]">
            {
              dots.map((dot,index)=>
              index === crewmember? 
              <div key={index} onClick={()=>{changeCrewMember(index)}} className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[1]"></div>:
              <div key={index} onClick={()=>{changeCrewMember(index)}} className="w-[10px] h-[10px] rounded-[50%] bg-white opacity-[0.2]"></div>)
            }
          </div>

          {/* information */}
          <div className='flex flex-col justify-center items-center
            lg:items-start'>
            <div className="font-bellefair text-[16px] text-white opacity-[0.5] mt-[40px] 
              sm:text-[20px]
              md:text-[24px]">{upperRole}</div>
            <div className="font-bellefair text-[24px]
              sm:text-[30px]
              md:text-[40px]
              lg2:text-[32px]">{upperName}</div>
            <p className='text-center text-grey text-[15px] text-wrap mt-[15px] px-[30px] leading-[25px] font-barlow2 
            sm:text-[16px]
            lg:text-left lg:px-[0px]'>{bio}</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Crew