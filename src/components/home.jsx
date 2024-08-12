import React from 'react'

function Home() {
  console.log(innerWidth)
  return (
    <div className='min-h-[620px] bg-mobilehome w-full h-full bg-cover flex flex-col items-center justify-center gap-[50px]
      lg:flex-row lg:gap-[0px]
      lg2:min-h-0'>
      <div className='lg:w-[50%]'>
        <div className='w-full font-barlow text-center text-[15px] leading-[25px] text-[white] h-[auto]
        md:text-[20px] md:leading-[3.35]
        lg:text-left lg:text-[18px]'>SO, YOU WANT TO TRAVEL TO</div>
        <div className='w-full text-[white] text-[80px] text-center tracking-[100] font-bellefair
        md:text-[150px] md:leading-[150px]
        lg:text-left lg:text-[120px]'>SPACE</div>
        <div className='w-full h-auto text-[15px] leading-[25px] text-center font-barlow2 text-[white] px-[10px]
        md:text-[16px] md:leading-[28px] md:px-[50px]
        lg:text-justify lg:pl-[0px] lg:pr-[100px] lg:text-[15px]'>
            Let's face it; if you want to go to space, you might as well 
            genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we'll give you a truly out of this world experience!
        </div>
      </div>

      {/* globe */}
      <div className='explore w-[150px] h-[150px] flex justify-center items-center rounded-[50%] bg-[white]
        sm:w-[220px] sm:h-[220px]
        md:w-[242px] md:h-[242px]'>
        <div className='font-bellefair 
         md:text-[32px] md:tracking-[2px]'>EXPLORE</div>
      </div>
    </div>
  )
}

export default Home