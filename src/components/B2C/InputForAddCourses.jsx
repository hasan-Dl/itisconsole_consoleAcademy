import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import style  from './b2c.module.css'
export default function InputForAddCourses() {
    const photoRef = useRef(null)

    const handleClick = () => {
        photoRef.current?.click()
    }
    const [add_date, setAdd_Date] = useState([])

    const handleClick_addDate = () => {
        setAdd_Date(prev => [...prev, ""])
    }


    const handleChangeDate = (index, value) => {
        setAdd_Date(prev => {
            const newDate = [...prev]
            newDate[index] = value
            return newDate
        })
    }



    return (
        <section className='rounded-[1.042vw]  py-[2.604vw] pt-[2.604vw] w-[1520px] bg-[#F3F4FF]'>
            <div className="flex items-center gap-[1.563vw] mb-[2.083vw]">
                <h1 className="text-[#0085F9] Montserrat text-[1.354vw] font-bold">Доходы </h1>
                <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
                <Link to={'/expenses/b2c'} className="text-[#0085F9] Montserrat text-[1.354vw] font-bold">B2C</Link>
                <div className="bg-[#0085F9] w-[8.81px] h-[8.81px] rounded-[100%]"></div>
                <Link to={'/expenses/b2c/add_courses'} className="text-[#0085F9] Montserrat text-[1.354vw] font-bold">Добавить курс</Link>
            </div>
            <div className={`${style.shadow} rounded-[1.042vw]`}>
                <h2 className='text-[1.146vw] bg-[#0085F9] py-[0.807vw] leading-[100%] pl-[2.083vw] font-semibold text-[#FFFFFF] rounded-t-[1.042vw]'>Информация о курсе:</h2>
                <div className='bg-white p-[2.083vw] flex  gap-[2.083vw] max-w-[100%] rounded-b-[1.042vw]'>
                    <div className='flex flex-col gap-y-[1.042vw] '>
                        <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Иконка *</label>
                        <div>
                            <input
                                className='hidden'
                                ref={photoRef}
                                type="file"
                            />
                            <div
                                onClick={handleClick}
                                className='flex justify-center text-[0.729vw] text-center cursor-pointer px-[1.042vw] text-[#B3B3B3] items-center w-[11.458vw] h-[11.458vw] rounded-[0.26vw] border-[#0085F9] border-[1px] border-dashed'
                            >
                                Нажмите для добавления фотографии
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[1.042vw] w-[100%] '>
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Название курса *</label>
                            <input className=' rounded-[0.26vw] max-w-[100%] outline-none px-[1.042vw] py-[13.5px] border-[#0085F9] border-[1px] leading-[100%]' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Сумма к оплате *</label>
                            <input className=' rounded-[0.26vw] max-w-[100%] outline-none px-[1.042vw] py-[13.5px] border-[#0085F9] border-[1px] leading-[100%]' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col gap-y-[10px] w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%]' htmlFor="">
                                Даты платежей *
                            </label>
                            <div className='flex items-center gap-[10px]'>

                                <div className='flex items-center gap-[10px]'>
                                    {add_date.map((date, index) => (
                                        <input
                                            key={index}
                                            type="date"
                                            className='py-[13px] px-[1.042vw] rounded-[0.26vw] leading-[100%] w-[168px] text-[0.729vw] max-w-[100%] outline-none border-[#0085F9] text-[#B3B3B3] border-[1px]'
                                            value={date}
                                            onChange={e => handleChangeDate(index, e.target.value)}
                                        />
                                    ))}
                                </div>

                                <div className='flex items-center gap-[10px]'>
                                    <button
                                        onClick={handleClick_addDate}
                                        className='border-[#47B841] border-[2px] text-[#47B841] leading-[100%] font-semibold text-[0.729vw] flex justify-center items-center py-[13px] px-[1.042vw] rounded-[0.26vw]'
                                        type="button"
                                    >
                                        Добавить дату
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
