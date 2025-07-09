import search from '../../images/search.png';
import { course } from '../../data/data';
import add from '../../images/ImageB2C/iconAdd.png'
import { Link, useNavigate } from 'react-router-dom';
import style from './b2c.module.css'
export default function Data_B2C() {
    const navigate = useNavigate()
    function handleAddCourseClick(e) {
        e.preventDefault();
        navigate('/expenses/b2c/add_courses');
    }
    return (
        <section>
            {/* Поисковая строка */}
            <div className='flex items-center gap-[20px] py-[6px] px-[20px] w-[400px] bg-[#FFFFFF] rounded-[3000px] mb-[20px]'>
                <img src={search} alt="Поиск" />
                <input
                    placeholder='Поиск...'
                    className='w-full text-[#B3B3B3] Montserrat font-semibold text-[12px] outline-none bg-transparent placeholder:text-[#B3B3B3]'
                    type="text"
                />
            </div>

            {/* Список курсов */}
            <div className={`  grid grid-cols-4 gap-[20px] w-[100%]`}>
                {course.map((item) => (
                    <Link
                        key={item.id}
                        to={`/expenses/b2c/${item.name.replace(/\s+/g, '_')}`}
                        state={{ id: item.id }}
                        className={`${style.shadow} flex items-center justify-between bg-white rounded-[20px] p-4 shadow-[#0C0C0D] blue-[32px] max-w-[100%]`}
                    >
                        <div className="flex items-center gap-4">
                            <img
                                className="w-[70px] h-[70px] rounded-[12px] object-cover"
                                src={item.course_icon}
                                alt={item.name}
                            />
                            <div className="flex flex-col justify-around w-[225px]">
                                <h3 className="text-[#0085F9] font-bold text-[14px] leading-tight ">
                                    {item.name}
                                </h3>
                                <div className='flex items-center gap-[5px]'>
                                    <p className='text-[#B3B3B3] Montserrat text-[14px] font-semibold leading-[100%] '>18</p>
                                    <p className="text-gray-400 text-sm">{item.students} Студентов</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                <button
                    onClick={handleAddCourseClick}
                    className='border-[#47B841] cursor-pointer bg-[#FFFFFF] w-[100%] border-[2px] rounded-[20px] p-[10px] flex items-center gap-[20px] '>
                    <img src={add} alt="" />
                    <p className='text-[#47B841] text-[16px] font-bold'>Добавить курс</p>
                </button>
            </div>
        </section>
    );
}
