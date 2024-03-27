import Data from  '../data.json'
import {useState,useEffect} from 'react'

function Destination() {
  const{destinations} = Data
  const[destination,setDestination] = useState(0)
  const {name,images,description,distance,travel} = destinations[destination]
  const [image,setImage] = useState(images.png)
  const upperName = name.toUpperCase()
  const upperDistance = distance.toUpperCase()
  const upperTravel = travel.toUpperCase()
  const list = ['MOON','MARS','EUROPA','TITAN']

  useEffect(()=>{
    setImage(images.png)
  },[destination])

  const chooseDestination = (index) => {
    setDestination(index)
  }

  return (
    <div className='flex text-white  flex-col items-center bg-no-repeat bg-cover bg-destinationmobile w-[100%] h-[850px] pt-[70px] 
    md:h-[1024px]
    lg:h-[900px] lg:pt-[110px]'>
      <div className="h-[50px] w-[100%] flex justify-between px-[80px] text-white items-center 
        md:justify-start md:mt-[50px] md:px-[40px] md:text-[20px] md:tracking-[3.38px]
        lg:px-[190px]"> 
        <div className="font-barlow text-grey flex items-center justify-center md:text-[20px] md:mr-[20px]">01</div>
        <div className="font-barlow tracking-[2.7px] text-[16px] flex items-center justify-center md:text-[20px]">PICK YOUR DESTINATION</div>
      </div>

      <div className='flex-col flex items-center
        lg:flex-row lg:justify-between lg:w-[70%] '>
        <div className=' w-[170px] my-[20px] h-[170px] 
          md:h-[300px] md:w-[300px] mt-[50px]
          lg:w-[445px] lg:h-[445px]'>
          <img className='w-[100%] h-[100%]' src = {image} alt="moon_image" />
        </div>
        <div className='flex flex-col items-center 
          lg:w-[445px] lg:h-[472px] lg:items-start lg:py-[20px] '>
          <nav className='w-full h-[33px] px-[70px] 
            md:px-[250px]
            lg:px-[0px]'>
            <ul className=' w-full h-full flex text-[14px] font-barlow tracking-[2.7px] justify-between text-white 
              md:mt-[40px] md:tracking-[2.7px] md:text-[16px]
              lg:w-[285.5px] lg:h-[34px] lg:mt-[0px]'>
              {
                list.map((list,index)=>
                  <li onClick={()=>{chooseDestination(index)}} key = {index} className='hover:border-b-[4px] text-grey border-white-600'>{list}</li>
                )
              }
            </ul>
          </nav>

          <h1 className="h-[70px] font-bellefair w-full text-[56px] mt-[10px] text-center 
            md:mt-[63px] md:text-[80px] 
            lg:text-left lg:mt-[20px]">{upperName}</h1>
          <p className='text-center h-[158px] leading-[25px] font-barlow2 text-[15px] w-[90%] px-[15px] text-grey border-b-[1px] mt-[5px] border-grey 
            md:mt-[50px] md:w-[70%] md:text-[16px] md:h-[200px]
            lg:w-full lg:text-left lg:px-[0px] lg:border-b-[0px]'>{description}</p>

          <div className='md:flex 
            lg:flex-row lg:w-full'>
            <div className="lg:w-[50%] lg:h-full">
              <div className=" w-full flex justify-center font-barlow text-grey text-[14px] mt-[30px] tracking-[2.36px]
                lg:justify-start">AVG. DISTANCE</div>
              <div className="text-white flex justify-center mt-[5px] font-bellefair text-[28px] 
                lg:justify-start">{upperDistance}</div>
            </div>
            <div className=" lg:w-[50%]">
              <div className="tracking-[2.36px] text-grey font-barlow flex justify-center text-[14px] mt-[25px]
              lg:justify-start">EST. TRAVEL TIME</div>
              <div className="text-[28px] font-bellefair flex justify-center mt-[5px] 
              lg:justify-start">{upperTravel}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination