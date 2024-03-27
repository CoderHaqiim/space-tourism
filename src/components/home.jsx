import React from 'react'

function Home() {
  return (
    <div className='h-[100vh] flex flex-col justify-between items-center w-full pb-[48px] px-[24px] pt-[112px] bg-no-repeat bg-cover bg-mobilehome
     md:bg-tabhome md:pb-[90px]
     lg:flex-row lg:px-[130px] lg:items-end lg:pb-[130px] lg:bg-home'>

      <div className="w-[327px] flex flex-col items-center text-white 
        lg:items-start lg:w-[445px] lg:h-[382px] lg:ml-[20px]">
        <h2 className=' w-auto font-barlow text-[16px] text-grey tracking-[2.7px] mb-[2px] 
        md:mt-[90px] md:mb-[20px] md:text-[20px] md:tracking-[3.38px]
        lg:text-[28px] lg:mt-[0px]'>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className='font-bellefair text-[80px] h-auto mb-[10px] 
        md:m-[0px] md:leading-[150px] md:text-[150px]
        lg:text-[150px] lg:mt-[10px]'>SPACE</h1>
        <p className='font-barlow2 text-center w-[327px] h-[125px] px-[3px] text-grey text-[14.5px] leading-[25px] 
        md:w-[444px] md:text-[16px] md:pt-[20px] md:leading-[28px]
        lg:text-left lg:text-[18px] lg:tracking-[32] lg:mt-[10px]'>
          Let's face it; if you want to go to space,
          you might as well genuinely go to outer space,
          and not hover kind of on the edge of it.
          Well sit back, and relax because we'll give you a truly out of this world experience!<br/>
        </p>
      </div>

      <div className=" explore w-[150px] h-[150px] bg-white text-[black] items-center flex justify-center tracking-[1.25px] text-[20px] font-bellefair rounded-[50%] 
      md:h-[242px] md:w-[242px] md:tracking-[2px] md:text-[32px]
      lg:w-[274px] lg:h-[274px]">
        EXPLORE
      </div>
    </div>
  )
}

export default Home