import { useState } from 'react'
import style from './b2c.module.css'
export default function InputForAddStudents() {
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
    <section className={`${style.shadow} rounded-[20px]`}>
      <h3 className='font-semibold text-[22px] leading-[100%] text-[#FFFFFF] bg-[#0085F9]  py-[15.5px] rounded-t-[20px] px-[40px]'>Добавить информацию о студенте:</h3>
      {/*  Inputs and checkbox  */}
      <div className='p-[40px] flex gap-[40px]'>
        {/* inputs  */}
        <div className='flex  flex-col gap-y-[20px]'>
          {/* InputByFullname  */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Кто оплатил *</label>
            <input
              placeholder='ФИО родителя или опекуна'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
          {/*  Students name */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">За кого *</label>
            <input
              placeholder='ФИО ученика'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
          {/*  Phone Number */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Номер телефона *</label>
            <input
              placeholder='+992 (--) --- -- --'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
          {/*  c */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Email</label>
            <input
              placeholder='example@email.com'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="email" name="email" id="" />
          </div>
          {/* Общая сумма к оплате *  */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Общая сумма к оплате *</label>
            <input
              placeholder='ФИО ученика'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
          {/* Фактически оплаченная сумма  */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Фактически оплаченная сумма</label>
            <input
              placeholder='ФИО ученика'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
          {/* Остаток  */}
          <div className='flex flex-col gap-y-[10px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Остаток</label>
            <input
              placeholder='ФИО ученика'
              className=' rounded-[0.26vw] text-[14px] w-[700px] max-[100%] max-w-[100%] outline-none px-[1.042vw] py-[0.26vw] border-[#0085F9] border-[1px]' type="text" name="" id="" />
          </div>
        </div>

        {/* checkbox */}
        <div className='flex flex-col gap-y-[20px]'>
          {/* check */}
          <div className='flex flex-col gap-y-[10px] w-[100%]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Чек *</label>
            <div className='flex items-center gap-[20px]'>
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
                  выдан
                </label>
              </div>
              <div className='flex items-center gap-[5px]'>
                <input
                  type="radio"
                  id="not-issued"
                  name="status"
                  className=" w-[16px] h-[16px] "
                />
                <label
                  htmlFor="not-issued"
                  className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                >
                  не выдан
                </label>
              </div>
            </div>
          </div>
          {/* date and time  */}
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
                    className='py-[0.4vw] px-[20px] rounded-[0.26vw] leading-[100%] w-[168px] text-[14px] max-w-[100%] outline-none border-[#0085F9] text-[#B3B3B3] border-[1px]'
                    value={date}
                    onChange={e => handleChangeDate(index, e.target.value)}
                  />
                ))}
              </div>

              <div className='flex items-center gap-[10px]'>
                <button
                  onClick={handleClick_addDate}
                  className='border-[#47B841] border-[2px] text-[#47B841] leading-[100%] font-semibold text-[14px] flex justify-center items-center py-[0.4vw] px-[1.042vw] rounded-[0.26vw]'
                  type="button"
                >
                  Добавить дату
                </button>
              </div>
            </div>
          </div>
          {/* Способ оплаты * */}
          <div className='flex flex-col gap-y-[10px] w-[100%] mt-[5px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Способ оплаты *</label>
            <div className='flex items-center gap-[20px]'>
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
                  расчётный счёт
                </label>
              </div>
              <div className='flex items-center gap-[5px]'>
                <input
                  type="radio"
                  id="not-issued"
                  name="status"
                  className=" w-[16px] h-[16px] "
                />
                <label
                  htmlFor="not-issued"
                  className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                >
                  наличные
                </label>
              </div>
              <div className='flex items-center gap-[5px]'>
                <input
                  type="radio"
                  id="not-issued"
                  name="status"
                  className=" w-[16px] h-[16px] "
                />
                <label
                  htmlFor="not-issued"
                  className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                >
                  кошелёк
                </label>
              </div>
            </div>
          </div>
          {/* STATUS */}
          <div className='flex flex-col gap-y-[10px] w-[100%]  mt-[5px]'>
            <label className='text-[#5F6073] text-[16px] font-semibold leading-[100%] ' htmlFor="">Статус *</label>
            <div className='flex items-center gap-[20px]'>
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
                  благонадежный
                </label>
              </div>
              <div className='flex items-center gap-[5px]'>
                <input
                  type="radio"
                  id="not-issued"
                  name="status"
                  className=" w-[16px] h-[16px] "
                />
                <label
                  htmlFor="not-issued"
                  className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                >
                  проблемный
                </label>
              </div>
              <div className='flex items-center gap-[5px]'>
                <input
                  type="radio"
                  id="not-issued"
                  name="status"
                  className=" w-[16px] h-[16px] "
                />
                <label
                  htmlFor="not-issued"
                  className="text-[#5F6073] text-[15px] font-[500] leading-[100%] cursor-pointer"
                >
                  не завершил оплату
                </label>
              </div>
            </div>
          </div>
          {/* Комментарии */}
          <div className='flex flex-col  gap-y-[10px]'>
            <label className='text-[#5F6073] font-semibold  leading-[100%] text-[16px]' htmlFor="">Комментарии</label>
            <textarea className='border-[#0085F9] border-[1px] rounded-[5px]  p-[20px] outline-none h-[20.9vh] w-[700px]' name="" id=""></textarea>
          </div>

        </div>
      </div>
      <button className='ml-[40px] mb-[40px] bg-[#47B841] rounded-[12px] px-[20px] text-[#FFFFFF] text-[14px] font-semibold  leading-[100%] flex justify-center items-center py-[13.5px]'>Сохранить и добавить</button>

    </section >
  )
}
