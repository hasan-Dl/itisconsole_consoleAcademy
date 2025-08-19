import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputForAdd_Projects from '../components/B2B/InputForAdd_Projects'

export default function B2B() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(prev => !prev)

  }
  return (
    <section className='mt-[50px]'>
      <div className="flex items-center gap-[30px] mb-[40px]">
        <h1 className="text-[#0085F9] Montserrat text-[26px] font-bold">Доходы </h1>
        <span className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></span>
        <Link to={'/expenses/b2b'} className="text-[#0085F9] Montserrat text-[26px] font-bold">B2B</Link>
        {open ?
          ("")
          :
          (
            <>
              <span className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></span>
              <p className="text-[#0085F9] Montserrat text-[26px] font-bold">Добавить проект</p></>
          )}
      </div>
      {/* ---------- */}
      {!open ? ("") : (<>  <button onClick={handleClick} className='bg-[#47B841]  rounded-[9394px] px-[40px] py-[13.5px] text-[#FFFFFF] text-[14px] font-semibold'>Добавить проект</button></>)}
    

      {open ?
        ("")
        :
        (
          <>
            <InputForAdd_Projects />
          </>
        )}

    </section>
  )
}
