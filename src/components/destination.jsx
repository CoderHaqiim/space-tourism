import Data from  '../data.json'
import {useState,useEffect,useRef} from 'react'
import Title from './title'

function Destination() {
  const{destinations} = Data
  const[destination,setDestination] = useState(0)
  const {name,images,description,distance,travel} = destinations[destination]
  const [image,setImage] = useState(images.png)
  const upperName = name.toUpperCase()
  const upperDistance = distance.toUpperCase()
  const upperTravel = travel.toUpperCase()
  const list = ['MOON','MARS','EUROPA','TITAN']
  const [selected, setSelected] = useState(0)

  useEffect(()=>{
    setImage(images.png)
  },[destination])

  const chooseDestination = (index) => {
    console.log('clicked')
    setDestination(index)
    setSelected(index)
  }

  return (
   <div className='w-full pb-[100px] destination bg-destinationmobile bg-cover flex-col flex min-h-[950px]
    sm:h-full
    md:px-[50px]
    lg:min-h-0 h-full lg:pb-0
    lg2:min-h-[580px]'>
    <Title num="01" text="PICK YOUR DESTINATION"/>

    <div className='flex  w-full flex-1 flex-col items-center px-[20px] gap-[50px]
      md:px-[80px]
      lg:flex-row lg:px-[50px] lg:justify-center
      lg2:px-[100px] lg2:gap-[100px]'>

      <div className='globe infinite h-[170px] w-[170px] mt-[20px]
        sm:w-auto sm:h-[300px]
        md:w-[300px] md:h-[300px]
        lg:w-[350px] lg:h-[350px]
        lg2:w-[280px] lg2:h-[280px]'>
        <img className= 'w-full h-full' src={image} alt="destination_image" />
      </div>

      <div className='w-full flex flex-1 gap-[30px] flex-col justify-between
        lg:pb-[0px] lg:gap-[10px]'>
        <ul className='flex w-full h-auto justify-center gap-[30px]
        lg:justify-start'>
          {
            list.map((list,index) => 
              <li key= {index} onClick={()=>{chooseDestination(index)}} className={` ${selected === index? 'border-b-[3px]' :'border-b-[0px]'} text-[15px] cursor-pointer text-white border-b-[white]
              md:text-[16px]
              lg:text-[15px]`}>{list}</li>
            )
          }
        </ul>
        <div className='w-full h-auto flex justify-center text-center text-[56px] font-bellefair text-[white]
          md:text-[80px]
          lg:text-left lg:justify-start lg:text-[70px]'>{upperName}</div>
        <div className='w-full h-auto text-center font-barlow2 text-[15px] leading-[25px] text-[white]
          sm:text-[16px]
          md:text-[16px] leading-[28px]
          lg:text-left lg:text-[15px]'>
          {description}
        </div>

        <div className=' p-[20px] w-full flex gap-[10px] flex-col border-t-[solid] border-t-[1px] border-t-[#ffffff40]
        sm:flex-row 
        lg:p-[0px] lg2:pt-[20px]'>
          <div className='w-full'>
            <div className='text-center text-[white] 
              lg:text-left'>AVG. DISTANCE</div>
            <div className='font-bellefair text-[28px] text-[white] text-center
              lg:text-left'>{upperDistance}</div>
          </div>
          <div className='w-full'>
            <div className='text-center text-[white] 
              lg:text-left'>EST. TRAVEL TIME</div>
            <div className='font-bellefair text-[28px] text-[white] text-center 
              lg:text-left'>{upperTravel}</div>
          </div>
        </div>
      </div>

    </div>
   </div>
  )
}

export default Destination