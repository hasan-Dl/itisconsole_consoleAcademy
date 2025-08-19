import React, { useRef, useState } from 'react'
import styles from './b2b.module.css'
export default function InputForAdd_Projects() {
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
        <div className={`${styles.shadow} rounded-[20px] w-[1520px] max-w-[100%]`}>
            <h1 className='bg-[#0085F9] px-[40px] py-[13.5px] rounded-t-[20px] text-[#FFFFFF] text-[22px] font-semibold'>Добавить информацию о проекте:</h1>

            {/* -----  */}
            <div className='flex flex-col gap-y-[40px] p-[40px]'>
                {/* section 1   - Input photo and Inputs Text  */}
                <div className='flex gap-[40px]'>
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
                    <div className='flex flex-col gap-y-[20px] w-[100%]'>
                        {/* input text */}
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Название проекта *</label>
                            <input className=' rounded-[0.26vw] max-w-[100%] outline-none text-[14px] font-[400]  px-[1.042vw] py-[13.5px] leading-[100%] border-[#0085F9] border-[1px]' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Название организации *</label>
                            <input className=' rounded-[0.26vw] max-w-[100%] outline-none text-[14px] font-[400]  px-[1.042vw] py-[13.5px] leading-[100%] border-[#0085F9] border-[1px]' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Общая сумма *</label>
                            <input className=' rounded-[0.26vw] max-w-[100%] text-[14px] font-[400]  outline-none px-[1.042vw] py-[13.5px] border-[#0085F9] border-[1px] leading-[100%]' type="text" name="" id="" />
                        </div>
                    </div>
                </div>

                {/* ----- Input checkbox  */}

                <div className='flex gap-[40px]'>
                    {/* --------------------------------------- */}
                    <div className='flex flex-col gap-y-[20px]'>
                        {/* ------------------------------- */}
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Подтверждающие документы *</label>
                            <input
                                placeholder='Договор, счет-фактура, акт выполненных работ и т.д.'
                                className=' rounded-[0.26vw] max-w-[100%] text-[14px] font-[400] outline-none px-[1.042vw] py-[13.5px] border-[#0085F9] border-[1px] leading-[100%] placeholder:text-[#B3B3B3]' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Статус оплаты *</label>
                            {/* checkbox  ------- */}
                            <div className='flex items-center gap-[20px] py-[13px]'>
                                <div className='flex items-center gap-[5px] py-[0.26vw]'>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        предоплата
                                    </label>
                                </div>
                                {/* --------  */}
                                <div className='flex items-center gap-[5px] py-[0.26vw]'>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        частичная оплата
                                    </label>
                                </div>
                                {/* --------------------------- */}
                                <div className='flex items-center gap-[5px] py-[0.26vw]'>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        постоплата
                                    </label>
                                </div>
                                {/* ----------------------------- */}
                                <div className='flex items-center gap-[5px] py-[0.26vw]'>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        оплачено
                                    </label>
                                </div>
                                {/* --------------- */}
                                <div className='flex items-center gap-[5px] py-[0.26vw]'>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        не оплачено
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/*   ---------- date and time ----------------------- */}
                        <div className='flex flex-col gap-y-[10px] w-[100%] mt-[4px]'>
                            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%]' htmlFor="">
                                Даты платежей *
                            </label>
                            <div className='flex items-center gap-[10px]'>

                                <div className='flex items-center gap-[10px]'>
                                    {add_date.map((date, index) => (
                                        <input
                                            key={index}
                                            type="date"
                                            className='py-[13.5px] px-[20px] rounded-[0.26vw] leading-[100%] w-[168px] text-[14px] max-w-[100%] outline-none border-[#0085F9] text-[#B3B3B3] border-[1px]'
                                            value={date}
                                            onChange={e => handleChangeDate(index, e.target.value)}
                                        />
                                    ))}
                                </div>

                                <div className='flex items-center gap-[10px]'>
                                    <button
                                        onClick={handleClick_addDate}
                                        className='border-[#47B841] border-[2px] text-[#47B841] leading-[100%] font-semibold text-[14px] flex justify-center items-center py-[13.5px] px-[1.042vw] rounded-[0.26vw]'
                                        type="button"
                                    >
                                        Добавить дату
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------- */}
                        <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                            <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Способ оплаты *</label>
                            {/* checkbox  ------- */}
                            <div className='flex items-center gap-[20px] py-[13px]'>
                                <div className='flex items-center gap-[5px] '>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        расчётный счёт
                                    </label>
                                </div>
                                {/* --------  */}
                                <div className='flex items-center gap-[5px] '>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        наличные
                                    </label>
                                </div>
                                {/* --------------------------- */}
                                <div className='flex items-center gap-[5px] '>
                                    <input
                                        type="radio"
                                        id="issued"
                                        name="status"
                                        className=" w-[16px] h-[16px] "
                                    />
                                    <label
                                        htmlFor="issued"
                                        className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                                    >
                                        кошелёк
                                    </label>
                                </div>
                                {/* ----------------------------- */}


                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[10px]  w-[100%]'>
                        <label className='text-[#5F6073] text-[0.938vw] font-semibold leading-[100%] ' htmlFor="">Комментарии</label>
                        <textarea className=' h-[330px] rounded-[0.26vw] max-w-[100%] outline-none text-[14px] font-[400]  px-[1.042vw] py-[13.5px] leading-[100%] border-[#0085F9] border-[1px]' type="text" name="" id="" />
                    </div>

                </div>
            </div>

            <button className='ml-[40px] mb-[40px] bg-[#47B841]  text-[14px] text-[#FFFFFF] font-semibold px-[40px] py-[13.5px] rounded-[12px]'>Сохранить и добавить</button>
        </div>
    )
}
