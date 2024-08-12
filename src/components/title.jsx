import React from 'react'

function Title({num,text}) {
  return (
    <div className="h-auto w-[100%] mb-[10px] pt-[88px] flex justify-center gap-[20px] text-white items-center
    md:justify-start md:my-[50px]
    lg:my-[20px]">
        <div className="font-barlow text-grey flex items-center justify-center md:text-[20px] md:mr-[20px]">{num}</div>
        <div className="font-barlow tracking-[2.7px] text-[16px] flex items-center justify-center md:text-[20px]">{text}</div>
    </div>
  )
}

export default Title

